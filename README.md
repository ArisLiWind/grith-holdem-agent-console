# GRITH Hold'em Agent Console

GRITH Hold'em Agent Console is a static, browser-based Texas Hold'em table with a local AI-agent style decision console. It is designed as a playable product prototype: users can deal hands, read the board, ask for strategic advice, or let the assistant act for the hero seat.

The project runs entirely in the browser. There is no backend, build step, API key, or external dependency required.

## What It Does

- Simulates a Texas Hold'em hand from preflop through flop, turn, river, and showdown.
- Places one hero seat against three automated opponents.
- Shows a focused poker table with optional Rules and Agent panels.
- Supports English and Chinese UI copy, with Chinese as the default language.
- Explains each street with contextual guidance.
- Displays hand rankings from Straight Flush down to High Card.
- Evaluates the best five-card hand from seven available cards.
- Lets the user fold, check/call, raise, auto-advance streets, or start a new hand.
- Lets the assistant play the current decision automatically.
- Provides local analysis agents for equity, suggested action, and risk.
- Stores finished hand summaries in `localStorage`.
- Generates shareable hand summary text.

## Demo Flow

1. Open the app in a browser.
2. Click `新牌局` / `New Hand`.
3. Review the hero cards, community cards, pot, stack, current street, and best hand.
4. Open `规则说明` / `Rules` to review Texas Hold'em basics and hand rankings.
5. Open `Agent 控制台` / `Agent` to configure the assistant profile.
6. Click `询问建议` / `Ask Advice` for an explanation.
7. Click `Agent 代打` / `Agent Play` or choose an action manually.
8. Completed hands are archived locally in the hand database panel.

## Run Locally

Open `index.html` directly in a modern browser, or serve the folder with a small static server:

```bash
cd grith-cardgame
python3 -m http.server 3032
```

Then visit:

```text
http://127.0.0.1:3032
```

## Project Structure

```text
grith-cardgame/
├── index.html   # Static app shell and UI panels
├── styles.css   # Responsive GRITH visual system and poker-table layout
├── script.js    # Poker engine, local agents, evaluator, i18n, and local DB
├── README.md    # Project documentation
└── .gitignore
```

## Agent System

The app currently uses deterministic local helper agents instead of remote AI calls.

- `Range Scout` estimates simulated equity from the current board.
- `GTO Coach` recommends fold, check/call, or raise from equity and pot pressure.
- `Risk Sentinel` summarizes danger level and opponent pressure.
- The custom assistant profile changes the tone and strategy framing of advice.

This keeps the prototype safe to publish as a static site because no model credential is exposed in frontend code.

## Poker Engine Notes

- Cards are generated from a standard 52-card deck.
- Streets follow the Texas Hold'em order: preflop, flop, turn, river, showdown.
- The evaluator checks all five-card combinations available from hole cards plus community cards.
- Showdown compares evaluated hand scores among active players.
- Hand history, assistant profile, language, and memory state are persisted in browser `localStorage`.

## Deployment

Because this is a static frontend, it can be deployed to any static host:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
- Any ordinary static file server

For GitHub Pages, publish the repository root and set the entry file to `index.html`.

## Roadmap

- Add strict legal-action validation for blinds, position, min-raise size, and all-in states.
- Add side-pot support.
- Replace heuristic bots with pluggable opponent policies.
- Add multiplayer rooms with WebSocket state sync.
- Persist hand histories to a server database.
- Connect the Agent Console to a secure backend endpoint such as `POST /api/agent/decision`.
- Add solver-backed recommendations and exploit detection.

## License

MIT
