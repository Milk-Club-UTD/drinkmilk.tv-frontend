import { Link } from 'react-router-dom'
import './Home.css'

const MOCK_ROOMS = [
  { id: 'movie-night', title: 'Movie Night', host: 'Alice', viewers: 5, movie: 'Interstellar' },
  { id: 'horror-fans', title: 'Horror Fans', host: 'Bob', viewers: 3, movie: 'The Shining' },
  { id: 'anime-club', title: 'Anime Club', host: 'Charlie', viewers: 8, movie: 'Spirited Away' },
  { id: 'chill-vibes', title: 'Chill Vibes', host: 'Dana', viewers: 2, movie: 'The Grand Budapest Hotel' },
  { id: 'classics', title: 'Classics Only', host: 'Eve', viewers: 4, movie: 'Pulp Fiction' },
  { id: 'date-night', title: 'Date Night', host: 'Frank', viewers: 2, movie: 'La La Land' },
]

function Home() {
  return (
    <div className="home">
      <nav className="home-nav">
        <Link to="/" className="home-nav-brand">drinkmilk.tv</Link>
        <Link to="/room/new" className="btn btn-primary btn-sm">+ Create Room</Link>
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
    </div>
  )
}

export default Home
