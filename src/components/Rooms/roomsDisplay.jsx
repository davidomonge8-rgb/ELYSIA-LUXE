import { useState } from 'react';
import { supabase } from '../../config/supabaseClient.js';
import '../../componentsCss/Rooms/roomDisplay.css'

import obsidian from '../Rooms/images/obsidian.jpg'
import noir from '../Rooms/images/Noir.jpg'
import garden from '../Rooms/images/Garden loft.jpg'
import coastal from '../Rooms/images/Coastal.jpg'
import zen from '../Rooms/images/Zen.jpg'
import urban from '../Rooms/images/Urban.jpg'

function Display() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const openBooking = (roomName) => {
    setSelectedRoom(roomName);
    setIsModalOpen(true);
    setIsBooked(false);
    setEmail('');
    setError(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
    setIsBooked(false);
    setError(null);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data, error: supabaseError } = await supabase
        .from('bookings')
        .insert([
          {
            room_name: selectedRoom,
            email: email,
            booked_at: new Date().toISOString(),
            status: 'confirmed'
          }
        ])
        .select();

      if (supabaseError) throw supabaseError;

      console.log('Booking saved:', data);
      setIsBooked(true);
    } catch (err) {
      console.error('Booking error:', err);
      setError(err.message || 'Failed to save booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const rooms = [
    {
      id: 'obsidian',
      name: 'Obsidian Stone Suite',
      image: obsidian,
      description: 'A dramatic retreat carved from nature. Raw stone walls meet plush coral and slate textiles, with mood lighting that shifts from dawn to dusk.'
    },
    {
      id: 'noir',
      name: 'Noir Atelier Suite',
      image: noir,
      description: 'Cinematic darkness refined. A full media wall with hidden ambient lighting, curated bookshelf display, and deep leather seating for the sophisticated urban traveler.'
    },
    {
      id: 'garden',
      name: 'Garden Loft Deluxe',
      image: garden,
      description: 'Morning light pours through floor-to-ceiling glass into a tranquil haven of warm wood and soft neutrals. Includes a bespoke dressing gallery.'
    },
    {
      id: 'coastal',
      name: 'Coastal Retreat',
      image: coastal,
      description: 'Breezy elegance inspired by the shore. Soft blues, weathered wood, and panoramic ocean views create the perfect seaside escape.'
    },
    {
      id: 'zen',
      name: 'Zen Sanctuary',
      image: zen,
      description: 'Minimalist serenity with natural materials, indoor greenery, and a private meditation space designed for complete relaxation.'
    },
    {
      id: 'urban',
      name: 'Urban Penthouse',
      image: urban,
      description: 'Sleek modern luxury in the heart of the city. Floor-to-ceiling windows, smart home features, and a rooftop terrace with skyline views.'
    }
  ];

  return (
    <div>
      <div className="roomdisplay">
        {rooms.map((room) => (
          <div className="card" key={room.id}>
            <img src={room.image} alt={room.name} />
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <button onClick={() => openBooking(room.name)}>Book Now</button>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {!isBooked ? (
              <>
                <h2>Book {selectedRoom}</h2>
                <p>Enter your email to confirm your reservation.</p>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleBooking}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <div className="modal-buttons">
                    <button 
                      type="button" 
                      className="cancel-btn" 
                      onClick={closeModal}
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="confirm-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Booking...' : 'Confirm Booking'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="success-message">
                <h2>Booking Confirmed!</h2>
                <p>A confirmation has been sent to {email}</p>
                <button onClick={closeModal}>Close</button>
              </div>
            )}
            <button className="close-x" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;