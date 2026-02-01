import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import { useState } from 'react';
import CreateRoomModal from '../components/CreateRoomModal';
import JoinPrivateRoomModal from '../components/JoinPrivateRoomModal';

const MOCK_ROOMS = [
  { id: 'movie-night', title: 'Movie Night', host: 'Alice', viewers: 5, movie: 'Interstellar' },
  { id: 'horror-fans', title: 'Horror Fans', host: 'Bob', viewers: 3, movie: 'The Shining' },
  { id: 'anime-club', title: 'Anime Club', host: 'Charlie', viewers: 8, movie: 'Spirited Away' },
  { id: 'chill-vibes', title: 'Chill Vibes', host: 'Dana', viewers: 2, movie: 'The Grand Budapest Hotel' },
  { id: 'classics', title: 'Classics Only', host: 'Eve', viewers: 4, movie: 'Pulp Fiction' },
  { id: 'date-night', title: 'Date Night', host: 'Frank', viewers: 2, movie: 'La La Land' },
]

var roomData;

function Home() {
  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createRoomError, setCreateRoomError] = useState('');

  const [isJoinPrivateRoomModalOpen, setIsJoinPrivateRoomModalOpen] = useState(false);
  const [joinRoomError, setJoinRoomError] = useState('');

  const handleCreateRoom = async (roomName: string, movieName: string, isPrivate: boolean) => {
    
    console.log('Creating room:', { roomName, movieName, isPrivate });

    try {

      const response = await fetch("https://imaginary.api/api/createRoom", { // imaginary api call.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomName, movieName, isPrivate })
      });
      if (!response.ok) throw new Error('Failed to create room');

      roomData = await response.json();

      if (isPrivate) {
        navigate(`/room/${roomName}?code=${roomData.roomCode}`)
      } else {
        navigate(`/room/${roomName}`);
      }



    setIsModalOpen(false);
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setCreateRoomError('Request timed out. Please try again.');
      } else {
        setCreateRoomError('Failed to create room.');
      }
    }
  };

  const handleJoinPrivateRoom = async (roomCode: string) => {
    
    roomCode = roomCode.trim().toUpperCase();
    
    if (roomCode.length !== 6) {
      setJoinRoomError('Invalid room code. Please enter a valid 6-character code.');
      return;
    } else if (!/^[A-Z0-9]{6}$/.test(roomCode)) {
      setJoinRoomError('Room code can only contain uppercase letters and numbers.');
      return;
    }

    try {
      const response = await fetch("https://imaginary.api/api/joinPrivate", { // imaginary api call
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomCode })
      });
      if (!response.ok) throw new Error('Failed to join room');

      navigate(`/room/${roomCode}`);
      setIsJoinPrivateRoomModalOpen(false);
    } catch(error: any) {
      if (error.name === 'AbortError') {
        setJoinRoomError('Request timed out. Please try again.');
      } else {
        setJoinRoomError('Failed to join room.');
      }
    }
  };

  return (
    <div className="home">
      <nav className="home-nav">
        <Link to="/" className="home-nav-brand">drinkmilk.tv</Link>
        
        <div className="home-nav-actions">
                  <button onClick={() => {
                    setJoinRoomError('');
                    setIsJoinPrivateRoomModalOpen(true);
                  }} className="btn btn-secondary btn-sm">Join Private Room</button>
                  <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-sm">+ Create Room</button>
        </div> 
      </nav>

      <main className="home-main">
        <h1>Active Rooms</h1>
        <p className="home-subtitle">{MOCK_ROOMS.length} rooms live right now</p>

        <div className="room-grid">
          {MOCK_ROOMS.map((room) => (
            <Link to={`/room/${room.id}`} key={room.id} className="room-card">
              <div className="room-card-preview">
                {/* <span className="room-card-live">LIVE</span> */}
              </div>
              <div className="room-card-info">
                <h3>{room.title}</h3>
                <p className="room-card-movie">{room.movie}</p>
                <div className="room-card-meta">
                  <span className="room-card-host">Hosted by {room.host}</span>
                  <span className="room-card-viewers">
                    <span className="viewer-dot" />
                    {room.viewers} watching
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <CreateRoomModal
          error={createRoomError}
          onClose={() => setIsModalOpen(false)}
          onCreateRoom={handleCreateRoom}
        />
      )}

      {isJoinPrivateRoomModalOpen && (
        <JoinPrivateRoomModal
          error={joinRoomError}
          onClose={() => setIsJoinPrivateRoomModalOpen(false)}
          onJoinRoom={(roomCode: string) => {
            handleJoinPrivateRoom(roomCode);
          }}
        />
      )}
    </div>
  )
}

export default Home
