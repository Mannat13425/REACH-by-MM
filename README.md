# 🦢 REACH — Gamified Volunteer Tracking Platform

REACH turns community volunteering into a fun, rewarding journey. Track your hours, evolve your goose mascot, earn badges, and discover local volunteer events.

## Features

- **Animated Pond** — A living home screen with your goose, lily pads, sparkles, and ripples
- **Goose Evolution** — Your goose grows from an egg to an adult goose as you accumulate volunteer hours (resets every 40 hours per cycle, gaining a level)
- **Badge System** — Earn Bronze, Silver, Gold, Platinum, and Diamond badges at milestone hour thresholds
- **Volunteer Calendar** — Browse events by month and sign up directly from the app
- **Profile Page** — View your stats, badge collection, goose tracker, and full volunteer history
- **Responsive Navbar** — Works on desktop and mobile with a hamburger menu

## Pages

| Path | Description |
|------|-------------|
| `/` | Home — animated pond with your goose and key stats |
| `/about` | About Us — mission, how it works, community impact |
| `/calendar` | Calendar — monthly view with volunteer events |
| `/profile` | Profile — stats, badges, goose tracker, history |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Tech Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [React Router DOM v7](https://reactrouter.com/)
- CSS Modules / plain CSS with animations
- Google Fonts (Nunito)
