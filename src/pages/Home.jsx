import { Link } from 'react-router-dom';
import Pond from '../components/Pond';
import { mockUser } from '../data/mockData';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Welcome to REACH 🦢</h1>
        <p>Track your volunteer hours, grow your goose, and make a difference!</p>
        <Link to="/calendar" className="home-cta">Find Volunteer Events →</Link>
      </div>

      <Pond totalHours={mockUser.totalHours} />

      <div className="home-stats-row">
        <div className="home-stat-card">
          <div className="stat-value">{mockUser.totalHours}</div>
          <div className="stat-label">Hours Volunteered</div>
        </div>
        <div className="home-stat-card">
          <div className="stat-value">{mockUser.communityReached}</div>
          <div className="stat-label">People Reached</div>
        </div>
        <div className="home-stat-card">
          <div className="stat-value">{mockUser.teamCount}</div>
          <div className="stat-label">Team Members</div>
        </div>
      </div>

      <div className="home-welcome-banner">
        👋 Hello, {mockUser.name}! Keep volunteering to grow your goose!
      </div>
    </div>
  );
}

export default Home;
