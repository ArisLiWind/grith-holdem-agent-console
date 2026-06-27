const dbKeys = {
  hands: "grith.holdem.hands",
  nextHandId: "grith.holdem.nextHandId",
  language: "grith.holdem.language",
};

const copy = {
  en: {
    brandSub: "MULTI-AGENT POKER OPERATIONS",
    shareHand: "Share Hand",
    howToPlay: "How To Play",
    helpTitle: "Texas Hold'em with agent-assisted decisions.",
    helpOne: "You receive two private cards. Five community cards arrive across flop, turn, and river.",
    helpTwo: "Use any five-card combination from your two cards and the board to make the best hand.",
    helpThree: "Three local agents estimate strength, risk, and recommended action while automated opponents play against you.",
    handNo: "Hand",
    street: "Street",
    pot: "Pot",
    stack: "Stack",
    bestHand: "Best",
    agentDesk: "Agent Desk",
    ruleTitle: "Read the table. Ask the agents. Choose your line.",
    readyStatus: "Deal a new hand to start the table.",
    community: "Community Cards",
    fold: "Fold",
    checkCall: "Check / Call",
    raise: "Raise",
    nextStreet: "Auto Street",
    newHand: "New Hand",
    decisionLog: "Decision Log",
    localDb: "Local Hand DB",
    rangeScout: "RANGE SCOUT",
    gtoCoach: "GTO COACH",
    riskSentinel: "RISK SENTINEL",
    tableMemory: "TABLE MEMORY",
    noHands: "No archived hands yet.",
    folded: "You folded. Hand archived.",
    heroWins: "You win the pot.",
    villainWins: "Best opponent wins the pot.",
    showdown: "Showdown complete.",
    agentsReady: "Agents refreshed from the current board texture.",
    copied: "Share text copied.",
    soundOff: "Sound off.",
    soundOn: "Sound on.",
    languageButton: "中文",
    helpOpenLabel: "Hide rules",
    helpClosedLabel: "Show rules",
    preflop: "Preflop",
    flop: "Flop",
    turn: "Turn",
    river: "River",
    showdownStreet: "Showdown",
    foldedStreet: "Folded",
  },
  zh: {
    brandSub: "多 Agent 德州扑克作战系统",
    shareHand: "分享牌局",
    howToPlay: "玩法说明",
    helpTitle: "由多个 Agent 自动辅助决策的德州扑克。",
    helpOne: "每名玩家拿到两张私牌，公共牌会按翻牌、转牌、河牌逐步发出。",
    helpTwo: "从两张私牌和五张公共牌中任选五张，组成最大牌型。",
    helpThree: "三个本地 Agent 会估算胜率、风险和建议行动，自动对手会根据牌力与你博弈。",
    handNo: "牌局",
    street: "阶段",
    pot: "底池",
    stack: "筹码",
    bestHand: "最佳牌型",
    agentDesk: "Agent 作战台",
    ruleTitle: "读取牌桌，请 Agent 出谋划策，然后选择打法。",
    readyStatus: "点击新牌局开始德州扑克桌。",
    community: "公共牌",
    fold: "弃牌",
    checkCall: "过牌 / 跟注",
    raise: "加注",
    nextStreet: "自动推进",
    newHand: "新牌局",
    decisionLog: "决策日志",
    localDb: "本地牌局数据库",
    rangeScout: "范围侦察",
    gtoCoach: "策略教练",
    riskSentinel: "风险哨兵",
    tableMemory: "牌桌记忆",
    noHands: "还没有归档牌局。",
    folded: "你已弃牌，牌局已归档。",
    heroWins: "你赢下底池。",
    villainWins: "最强对手赢下底池。",
    showdown: "摊牌完成。",
    agentsReady: "Agent 已根据当前牌面刷新。",
    copied: "分享文案已复制。",
    soundOff: "声音已关闭。",
    soundOn: "声音已开启。",
    languageButton: "EN",
    helpOpenLabel: "收起说明",
    helpClosedLabel: "展开说明",
    preflop: "翻牌前",
    flop: "翻牌",
    turn: "转牌",
    river: "河牌",
    showdownStreet: "摊牌",
    foldedStreet: "弃牌",
  },
};

