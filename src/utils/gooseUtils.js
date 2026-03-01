export const GOOSE_STAGES = [
  { name: 'Egg', emoji: '🥚', minHours: 0, maxHours: 9 },
  { name: 'Baby Gosling', emoji: '🐣', minHours: 10, maxHours: 19 },
  { name: 'Teen Gosling', emoji: '🐥', minHours: 20, maxHours: 29 },
  { name: 'Adult Goose', emoji: '🦢', minHours: 30, maxHours: 39 },
];

export function getGooseStage(cycleHours) {
  for (let i = GOOSE_STAGES.length - 1; i >= 0; i--) {
    if (cycleHours >= GOOSE_STAGES[i].minHours) return GOOSE_STAGES[i];
  }
  return GOOSE_STAGES[0];
}

export function getCycleHours(totalHours) {
  return totalHours % 40;
}

export function getLevel(totalHours) {
  return Math.floor(totalHours / 40);
}

export function getNextStageHours(cycleHours) {
  const stages = [10, 20, 30, 40];
  for (const h of stages) {
    if (cycleHours < h) return h - cycleHours;
  }
  return 0;
}

export const BADGES = [
  { name: 'Bronze', emoji: '🥉', threshold: 10, color: '#cd7f32' },
  { name: 'Silver', emoji: '🥈', threshold: 20, color: '#c0c0c0' },
  { name: 'Gold', emoji: '🥇', threshold: 50, color: '#ffd700' },
  { name: 'Platinum', emoji: '💎', threshold: 200, color: '#e5e4e2' },
  { name: 'Diamond', emoji: '💠', threshold: 400, color: '#b9f2ff' },
];

export function getEarnedBadges(totalHours) {
  return BADGES.filter(b => totalHours >= b.threshold);
}
