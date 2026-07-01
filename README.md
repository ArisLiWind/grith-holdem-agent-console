# GRITH Hold'em Agent Console

GRITH Hold'em Agent Console is a static, browser-based Texas Hold'em table with a local AI-agent style decision console. It is designed as a playable product prototype: users can deal hands, read the board, ask for strategic advice, or let the assistant act for the hero seat.

The poker table runs in the browser, with Vercel serverless API boundaries for redeem codes, payments, account storage, WeChat OAuth, and River Oracle chat. Secrets must stay in Vercel environment variables, never in frontend code.

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
- Keeps diamond-chip stacks across hands and supports six-digit chip redemption through a Vercel serverless API.
- Adds a chip purchase modal with an Alipay cashier API boundary.
- Adds a local account settings dialog, Agent chat bubbles, and an Admin-only redeem-code manager.
- Includes optional background music using Debussy's `Clair de lune`.
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
├── api/agent/chat.js   # Agent chat API boundary
├── api/auth/register.js # Email registration API boundary
├── api/pay/alipay.js   # Alipay cashier order API boundary
├── api/redeem.js       # Vercel serverless chip-code redemption endpoint
├── clair-de-lune.ogg   # Optional background music asset
├── index.html          # Static app shell and UI panels
├── styles.css          # Responsive GRITH visual system and poker-table layout
├── script.js           # Poker engine, local agents, evaluator, i18n, and local DB
├── README.md           # Project documentation
└── .gitignore
```

## Music Credit

The bundled background track is Claude Debussy's `Clair de lune` from `Suite bergamasque`, a public-domain composition. Keep the deployed audio file sourced from a public-domain or otherwise redistribution-safe recording, such as a Musopen/Wikimedia Commons style public-domain classical recording.

## Agent System

The app uses deterministic helper agents for instant table feedback, and `POST /api/agent/chat` can call Volcengine Ark through the OpenAI-compatible chat completions API.

- `Range Scout` estimates simulated equity from the current board.
- `GTO Coach` recommends fold, check/call, or raise from equity and pot pressure.
- `Risk Sentinel` summarizes danger level and opponent pressure.
- The custom assistant profile changes the tone and strategy framing of advice.

If Ark environment variables are missing, the backend returns a local natural-language fallback so the game stays playable. No model credential is exposed in frontend code.

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

For Vercel, deploy the `grith-cardgame` directory.

## Reddit Devvit Deployment

This project is now packaged as a Reddit Devvit Web app using the official Devvit Web `post` configuration. The Devvit bundle is generated into `public/`, with `index.html` as the tall custom post entrypoint.

```bash
cd grith-cardgame
npm run devvit:prepare
npx devvit login
npx devvit playtest
npx devvit upload
```

Notes:

- `devvit.json` uses the app slug `grith-holdem`. If Reddit requires a different unique slug, change the `name` value in `devvit.json` before upload.
- `public/` is generated and intentionally ignored by Git. `npx devvit upload` runs the configured build script before packaging.
- The currently available `devvit@0.13.6` CLI exposes `playtest` and `upload`; it does not expose a standalone `build` command.
- Core poker gameplay, mobile layout, music, hand evaluation, settlement display, and local state work inside the Devvit WebView.
- Vercel-only API routes under `api/` remain available for the website deployment. Reddit Devvit upload currently packages the frontend game; server-side payments, WeChat OAuth, and Ark chat can be ported to a Devvit server entry in a later pass.

Volcengine Ark chat needs these environment variables:

```text
ARK_API_KEY=your-volcengine-ark-api-key
ARK_MODEL=your-enabled-ark-endpoint-or-model-id
ARK_BASE_URL=https://ark.cn-beijing.volces.com/api/v3
```

WeChat Open Platform website login needs these environment variables:

```text
WECHAT_OPEN_APP_ID=your-website-appid
WECHAT_OPEN_APP_SECRET=your-website-appsecret
WECHAT_REDIRECT_URI=https://grith-cardgame.vercel.app/api/auth/wechat-callback
```

Optional Vercel KV / Upstash Redis variables for persistence:

```text
KV_REST_API_URL=your-kv-url
KV_REST_API_TOKEN=your-kv-token
```

Redeem code APIs no longer rely on a universal frontend code. Admin-created codes are recommended. Legacy local env support:

```text
CHIP_REDEEM_CODE=your-six-digit-code
CHIP_REDEEM_AMOUNT=1000
```

## Payment And Account Architecture

The current deployable version prepares the service boundaries needed for a real public game:

- `POST /api/pay/alipay` creates an Alipay order. Production integration needs `ALIPAY_APP_ID`, `ALIPAY_PRIVATE_KEY`, `ALIPAY_PUBLIC_KEY`, `ALIPAY_GATEWAY`, and an async notify endpoint that credits chips only after Alipay confirms payment.
- `POST /api/auth/register` is the email/profile storage boundary. Production should store password hashes with a real database and session/JWT cookies if password login is enabled.
- `GET /api/auth/wechat-login` starts WeChat QR OAuth login. `GET /api/auth/wechat-callback` exchanges the code for user info server-side.
- `POST /api/agent/chat` is the Ark-powered Agent chat boundary. It reads `ARK_API_KEY` and `ARK_MODEL` only from the server environment.
- `GET/POST /api/admin/redeem-codes` is the redeem-code manager boundary. Production should protect it with server-side admin auth and persistent storage.

Recommended production stack:

- Database: Supabase Postgres, Neon, PlanetScale, or Vercel Postgres.
- Realtime multiplayer: WebSocket service such as PartyKit, Supabase Realtime, or a small Node/WebSocket server.
- Auth: Supabase Auth, Clerk, Auth.js, or custom email/password with bcrypt/argon2.
- Payments: Alipay Open Platform `alipay.trade.page.pay` or `alipay.trade.wap.pay`, with signed server-side requests and verified async notifications.

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