const suits = [
  { id: "s", symbol: "♠", color: "black" },
  { id: "h", symbol: "♥", color: "red" },
  { id: "d", symbol: "♦", color: "red" },
  { id: "c", symbol: "♣", color: "black" },
];
const ranks = [
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "T", value: 10 },
  { label: "J", value: 11 },
  { label: "Q", value: 12 },
  { label: "K", value: 13 },
  { label: "A", value: 14 },
];
const streetOrder = ["preflop", "flop", "turn", "river", "showdown"];
const baseBet = 40;

const state = {
  deck: [],
  community: [],
  players: [],
  street: "preflop",
  pot: 0,
  currentBet: baseBet,
  handId: 1,
  archived: false,
  muted: false,
  lang: copy[localStorage.getItem(dbKeys.language)] ? localStorage.getItem(dbKeys.language) : "en",
  log: [],
  agents: [],
};

const els = {
  handNumber: document.querySelector("#handNumber"),
  street: document.querySelector("#street"),
  pot: document.querySelector("#pot"),
  centerPot: document.querySelector("#centerPot"),
  heroStack: document.querySelector("#heroStack"),
  bestHand: document.querySelector("#bestHand"),
  equityFill: document.querySelector("#equityFill"),
  status: document.querySelector("#statusText"),
  community: document.querySelector("#communityCards"),
  heroSeat: document.querySelector("#heroSeat"),
  villains: [
    document.querySelector("#villainNorth"),
    document.querySelector("#villainWest"),
    document.querySelector("#villainEast"),
  ],
  agentCards: document.querySelector("#agentCards"),
  decisionLog: document.querySelector("#decisionLog"),
  handList: document.querySelector("#handList"),
  fold: document.querySelector("#foldButton"),
  check: document.querySelector("#checkButton"),
  raise: document.querySelector("#raiseButton"),
  nextStreet: document.querySelector("#nextStreetButton"),
  newHand: document.querySelector("#newHandButton"),
  share: document.querySelector("#shareButton"),
  language: document.querySelector("#languageToggle"),
  help: document.querySelector("#helpToggle"),
  helpPanel: document.querySelector("#helpPanel"),
  sound: document.querySelector("#soundToggle"),
  toast: document.querySelector("#toast"),
};

function t(key) {
  return copy[state.lang][key] || copy.en[key] || key;
}

function money(value) {
  return `$${Math.max(0, Math.round(value))}`;
}

function getHero() {
  return state.players[0];
}

function getActiveVillains() {
  return state.players.slice(1).filter((player) => !player.folded && player.stack > 0);
}

function getHands() {
  try {
    return JSON.parse(localStorage.getItem(dbKeys.hands)) || [];
  } catch {
    return [];
  }
}

function saveHands(hands) {
  localStorage.setItem(dbKeys.hands, JSON.stringify(hands.slice(0, 30)));
}

function nextHandId() {
  const current = Number(localStorage.getItem(dbKeys.nextHandId) || "1");
  localStorage.setItem(dbKeys.nextHandId, String(current + 1));
  return current;
}

function createDeck() {
  const cards = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      cards.push({
        id: `${rank.label}${suit.id}`,
        rank: rank.label,
        value: rank.value,
        suit: suit.id,
        symbol: suit.symbol,
        color: suit.color,
      });
    }
  }
  return shuffle(cards);
}

