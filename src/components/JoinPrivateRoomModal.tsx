import React, { useState } from 'react';
import './CreateRoomModal.css';

interface JoinPrivateRoomModalProps {
  onClose: () => void;
  onJoinRoom: (roomCode: string) => void;
} 

const JoinPrivateRoomModal: React.FC<JoinPrivateRoomModalProps> = ({ onClose, onJoinRoom }) => {
    const [roomCode, setRoomCode] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (roomCode.trim()) {
          onJoinRoom(roomCode);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Join Private Room</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="room-code">Room Code</label>
                        <input
                            id="room-code"
                            type="text"
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value)}
                            placeholder="Enter room code"
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" onClick={onClose} className="cancel-btn">
                            Cancel
                        </button>
                        <button type="submit" className="create-btn">
                            Join Room
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JoinPrivateRoomModal;