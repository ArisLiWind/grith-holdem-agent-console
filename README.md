# GRITH™ Hold'em Agent Console

GRITH™ Hold'em Agent Console is a browser-based Texas Hold'em simulation and AI-agent game-control prototype. It lets a user create a poker assistant, choose its model profile, personality, strategy style, and memory mode, then enter a simulated poker room where the agent can either explain decisions or act on the player's behalf.

## Features

- Texas Hold'em flow: preflop, flop, turn, river, and showdown.
- One human hero seat against three automated opponents.
- Agent console:
  - Create a named assistant.
  - Choose model profile, personality, strategy style, and memory mode.
  - Ask for deep natural-language advice before acting.
  - Let the agent play the current decision automatically.
- Multi-agent analysis panel:
  - Custom user agent explains the core line.
  - Range Scout estimates simulated equity from the current board.
  - GTO Coach recommends fold, check/call, or raise based on equity and pot odds.
  - Risk Sentinel summarizes risk level and active opponent pressure.
- Seven-card hand evaluator for best five-card poker hand selection.
- Natural-language hand explanations archived with hand history.
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
3. Configure the assistant in the right-side Agent Console.
4. Click **Ask Advice** to receive a strategic explanation.
5. Click **Agent Play** to let the assistant make the decision, or choose **Fold**, **Check / Call**, **Raise**, or **Auto Street** manually.
6. Completed hands are archived in the local hand database.

## Architecture

The project is intentionally small and inspectable:

```text
.
├── index.html   # Game shell and UI panels
├── styles.css   # GRITH visual system and responsive table layout
├── script.js    # Poker engine, agent console, evaluator, local DB, i18n
└── README.md
```

## Agent Model

The current system runs deterministic local helper agents inside the browser. It does not place an API key in frontend code and does not call remote AI APIs directly. Model selection is represented as a configurable agent profile that influences local explanation and strategy behavior.

For production, connect the console to a secure backend that owns model credentials and exposes an endpoint such as:

```text
POST /api/agent/decision
```

The frontend can send table state, player profile, memory mode, and requested model. The backend can then call an LLM, a poker solver, or both, and return:

- recommended action
- confidence
- explanation
- memory update
- risk note

Suggested next steps:

- Add real betting rounds with position, legal action sizing, and side-pot handling.
- Replace heuristic opponents with pluggable bot policies.
- Add WebSocket multiplayer rooms.
- Persist hand histories to a server database.
- Add secure API-backed AI agents for table narration, exploit detection, and solver-backed strategy.
- Deploy through GitHub Pages, Vercel, Netlify, or any static host.

## License

MIT
