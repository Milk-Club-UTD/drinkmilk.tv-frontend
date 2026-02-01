import React, { useState } from 'react';
import './CreateRoomModal.css';

interface CreateRoomModalProps {
  onClose: () => void;
  onCreateRoom: (roomName: string, movieName: string, isPrivate: boolean) => void;
  error?: string;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ onClose, onCreateRoom, error }) => {
  const [roomName, setRoomName] = useState('');
  const [movieName, setMovieName] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName.trim()) {
      onCreateRoom(roomName, movieName, isPrivate);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="room-name">Room Name</label>
            <input
              id="room-name"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Enter room name"
              required
            />

            <label htmlFor="movie-name">Movie Name</label>
            <input
              id="movie-name"
              type="text"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              placeholder="Enter movie name"
              required
            />
          
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
              />
              Private Room
            </label>

            <div className="error" hidden={!error}>{error}</div>
          
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="create-btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoomModal;
