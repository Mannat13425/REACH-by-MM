import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About REACH 🦢</h1>
        <p>
          REACH is a gamified volunteer tracking platform that turns your community impact
          into a fun, rewarding journey. Watch your goose grow as you help others!
        </p>
      </div>

      <div className="about-section">
        <h2>Why Gamified Volunteering Works</h2>
        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon">🏆</div>
            <h3>Motivation through Rewards</h3>
            <p>Earning badges and leveling up your goose provides tangible milestones that keep you inspired to volunteer more.</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">👥</div>
            <h3>Community Connection</h3>
            <p>Seeing your impact grow alongside teammates creates a sense of shared purpose and accountability.</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">📈</div>
            <h3>Progress Visibility</h3>
            <p>Tracking hours visually helps you see how your small actions add up to massive community change over time.</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>How It Works</h2>
        <div className="about-steps">
          <div className="about-step">
            <div className="about-step-number">1</div>
            <div className="about-step-text">
              <h3>Sign Up & Get Your Egg 🥚</h3>
              <p>Create your account and receive your very own goose egg — the start of your volunteer journey!</p>
            </div>
          </div>
          <div className="about-step">
            <div className="about-step-number">2</div>
            <div className="about-step-text">
              <h3>Volunteer & Log Hours</h3>
              <p>Join events from the calendar, volunteer your time, and log your hours after each session.</p>
            </div>
          </div>
          <div className="about-step">
            <div className="about-step-number">3</div>
            <div className="about-step-text">
              <h3>Watch Your Goose Grow 🦢</h3>
              <p>As your hours accumulate, your goose evolves from an egg to a proud adult goose — and beyond!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-impact">
          <h2>Our Community Impact</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-value">1,200+</div>
              <div className="impact-label">Volunteers</div>
            </div>
            <div className="impact-stat">
              <div className="impact-value">8,500+</div>
              <div className="impact-label">Hours Logged</div>
            </div>
            <div className="impact-stat">
              <div className="impact-value">45,000+</div>
              <div className="impact-label">Lives Touched</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