function shuffle(cards) {
  const next = [...cards];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function startHand() {
  state.deck = createDeck();
  state.community = [];
  state.street = "preflop";
  state.pot = 0;
  state.currentBet = baseBet;
  state.handId = nextHandId();
  state.archived = false;
  state.log = [];
  state.players = [
    makePlayer("You", "HERO", false),
    makePlayer("Vector-9", "TAG", true),
    makePlayer("Mira", "LAG", true),
    makePlayer("Old River", "NIT", true),
  ];

  for (let i = 0; i < 2; i += 1) {
    for (const player of state.players) {
      player.cards.push(state.deck.pop());
    }
  }

  postBlind(state.players[1], 10);
  postBlind(state.players[2], 20);
  logLine(`Hand #${state.handId}: blinds posted. Hero is on the button.`);
  refreshAgents();
  render();
}

function makePlayer(name, style, bot) {
  return {
    name,
    style,
    bot,
    stack: 1000,
    cards: [],
    folded: false,
    committed: 0,
    lastAction: "ready",
  };
}

function postBlind(player, amount) {
  const paid = Math.min(player.stack, amount);
  player.stack -= paid;
  player.committed += paid;
  state.pot += paid;
}

function heroAction(action) {
  const hero = getHero();
  if (state.archived || state.street === "showdown" || hero.folded) return;

  if (action === "fold") {
    hero.folded = true;
    hero.lastAction = "fold";
    logLine(`Hero folds on ${state.street}.`);
    archiveHand("folded");
    els.status.textContent = t("folded");
    render();
    return;
  }

  if (action === "raise") {
    commit(hero, state.currentBet + 60);
    hero.lastAction = "raise";
    logLine(`Hero raises to ${money(hero.committed)}.`);
  } else {
    commit(hero, state.currentBet);
    hero.lastAction = state.currentBet > hero.committed ? "call" : "check";
    logLine(`Hero ${hero.lastAction}s.`);
  }

  runBots();
  if (getActiveVillains().length === 0) {
    state.pot += getActiveVillains().reduce((sum, player) => sum + player.committed, 0);
    archiveHand("win");
    els.status.textContent = t("heroWins");
  } else {
    advanceStreet();
  }
  refreshAgents();
  tone(240, 0.05);
  render();
}

function commit(player, target) {
  const amount = Math.max(0, target - player.committed);
  const paid = Math.min(player.stack, amount);
  player.stack -= paid;
  player.committed += paid;
  state.pot += paid;
}

function runBots() {
  for (const bot of getActiveVillains()) {
    const strength = scoreToNormalized(evaluateCards([...bot.cards, ...state.community]).score);
    const aggression = bot.style === "LAG" ? 0.12 : bot.style === "NIT" ? -0.1 : 0;
    const threshold = 0.43 + aggression - state.community.length * 0.025;
    if (strength < threshold && Math.random() > 0.28) {
      bot.folded = true;
      bot.lastAction = "fold";
      logLine(`${bot.name} folds.`);
    } else if (strength > 0.7 && bot.stack > 70) {
      commit(bot, state.currentBet + 60);
      bot.lastAction = "raise";
      state.currentBet = Math.max(state.currentBet, bot.committed);
      logLine(`${bot.name} raises.`);
    } else {
      commit(bot, state.currentBet);
      bot.lastAction = "call";
      logLine(`${bot.name} calls.`);
    }
  }
}

function advanceStreet() {
  if (state.archived) return;
  const index = streetOrder.indexOf(state.street);
  const next = streetOrder[index + 1] || "showdown";
  for (const player of state.players) player.committed = 0;
  state.currentBet = baseBet;

  if (next === "flop") state.community.push(state.deck.pop(), state.deck.pop(), state.deck.pop());
  if (next === "turn" || next === "river") state.community.push(state.deck.pop());

  state.street = next;
  if (next === "showdown") {
    archiveHand("showdown");
    els.status.textContent = t("showdown");
  } else {
    logLine(`Street advanced to ${next}.`);
    els.status.textContent = t("agentsReady");
  }
  refreshAgents();
  render();
}

function archiveHand(result) {
  if (state.archived) return;
  state.archived = true;
  state.street = result === "folded" ? "folded" : state.street;

  let winner = getHero();
  let heroWon = result === "win";
  if (result === "folded") {
    winner = state.players.slice(1).find((player) => !player.folded) || state.players[1];
    winner.stack += state.pot;
    logLine(`${winner.name} wins ${money(state.pot)} after hero folds.`);
  }
  if (result === "showdown") {
    const active = state.players.filter((player) => !player.folded);
    winner = active.sort((a, b) => evaluateCards([...b.cards, ...state.community]).score - evaluateCards([...a.cards, ...state.community]).score)[0];
    heroWon = winner === getHero();
    winner.stack += state.pot;
    logLine(`${winner.name} wins ${money(state.pot)} at showdown.`);
  }
  if (result === "win") {
    getHero().stack += state.pot;
    logLine(`Hero wins ${money(state.pot)} uncontested.`);
  }

  const heroEval = evaluateCards([...getHero().cards, ...state.community]);
  const hands = getHands();
  hands.unshift({
    id: state.handId,
    result,
    heroWon,
    winner: winner.name,
    pot: state.pot,
    street: state.street,
    handName: heroEval.name,
    heroCards: getHero().cards.map(cardLabel),
    board: state.community.map(cardLabel),
    createdAt: new Date().toISOString(),
  });
  saveHands(hands);
  renderHandList();
}

function refreshAgents() {
  const hero = getHero();
  const heroEval = evaluateCards([...hero.cards, ...state.community]);
  const equity = estimateEquity(180);
  const potOdds = state.currentBet > hero.committed ? (state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed) : 0;
  const recommendation = equity > 0.68 ? "RAISE" : equity > potOdds + 0.08 ? "CALL" : state.currentBet <= hero.committed ? "CHECK" : "FOLD";
  const risk = equity < 0.38 ? "High" : equity < 0.58 ? "Medium" : "Low";
  const zhAction = { RAISE: "加注", CALL: "跟注", CHECK: "过牌", FOLD: "弃牌" };
  const actionText = state.lang === "zh" ? zhAction[recommendation] : recommendation;

  state.agents = [
    {
      name: state.lang === "zh" ? "范围侦察" : "Range Scout",
      text:
        state.lang === "zh"
          ? `模拟胜率约 ${Math.round(equity * 100)}%，当前牌型：${handName(heroEval.category)}。`
          : `Simulated equity ${Math.round(equity * 100)}%. Current made hand: ${handName(heroEval.category)}.`,
    },
    {
      name: state.lang === "zh" ? "策略教练" : "GTO Coach",
      text:
        state.lang === "zh"
          ? `建议行动：${actionText}。底池赔率约 ${Math.round(potOdds * 100)}%。`
          : `Recommended action: ${actionText}. Pot odds are near ${Math.round(potOdds * 100)}%.`,
    },
    {
      name: state.lang === "zh" ? "风险哨兵" : "Risk Sentinel",
      text:
        state.lang === "zh"
          ? `风险等级：${risk === "High" ? "高" : risk === "Medium" ? "中" : "低"}。活跃对手 ${getActiveVillains().length} 名。`
          : `Risk level: ${risk}. Active opponents: ${getActiveVillains().length}.`,
    },
  ];
}

function estimateEquity(trials) {
  const hero = getHero();
  if (!hero) return 0;
  const known = [...hero.cards, ...state.community];
  const knownIds = new Set(known.map((card) => card.id));
  const baseDeck = createDeck().filter((card) => !knownIds.has(card.id));
  let wins = 0;

  for (let i = 0; i < trials; i += 1) {
    const sample = shuffle(baseDeck);
    const board = [...state.community];
    const villainHands = getActiveVillains().map(() => [sample.pop(), sample.pop()]);
    while (board.length < 5) board.push(sample.pop());
    const heroScore = evaluateCards([...hero.cards, ...board]).score;
    const villainScores = villainHands.map((cards) => evaluateCards([...cards, ...board]).score);
    if (heroScore >= Math.max(...villainScores, 0)) wins += 1;
  }
  return wins / trials;
}

function evaluateCards(cards) {
  if (cards.length < 5) return evaluateFive(cards);
  let best = null;
  const combos = combinations(cards, 5);
  for (const combo of combos) {
    const result = evaluateFive(combo);
    if (!best || result.score > best.score) best = result;
  }
  return best;
}

function evaluateFive(cards) {
  const values = cards.map((card) => card.value).sort((a, b) => b - a);
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) || 0) + 1);
  const groups = [...counts.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  const flush = cards.length === 5 && cards.every((card) => card.suit === cards[0].suit);
  const straightHigh = getStraightHigh(values);

  let category = 0;
  let kickers = [...values];
  if (flush && straightHigh) {
    category = 8;
    kickers = [straightHigh];
  } else if (groups[0]?.[1] === 4) {
    category = 7;
    kickers = [groups[0][0], ...values.filter((value) => value !== groups[0][0])];
  } else if (groups[0]?.[1] === 3 && groups[1]?.[1] === 2) {
    category = 6;
    kickers = [groups[0][0], groups[1][0]];
  } else if (flush) {
    category = 5;
  } else if (straightHigh) {
    category = 4;
    kickers = [straightHigh];
  } else if (groups[0]?.[1] === 3) {
    category = 3;
    kickers = [groups[0][0], ...values.filter((value) => value !== groups[0][0])];
  } else if (groups[0]?.[1] === 2 && groups[1]?.[1] === 2) {
    category = 2;
    const pairs = groups.filter((group) => group[1] === 2).map((group) => group[0]).sort((a, b) => b - a);
    kickers = [...pairs, ...values.filter((value) => !pairs.includes(value))];
  } else if (groups[0]?.[1] === 2) {
    category = 1;
    kickers = [groups[0][0], ...values.filter((value) => value !== groups[0][0])];
  }

  return {
    category,
    name: handName(category),
    score: category * 1e10 + kickers.reduce((sum, value, index) => sum + value * 10 ** (8 - index * 2), 0),
  };
}

