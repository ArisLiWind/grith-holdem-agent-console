# GRITH™ Hold'em Agents

GRITH™ Hold'em Agents is a browser-based Texas Hold'em prototype designed as a multi-agent assisted poker system. It converts the original cardgame concept into a playable poker operations desk: a felt table, automated opponents, agent recommendations, hand history, bilingual UI, and local persistence.

## Features

- Texas Hold'em flow: preflop, flop, turn, river, and showdown.
- One human hero seat against three automated opponents.
- Multi-agent assistant panel:
  - Range Scout estimates simulated equity from the current board.
  - GTO Coach recommends fold, check/call, or raise based on equity and pot odds.
  - Risk Sentinel summarizes risk level and active opponent pressure.
- Seven-card hand evaluator for best five-card poker hand selection.
- Local hand database stored in `localStorage`.
- Bilingual English / Chinese UI.
- Shareable hand summary text.
- Static frontend only: no build step and no external dependencies.

## Run Locally

Open `index.html` directly in a browser, or run a tiny static server:

```bash
python3 -m http.server 3032
```

Then open:

```text
http://127.0.0.1:3032
```

## Gameplay

1. Click **New Hand** to deal a Texas Hold'em hand.
2. Review your two hole cards, the public board, and the agent recommendations.
3. Choose **Fold**, **Check / Call**, **Raise**, or **Auto Street**.
4. Automated opponents respond using local heuristics.
5. Completed hands are archived in the local hand database.

## Architecture

The project is intentionally small and inspectable:

```text
.
├── index.html   # Game shell and UI panels
├── styles.css   # GRITH visual system and responsive table layout
├── script.js    # Poker engine, agents, evaluator, local DB, i18n
└── README.md
```

## Agent Model

The current system runs deterministic local helper agents inside the browser. They do not call remote AI APIs. The goal is to provide a clear foundation that can later connect to LLM agents, solver services, or multiplayer backends.

Suggested next steps:

- Add real betting rounds with position and side-pot handling.
- Replace heuristic opponents with pluggable bot policies.
- Add WebSocket multiplayer.
- Persist hand histories to a server database.
- Add API-backed AI agents for table narration and exploit detection.

## License

MIT
