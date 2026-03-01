import GooseDisplay from './GooseDisplay';
import { getEarnedBadges } from '../utils/gooseUtils';
import './Pond.css';

const lilyPads = [
  { id: 1, size: 60, top: '20%', left: '10%', delay: '0s' },
  { id: 2, size: 50, top: '60%', left: '15%', delay: '1s' },
  { id: 3, size: 70, top: '30%', right: '12%', delay: '0.5s' },
  { id: 4, size: 45, top: '70%', right: '20%', delay: '1.5s' },
  { id: 5, size: 55, top: '80%', left: '35%', delay: '2s' },
];

const sparkles = [
  { id: 1, top: '15%', left: '25%', delay: '0s' },
  { id: 2, top: '40%', left: '80%', delay: '0.7s' },
  { id: 3, top: '70%', left: '60%', delay: '1.2s' },
  { id: 4, top: '20%', right: '35%', delay: '1.8s' },
  { id: 5, top: '55%', left: '5%', delay: '0.3s' },
];

function Pond({ totalHours }) {
  const earnedBadges = getEarnedBadges(totalHours);

  return (
    <div className="pond-container">
      {lilyPads.map(pad => (
        <div
          key={pad.id}
          className="lily-pad"
          style={{
            width: pad.size,
            height: pad.size,
            top: pad.top,
            left: pad.left,
            right: pad.right,
            animationDelay: pad.delay,
          }}
        />
      ))}

      {sparkles.map(s => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            animationDelay: s.delay,
          }}
        >✨</span>
      ))}

      <div className="ripple" style={{ top: '50%', left: '50%' }} />
      <div className="ripple" style={{ top: '50%', left: '50%', animationDelay: '1.5s' }} />

      <div className="pond-goose-center">
        <GooseDisplay totalHours={totalHours} />
        {earnedBadges.length > 0 && (
          <div className="pond-badge-row">
            {earnedBadges.map(b => (
              <span key={b.name} className="pond-badge" title={b.name}>{b.emoji}</span>
            ))}
          </div>
        )}
      </div>

      <div className="pond-waves" />
    </div>
  );
}

export default Pond;
