import { getGooseStage, getCycleHours, getLevel, getNextStageHours } from '../utils/gooseUtils';
import './GooseDisplay.css';

function GooseDisplay({ totalHours }) {
  const cycleHours = getCycleHours(totalHours);
  const level = getLevel(totalHours);
  const stage = getGooseStage(cycleHours);
  const nextHours = getNextStageHours(cycleHours);
  const progressPercent = (cycleHours / 40) * 100;

  const levelClass = level === 0 ? '' : level === 1 ? 'level-1' : level === 2 ? 'level-2' : 'level-3-plus';

  return (
    <div className="goose-display">
      <div className="goose-wrapper">
        <span className={`goose-emoji ${levelClass}`}>{stage.emoji}</span>
        {level >= 3 && <span className="goose-crown">👑</span>}
        {level > 0 && (
          <div className="goose-level-badge">Lv{level}</div>
        )}
      </div>
      <div className="goose-info">
        <div className="goose-stage-name">{stage.name}</div>
        <div className="goose-progress-bar-container">
          <div className="goose-progress-bar" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div className="goose-next-stage">
          {nextHours > 0 ? `Next stage in ${nextHours} hrs` : '🎉 Max stage!'}
        </div>
      </div>
    </div>
  );
}

export default GooseDisplay;