function getStraightHigh(values) {
  const unique = [...new Set(values)].sort((a, b) => b - a);
  if (unique.includes(14)) unique.push(1);
  for (let i = 0; i <= unique.length - 5; i += 1) {
    const run = unique.slice(i, i + 5);
    if (run[0] - run[4] === 4) return run[0];
  }
  return 0;
}

function handName(category) {
  const en = ["High Card", "Pair", "Two Pair", "Trips", "Straight", "Flush", "Full House", "Quads", "Straight Flush"];
  const zh = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "四条", "同花顺"];
  return state.lang === "zh" ? zh[category] : en[category];
}

function scoreToNormalized(score) {
  return Math.min(0.98, Math.max(0.12, score / 8.141312111e10));
}

function combinations(items, size) {
  const result = [];
  function walk(start, combo) {
    if (combo.length === size) {
      result.push(combo);
      return;
    }
    for (let i = start; i < items.length; i += 1) walk(i + 1, [...combo, items[i]]);
  }
  walk(0, []);
  return result;
}

function cardLabel(card) {
  return `${card.rank}${card.symbol}`;
}

function render() {
  const hero = getHero();
  const heroEval = evaluateCards([...hero.cards, ...state.community]);
  els.handNumber.textContent = `#${state.handId}`;
  els.street.textContent = t(state.street === "folded" ? "foldedStreet" : state.street === "showdown" ? "showdownStreet" : state.street);
  els.pot.textContent = money(state.pot);
  els.centerPot.textContent = money(state.pot);
  els.heroStack.textContent = money(hero.stack);
  els.bestHand.textContent = heroEval.name;
  els.equityFill.style.width = `${Math.round(estimateEquity(60) * 100)}%`;

  renderCards(els.community, state.community, false, 5);
  renderSeat(els.heroSeat, hero, false);
  state.players.slice(1).forEach((player, index) => renderSeat(els.villains[index], player, !state.archived));
  renderAgents();
  renderLog();
  renderHandList();
  updateButtons();
}

