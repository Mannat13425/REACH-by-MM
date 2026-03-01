import { mockUser } from '../data/mockData';
import GooseDisplay from '../components/GooseDisplay';
import BadgeDisplay from '../components/BadgeDisplay';
import { getCycleHours, getLevel } from '../utils/gooseUtils';
import './Profile.css';

function Profile() {
  const { name, totalHours, communityReached, teamCount, history } = mockUser;
  const level = getLevel(totalHours);
  const cycleHours = getCycleHours(totalHours);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">🧑</div>
        <div className="profile-info">
          <h1>{name}</h1>
          <div className="profile-level">🦢 Goose Level {level} · {totalHours} Total Hours</div>
        </div>
      </div>

      <div className="profile-section">
        <h2>📊 Your Stats</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-value">{totalHours}</div>
            <div className="stat-label">Hours Volunteered</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{communityReached}</div>
            <div className="stat-label">People Reached</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{teamCount}</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{history.length}</div>
            <div className="stat-label">Events Attended</div>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h2>🏅 Badge Collection</h2>
        <BadgeDisplay totalHours={totalHours} showAll={true} />
      </div>

      <div className="profile-section">
        <h2>🦢 Goose Tracker</h2>
        <div className="goose-tracker">
          <div className="goose-tracker-visual">
            <GooseDisplay totalHours={totalHours} />
          </div>
          <div className="goose-tracker-info">
            <h3>Cycle Progress</h3>
            <p>{cycleHours} / 40 hours this cycle</p>
            <p>Level {level} Goose</p>
            <div className="goose-full-progress">
              <div
                className="goose-full-progress-bar"
                style={{ width: `${(cycleHours / 40) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h2>📋 Volunteer History</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, i) => (
                <tr key={i}>
                  <td>{entry.date}</td>
                  <td>{entry.event}</td>
                  <td>{entry.location}</td>
                  <td><span className="hours-chip">+{entry.hours}h</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
