import { BADGES } from '../utils/gooseUtils';
import './BadgeDisplay.css';

function BadgeDisplay({ totalHours, showAll = false }) {
  const badges = showAll ? BADGES : BADGES.filter(b => totalHours >= b.threshold);

  if (badges.length === 0 && !showAll) {
    return <p style={{ color: '#888', fontSize: '0.9rem' }}>Volunteer 10 hours to earn your first badge!</p>;
  }

  const displayBadges = showAll ? BADGES : badges;

  return (
    <div className="badge-display">
      {displayBadges.map(badge => (
        <div
          key={badge.name}
          className={`badge-item ${totalHours >= badge.threshold ? 'earned' : 'locked'}`}
          title={`${badge.name}: ${badge.threshold} hours`}
        >
          <span className="badge-emoji">{badge.emoji}</span>
          <span className="badge-name">{badge.name}</span>
        </div>
      ))}
    </div>
  );
}

export default BadgeDisplay;
