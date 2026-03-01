import { useState } from 'react';
import { mockEvents } from '../data/mockEvents';
import './Calendar.css';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [signedUp, setSignedUp] = useState([]);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const getEventForDay = (day) => mockEvents.find(e => e.day === day);

  const handleSignUp = (eventId) => {
    setSignedUp(prev => [...prev, eventId]);
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="calendar-page">
      <h1>📅 Volunteer Calendar</h1>
      <p className="calendar-subtitle">Find and sign up for volunteer events near you!</p>

      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={prevMonth}>‹</button>
        <h2>{MONTHS[month]} {year}</h2>
        <button className="calendar-nav-btn" onClick={nextMonth}>›</button>
      </div>

      <div className="calendar-grid">
        {DAYS.map(d => (
          <div key={d} className="calendar-day-header">{d}</div>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} className="calendar-day empty" />;
          const event = getEventForDay(day);
          const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
          return (
            <div
              key={day}
              className={`calendar-day ${event ? 'has-event' : ''} ${isToday ? 'today' : ''}`}
              onClick={() => event && setSelectedEvent(event)}
            >
              <div className="day-number">{day}</div>
              {event && <span className="event-dot">{event.title}</span>}
            </div>
          );
        })}
      </div>

      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>📋 {selectedEvent.title}</h2>
            <div className="modal-detail">
              <span className="icon">🕐</span>
              <span>{selectedEvent.time}</span>
            </div>
            <div className="modal-detail">
              <span className="icon">📍</span>
              <span>{selectedEvent.location}</span>
            </div>
            <div className="modal-detail">
              <span className="icon">👥</span>
              <span>{selectedEvent.spots} spots available</span>
            </div>
            <div className="modal-description">{selectedEvent.description}</div>
            <div className="modal-actions">
              {signedUp.includes(selectedEvent.id) ? (
                <button className="btn-signup" disabled style={{ opacity: 0.7 }}>✅ Signed Up!</button>
              ) : (
                <button className="btn-signup" onClick={() => handleSignUp(selectedEvent.id)}>
                  Sign Up Now
                </button>
              )}
              <button className="btn-close" onClick={() => setSelectedEvent(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
