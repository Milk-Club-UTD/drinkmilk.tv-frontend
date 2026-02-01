import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Room.css'

const MOCK_USERS = ['You', 'Alice', 'Bob', 'Charlie']

function Room() {
  const { roomId } = useParams()
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([
    { user: 'Alice', text: 'Hey! Ready to watch?' },
    { user: 'Bob', text: 'Let\'s go!' },
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    const text = input.trim()
    if (!text) return
    setMessages((prev) => [...prev, { user: 'You', text }])
    setInput('')
  }

  return (
    <div className="room">
      <header className="room-header">
        <Link to="/home" className="room-back">&#8592; drinkmilk.tv</Link>
        <span className="room-id">Room: {roomId}</span>
      </header>

      <div className="room-body">
        {/* Left column: video + users */}
        <div className="room-left">
          <div className="video-player">
            <div className="video-placeholder">
              <span>&#9654;</span>
              <p>Video Player</p>
            </div>
          </div>
          <div className="user-list">
            <h3>Viewers ({MOCK_USERS.length})</h3>
            <ul>
              {MOCK_USERS.map((user) => (
                <li key={user}>
                  <span className="user-dot" />
                  {user}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: chat */}
        <div className="room-chat">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.user === 'You' ? 'chat-msg-self' : ''}`}>
                <span className="chat-author">{msg.user}</span>
                <span className="chat-text">{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input-row">
            <input
              className="chat-input"
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="chat-send" onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room
