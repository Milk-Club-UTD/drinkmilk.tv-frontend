import { Link } from 'react-router-dom';
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

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJoinPrivateRoomModalOpen, setIsJoinPrivateRoomModalOpen] = useState(false);

  const handleCreateRoom = (roomName: string, movieName: string, isPrivate: boolean) => {
    console.log('Creating room:', { roomName, movieName, isPrivate });
    // Here you would typically handle the room creation logic,
    // e.g., making an API call to your backend.
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home">
      <nav className="home-nav">
        <Link to="/" className="home-nav-brand">drinkmilk.tv</Link>
        
        <div className="home-nav-actions">
                  <button onClick={() => setIsJoinPrivateRoomModalOpen(true)} className="btn btn-secondary btn-sm">Join Private Room</button>
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
          onClose={handleCloseModal}
          onCreateRoom={handleCreateRoom}
        />
      )}

      {isJoinPrivateRoomModalOpen && (
        <JoinPrivateRoomModal
          onClose={() => setIsJoinPrivateRoomModalOpen(false)}
          onJoinRoom={(roomCode: string) => {
            console.log('Joining private room:', roomCode);
            setIsJoinPrivateRoomModalOpen(false);
          }}
        />
      )}
    </div>
  )
}

export default Home