function renderCards(target, cards, hidden, slots = cards.length) {
  target.innerHTML = "";
  for (let i = 0; i < slots; i += 1) {
    target.appendChild(cardNode(cards[i], hidden || !cards[i]));
  }
}

function cardNode(card, hidden) {
  const node = document.createElement("div");
  if (hidden) {
    node.className = "playing-card back";
    node.textContent = "GRITH";
    return node;
  }
  node.className = `playing-card ${card.color === "red" ? "red" : ""}`;
  node.innerHTML = `<span class="rank">${card.rank}</span><span class="suit">${card.symbol}</span><span class="mini-suit">${card.symbol}</span>`;
  return node;
}

function renderSeat(target, player, hidden) {
  const status = player.folded ? "FOLD" : player.lastAction.toUpperCase();
  target.innerHTML = `
    <h3>${player.name}</h3>
    <div class="seat-meta"><span>${player.style}</span><span>${money(player.stack)}</span><span>${status}</span></div>
    <div class="card-row"></div>
  `;
  renderCards(target.querySelector(".card-row"), player.cards, hidden, 2);
}

function renderAgents() {
  els.agentCards.innerHTML = "";
  for (const agent of state.agents) {
    const node = document.createElement("article");
    node.className = "agent-card";
    node.innerHTML = `<strong>${agent.name}</strong><p>${agent.text}</p>`;
    els.agentCards.appendChild(node);
  }
}

function renderLog() {
  els.decisionLog.innerHTML = "";
  for (const line of state.log.slice(0, 12)) {
    const item = document.createElement("li");
    item.textContent = line;
    els.decisionLog.appendChild(item);
  }
}

function renderHandList() {
  const hands = getHands();
  els.handList.innerHTML = "";
  if (!hands.length) {
    const item = document.createElement("li");
    item.className = "empty-row";
    item.textContent = t("noHands");
    els.handList.appendChild(item);
    return;
  }
  for (const hand of hands.slice(0, 8)) {
    const item = document.createElement("li");
    item.innerHTML = `<span>#${hand.id}</span><small>${hand.heroWon ? "WIN" : hand.result.toUpperCase()}</small><strong>${money(hand.pot)}</strong>`;
    els.handList.appendChild(item);
  }
}

function updateButtons() {
  const ended = state.archived || state.street === "showdown" || state.street === "folded";
  els.fold.disabled = ended;
  els.check.disabled = ended;
  els.raise.disabled = ended;
  els.nextStreet.disabled = ended;
}

function renderLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.language.textContent = t("languageButton");
  els.help.setAttribute("aria-label", els.helpPanel.hidden ? t("helpClosedLabel") : t("helpOpenLabel"));
  if (state.players.length) {
    refreshAgents();
    render();
  }
}

function logLine(text) {
  state.log.unshift(text);
}

async function shareHand() {
  const hero = getHero();
  const evalResult = evaluateCards([...hero.cards, ...state.community]);
  const text =
    state.lang === "zh"
      ? `GRITH™ HOLDEM 第 #${state.handId} 局：我的牌 ${hero.cards.map(cardLabel).join(" ")}，公共牌 ${state.community.map(cardLabel).join(" ")}，牌型 ${evalResult.name}，底池 ${money(state.pot)}。`
      : `GRITH™ HOLDEM hand #${state.handId}: hero ${hero.cards.map(cardLabel).join(" ")}, board ${state.community.map(cardLabel).join(" ")}, ${evalResult.name}, pot ${money(state.pot)}.`;
  if (navigator.share) {
    await navigator.share({ title: "GRITH™ Hold'em Agents", text }).catch(() => {});
    return;
  }
  await navigator.clipboard.writeText(text).catch(() => {});
  showToast(t("copied"));
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function tone(frequency, duration) {
  if (state.muted || !window.AudioContext) return;
  const context = new AudioContext();
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.frequency.value = frequency;
  gain.gain.value = 0.025;
  osc.connect(gain);
  gain.connect(context.destination);
  osc.start();
  osc.stop(context.currentTime + duration);
}

els.fold.addEventListener("click", () => heroAction("fold"));
els.check.addEventListener("click", () => heroAction("call"));
els.raise.addEventListener("click", () => heroAction("raise"));
els.nextStreet.addEventListener("click", () => {
  runBots();
  if (getActiveVillains().length === 0) {
    archiveHand("win");
    els.status.textContent = t("heroWins");
    refreshAgents();
    render();
    return;
  }
  advanceStreet();
});
els.newHand.addEventListener("click", startHand);
els.share.addEventListener("click", shareHand);
els.language.addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem(dbKeys.language, state.lang);
  renderLanguage();
});
els.help.addEventListener("click", () => {
  els.helpPanel.hidden = !els.helpPanel.hidden;
  els.help.setAttribute("aria-expanded", String(!els.helpPanel.hidden));
  els.help.setAttribute("aria-label", els.helpPanel.hidden ? t("helpClosedLabel") : t("helpOpenLabel"));
});
els.sound.addEventListener("click", () => {
  state.muted = !state.muted;
  els.sound.textContent = state.muted ? "×" : "♪";
  showToast(state.muted ? t("soundOff") : t("soundOn"));
});

renderLanguage();
startHand();
