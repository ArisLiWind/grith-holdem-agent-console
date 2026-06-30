const dbKeys = {
  hands: "grith.holdem.hands",
  nextHandId: "grith.holdem.nextHandId",
  language: "grith.holdem.language",
  agent: "grith.holdem.agent",
  agentMemory: "grith.holdem.agentMemory",
  user: "grith.holdem.user",
  room: "grith.holdem.room",
  bankrolls: "grith.holdem.bankrolls",
  chat: "grith.holdem.chat",
  adminCodes: "grith.holdem.adminCodes",
  progress: "grith.holdem.progress",
  accounts: "grith.holdem.accounts",
};

const copy = {
  en: {
    brandSub: "MULTI-AGENT POKER OPERATIONS",
    shareHand: "Share Hand",
    googleSignIn: "Google Sign In",
    wechatLogin: "WeChat Login",
    inviteFriend: "Invite Friend Seat",
    agentSettings: "Agent Settings",
    buyChips: "Buy Chips",
    accountSettings: "Account",
    redeemChips: "Redeem Chips",
    redeemPrompt: "Enter a six-digit chip code.",
    redeemCodeLabel: "Chip Code",
    redeemApply: "Apply Code",
    redeemSuccess: "Code accepted. {amount} chips added.",
    redeemInvalid: "Invalid chip code.",
    buyTitle: "Buy diamond chips",
    buyRate: "1 RMB = 1 diamond chip.",
    buyAmount: "RMB Amount",
    alipayCashier: "Alipay cashier will open after confirmation.",
    openAlipay: "Open Alipay Cashier",
    paymentCreated: "Payment order created. Finish in the cashier.",
    paymentDemo: "Cashier is ready for configuration; demo chips added locally.",
    accountTitle: "Your player profile",
    email: "Email",
    password: "Password",
    nickname: "Nickname",
    wechat: "WeChat",
    saveAccount: "Save Account",
    accountNote: "Invite friends into this room from the top bar. API keys stay on the backend.",
    accountSaved: "Account saved.",
    chatPlaceholder: "Ask River Oracle...",
    sendChat: "Send",
    adminTitle: "Redeem code manager",
    adminPassword: "Admin password",
    adminEnter: "Enter Admin",
    adminAddCode: "Add Code",
    adminAccounts: "Accounts",
    adminDenied: "Wrong admin password.",
    adminCodeAdded: "Redeem code added.",
    codeUsed: "Redeemed",
    codeValid: "Valid",
    leaderboard: "Leaderboard",
    leaderboardTitle: "Player Rankings",
    leaderboardHint: "Swipe from the right edge to open this ranking panel.",
    leaderboardWinRate: "Win rate",
    leaderboardWins: "Wins",
    streakLabel: "Win Streak",
    openChest: "Draw",
    chestLocked: "Chest locked. Win {target} hands in a row.",
    chestReward: "Draw complete. {amount} chips added.",
    chestReady5: "Draw",
    chestReady15: "Draw",
    claimReward: "Claim",
    streakGiftHint: "Win {count} more hands to enter the 500 USD and 18888 chip lottery!",
    streakGiftHintReady: "Lottery unlocked. Tap Draw to start.",
    streakGrandHint: "Total wins mission: reach 888 wins to qualify for 99 USD.",
    streakNextPitch: "Win {count} more hand to enter the 500 USD and 18888 chip lottery!",
    streakNextPitchPlural: "Win {count} more hands to enter the 500 USD and 18888 chip lottery!",
    lotteryLabel: "Streak Lottery",
    lotteryTitle: "Draw the streak prize",
    lotteryDraw: "Start Draw",
    lotteryDrawing: "Drawing...",
    lotteryPrizeCash: "500 USD",
    lotteryPrizeMega: "18888 Chips",
    lotteryPrizeSmall: "100 Chips",
    lotteryWonSmall: "You drew 100 chips.",
    streakMission888: "Reach 888 total wins to unlock the 99 USD mission.",
    sixPlayerNotice: "Hand 10 raised single-player difficulty to a six-player table.",
    inviteSeatLocked: "Invite seats are open from the start.",
    unlimitedUnlocked: "Ten-win streak unlocked premium bet sizing.",
    streakPressureLose: "The streak pressure hand matched you against a stronger table; {winner} wins at showdown with {winnerHand}. You had {heroHand}.",
    wagerSize: "Bet Size",
    room: "Room",
    guestStatus: "Guest mode. Sign in to show your player name.",
    inviteReady: "Invite a friend to sit in this room.",
    wechatLoginConfigMissing: "WeChat login needs backend AppID/AppSecret configuration.",
    signedInAs: "Signed in as {name}.",
    inviteCopied: "Seat invite link copied.",
    inviteJoined: "Joined room {room}.",
    result: "Result",
    resultWin: "WIN",
    resultLose: "LOSE",
    resultTie: "SPLIT",
    resultFold: "FOLDED",
    resultByFold: "You folded. {winner} wins the pot without showdown.",
    resultByUncontested: "You win because every opponent folded before showdown.",
    resultByShowdownWin: "You win at showdown with {heroHand}. {winner} takes {pot}.",
    resultByShowdownLose: "{winner} wins at showdown with {winnerHand}. You had {heroHand}.",
    resultByShowdownTie: "The best five-card hands are identical, so the pot is split.",
    settlementTitle: "Hand Result",
    winningHand: "Winning Hand",
    losingHand: "Losing Hand",
    winningReason: "Why",
    splitHand: "Split Pot",
    netWin: "Net win {amount}",
    netLose: "Net loss {amount}",
    netEven: "No net change",
    tellStrong: "Strong",
    tellWeak: "Weak",
    tellNervous: "Nervous",
    tellHappy: "Happy",
    tellCalm: "Calm",
    tellAnnoyed: "Annoyed",
    tellAngry: "Angry",
    tellSad: "Sad",
    tellDoubt: "Doubt",
    tellBluff: "Bluff?",
    tellTrap: "Trap?",
    tellFolded: "Folded",
    moduleRangeBody: "Range Scout reads equity against live opponents and explains whether your hand can continue.",
    moduleCoachBody: "GTO Coach turns equity and pot odds into the cleanest action for this street.",
    moduleRiskBody: "Risk Sentinel weighs active opponents, board texture, and misleading facial tells.",
    moduleMemoryBody: "Table Memory summarizes recent hands so the agent can adapt without ignoring the math.",
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
    agentConsole: "Agent Console",
    consoleTitle: "Create an assistant, then let it advise or play.",
    agentName: "Agent Name",
    model: "Model",
    personality: "Personality",
    strategy: "Strategy Style",
    memoryMode: "Memory Mode",
    saveAgent: "Save Agent",
    agentPlay: "Agent Play",
    askAdvice: "Ask Advice",
    liveExplanation: "Live Explanation",
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
    moduleLabel: "Agent Module",
    noHands: "No archived hands yet.",
    folded: "You folded. Hand archived.",
    heroWins: "You win the pot.",
    villainWins: "Best opponent wins the pot.",
    showdown: "Showdown complete.",
    agentsReady: "Agents refreshed from the current board texture.",
    copied: "Share text copied.",
    agentSaved: "Agent profile saved.",
    agentActed: "Agent acted for you.",
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
    googleSignIn: "Google 登录",
    wechatLogin: "微信扫码登录",
    inviteFriend: "邀请朋友入席",
    agentSettings: "Agent 设置",
    buyChips: "购买筹码",
    accountSettings: "账号设置",
    redeemChips: "兑换筹码",
    redeemPrompt: "请输入六位数兑换码。",
    redeemCodeLabel: "筹码兑换码",
    redeemApply: "确认兑换",
    redeemSuccess: "兑换成功，已增加 {amount} 筹码。",
    redeemInvalid: "兑换码无效。",
    buyTitle: "购买钻石筹码",
    buyRate: "1 RMB = 1 颗钻石筹码。",
    buyAmount: "人民币金额",
    alipayCashier: "确认后调起支付宝收银台。",
    openAlipay: "打开支付宝收银台",
    paymentCreated: "支付订单已创建，请在收银台完成支付。",
    paymentDemo: "支付台待配置，已在本地模拟增加筹码。",
    accountTitle: "你的玩家资料",
    email: "邮箱",
    password: "密码",
    nickname: "昵称",
    wechat: "微信",
    saveAccount: "保存账号",
    accountNote: "邀请朋友入席会打开同一个房间；AI Key 只放在后端环境变量。",
    accountSaved: "账号已保存。",
    chatPlaceholder: "问 River Oracle...",
    sendChat: "发送",
    adminTitle: "兑换码管理",
    adminPassword: "Admin 密码",
    adminEnter: "进入 Admin",
    adminAddCode: "新增兑换码",
    adminAccounts: "账号管理",
    adminDenied: "Admin 密码错误。",
    adminCodeAdded: "兑换码已新增。",
    codeUsed: "已兑换",
    codeValid: "有效",
    leaderboard: "排行榜",
    leaderboardTitle: "玩家金额排行",
    leaderboardHint: "从屏幕右侧向内滑动可打开排行榜。",
    leaderboardWinRate: "胜率",
    leaderboardWins: "胜场",
    streakLabel: "连胜",
    openChest: "抽奖",
    chestLocked: "宝箱未解锁，需要连续赢 {target} 局。",
    chestReward: "抽奖完成，增加 {amount} 筹码。",
    chestReady5: "抽奖",
    chestReady15: "抽奖",
    claimReward: "领取",
    streakGiftHint: "您再连胜 {count} 局，可参与 500 美金与 18888 筹码抽奖！",
    streakGiftHintReady: "抽奖资格已解锁，点击抽奖开始。",
    streakGrandHint: "胜利局总数达到 888 局，可得到 99 美金的任务。",
    streakNextPitch: "您再连胜 {count} 局，可参与 500 美金与 18888 筹码抽奖！",
    streakNextPitchPlural: "您再连胜 {count} 局，可参与 500 美金与 18888 筹码抽奖！",
    lotteryLabel: "连胜抽奖",
    lotteryTitle: "6 宫格抽奖",
    lotteryDraw: "开始抽奖",
    lotteryDrawing: "抽奖中...",
    lotteryPrizeCash: "500 美金",
    lotteryPrizeMega: "18888 筹码",
    lotteryPrizeSmall: "100 筹码",
    lotteryWonSmall: "成功抽中 100 筹码。",
    streakMission888: "胜利局总数达到 888 局，可得到 99 美金的任务。",
    sixPlayerNotice: "单机打到第 10 局，牌桌已自动升级为 6 人难度。",
    inviteSeatLocked: "邀请入席从第一局就开放。",
    unlimitedUnlocked: "10 连胜已解锁高级下注档位。",
    streakPressureLose: "第 15 连胜压力局匹配到强桌，{winner} 摊牌获胜，牌型是 {winnerHand}；你的牌型是 {heroHand}。",
    wagerSize: "下注档位",
    room: "房间",
    guestStatus: "游客模式。登录后会显示你的玩家名。",
    inviteReady: "邀请朋友打开同一个房间并入席。",
    wechatLoginConfigMissing: "微信登录需要先配置后端 AppID/AppSecret。",
    signedInAs: "已登录为 {name}。",
    inviteCopied: "入席邀请链接已复制。",
    inviteJoined: "已加入房间 {room}。",
    result: "结算",
    resultWin: "赢了",
    resultLose: "输了",
    resultTie: "平分",
    resultFold: "已弃牌",
    resultByFold: "你选择弃牌，{winner} 无需摊牌赢得底池。",
    resultByUncontested: "你获胜：所有对手都在摊牌前弃牌。",
    resultByShowdownWin: "你摊牌获胜，牌型是 {heroHand}。{winner} 拿走 {pot}。",
    resultByShowdownLose: "{winner} 摊牌获胜，牌型是 {winnerHand}；你的牌型是 {heroHand}。",
    resultByShowdownTie: "双方最佳五张牌完全相同，花色不参与胜负，因此平分底池。",
    settlementTitle: "结算说明",
    winningHand: "获胜最佳牌",
    losingHand: "失败最佳牌",
    winningReason: "获胜原因",
    splitHand: "平分底池",
    netWin: "本局净赢 {amount}",
    netLose: "本局净输 {amount}",
    netEven: "本局筹码无变化",
    tellStrong: "强势",
    tellWeak: "偏弱",
    tellNervous: "紧张",
    tellHappy: "开心",
    tellCalm: "平淡",
    tellAnnoyed: "不悦",
    tellAngry: "愤怒",
    tellSad: "伤心",
    tellDoubt: "犹疑",
    tellBluff: "像诈唬",
    tellTrap: "像陷阱",
    tellFolded: "已弃牌",
    moduleRangeBody: "范围侦察会读取当前胜率，判断你的牌是否值得继续。",
    moduleCoachBody: "策略教练会把胜率和底池赔率转换成当前街最清晰的动作。",
    moduleRiskBody: "风险哨兵会综合活跃对手、牌面结构和可能误导你的表情信号。",
    moduleMemoryBody: "牌桌记忆会总结最近牌局，让 Agent 调整但不覆盖数学判断。",
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
    agentConsole: "Agent 控制台",
    consoleTitle: "创建助手，然后让它建议或代打。",
    agentName: "Agent 名称",
    model: "模型",
    personality: "性格",
    strategy: "策略风格",
    memoryMode: "记忆模式",
    saveAgent: "保存 Agent",
    agentPlay: "Agent 代打",
    askAdvice: "询问建议",
    liveExplanation: "实时解释",
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
    moduleLabel: "Agent 模块",
    noHands: "还没有归档牌局。",
    folded: "你已弃牌，牌局已归档。",
    heroWins: "你赢下底池。",
    villainWins: "最强对手赢下底池。",
    showdown: "摊牌完成。",
    agentsReady: "Agent 已根据当前牌面刷新。",
    copied: "分享文案已复制。",
    agentSaved: "Agent 配置已保存。",
    agentActed: "Agent 已替你行动。",
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
const botSeats = [
  { name: "Vector-9", style: "TAG" },
  { name: "Mira", style: "LAG" },
  { name: "Old River", style: "NIT" },
  { name: "Neon Jack", style: "TAG" },
  { name: "Lotus-6", style: "LAG" },
];
const maxInviteSeats = 2;

const state = {
  deck: [],
  community: [],
  players: [],
  street: "preflop",
  pot: 0,
  currentBet: baseBet,
  handId: 1,
  archived: false,
  muted: true,
  lang: copy[localStorage.getItem(dbKeys.language)] ? localStorage.getItem(dbKeys.language) : "zh",
  log: [],
  agents: [],
  customAgent: null,
  agentMemory: [],
  lastExplanation: "",
  result: null,
  resultSummary: "",
  showdownDetail: null,
  settlementShown: false,
  user: null,
  roomId: "",
  bankrolls: {},
  resultDelta: 0,
  chat: [],
  winStreak: 0,
  rewards: { chest5: false, chest15: false, opened5: false, opened15: false, premiumWagers: false, totalWins: 0 },
  chipFamily: "classic",
  pressureHand: false,
  selectedWager: 20,
  invitedSeats: 0,
  invitedRoom: false,
  aiAdviceToken: 0,
};

const els = {
  arena: document.querySelector("#arena"),
  agentGuidanceTitle: document.querySelector("#agentGuidanceTitle"),
  roomCode: document.querySelector("#roomCode"),
  authStatus: document.querySelector("#authStatus"),
  inviteStatus: document.querySelector("#inviteStatus"),
  handNumber: document.querySelector("#handNumber"),
  street: document.querySelector("#street"),
  pot: document.querySelector("#pot"),
  centerPot: document.querySelector("#centerPot"),
  heroStack: document.querySelector("#heroStack"),
  bestHand: document.querySelector("#bestHand"),
  streakPanel: document.querySelector("#streakPanel"),
  streakCount: document.querySelector("#streakCount"),
  streakGoal: document.querySelector("#streakGoal"),
  streakProgress: document.querySelector("#streakProgress"),
  streakHint: document.querySelector("#streakHint"),
  openChest: document.querySelector("#openChestButton"),
  lotteryDialog: document.querySelector("#lotteryDialog"),
  lotteryGrid: document.querySelector("#lotteryGrid"),
  lotteryDraw: document.querySelector("#lotteryDrawButton"),
  lotteryResult: document.querySelector("#lotteryResult"),
  wagerButtons: [...document.querySelectorAll("[data-wager]")],
  equityFill: document.querySelector("#equityFill"),
  status: document.querySelector("#statusText"),
  community: document.querySelector("#communityCards"),
  heroSeat: document.querySelector("#heroSeat"),
  villains: [
    document.querySelector("#villainNorth"),
    document.querySelector("#villainWest"),
    document.querySelector("#villainEast"),
    document.querySelector("#villainNorthWest"),
    document.querySelector("#villainNorthEast"),
  ],
  agentCards: document.querySelector("#agentCards"),
  agentConsole: document.querySelector("#agentConsole"),
  decisionLog: document.querySelector("#decisionLog"),
  handList: document.querySelector("#handList"),
  agentForm: document.querySelector("#agentForm"),
  agentName: document.querySelector("#agentName"),
  agentModel: document.querySelector("#agentModel"),
  agentPersonality: document.querySelector("#agentPersonality"),
  agentStrategy: document.querySelector("#agentStrategy"),
  agentMemorySelect: document.querySelector("#agentMemory"),
  agentPlay: document.querySelector("#agentPlayButton"),
  advice: document.querySelector("#adviceButton"),
  agentNarration: document.querySelector("#agentNarration"),
  fold: document.querySelector("#foldButton"),
  check: document.querySelector("#checkButton"),
  raise: document.querySelector("#raiseButton"),
  nextStreet: document.querySelector("#nextStreetButton"),
  newHand: document.querySelector("#newHandButton"),
  share: document.querySelector("#shareButton"),
  googleSignIn: document.querySelector("#googleSignInButton"),
  wechatLogin: document.querySelector("#wechatLoginButton"),
  invite: document.querySelector("#inviteButton"),
  agentSettings: document.querySelector("#agentSettingsButton"),
  leaderboardButton: document.querySelector("#leaderboardButton"),
  buyChips: document.querySelector("#buyChipsButton"),
  redeem: document.querySelector("#redeemButton"),
  account: document.querySelector("#accountButton"),
  redeemPanel: document.querySelector("#redeemPanel"),
  redeemDigits: [...document.querySelectorAll(".redeem-digit")],
  language: document.querySelector("#languageToggle"),
  help: document.querySelector("#helpToggle"),
  helpPanel: document.querySelector("#helpPanel"),
  sound: document.querySelector("#soundToggle"),
  bgMusic: document.querySelector("#bgMusic"),
  resultPanel: document.querySelector("#resultPanel"),
  resultTitle: document.querySelector("#resultTitle"),
  resultDelta: document.querySelector("#resultDelta"),
  resultSummary: document.querySelector("#resultSummary"),
  settlementDialog: document.querySelector("#settlementDialog"),
  settlementHeadline: document.querySelector("#settlementHeadline"),
  settlementWinnerName: document.querySelector("#settlementWinnerName"),
  settlementWinnerCards: document.querySelector("#settlementWinnerCards"),
  settlementWinnerType: document.querySelector("#settlementWinnerType"),
  settlementLoserName: document.querySelector("#settlementLoserName"),
  settlementLoserCards: document.querySelector("#settlementLoserCards"),
  settlementLoserType: document.querySelector("#settlementLoserType"),
  settlementReason: document.querySelector("#settlementReason"),
  settlementDelta: document.querySelector("#settlementDelta"),
  centerPotChips: document.querySelector("#centerPotChips"),
  chatMessages: document.querySelector("#chatMessages"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  buyDialog: document.querySelector("#buyDialog"),
  buyForm: document.querySelector("#buyForm"),
  buyAmount: document.querySelector("#buyAmount"),
  buyPreview: document.querySelector("#buyPreview"),
  buyStatus: document.querySelector("#buyStatus"),
  accountDialog: document.querySelector("#accountDialog"),
  accountForm: document.querySelector("#accountForm"),
  accountEmail: document.querySelector("#accountEmail"),
  accountWechat: document.querySelector("#accountWechat"),
  accountName: document.querySelector("#accountName"),
  accountAvatarBadge: document.querySelector("#accountAvatarBadge"),
  accountAvatarPreview: document.querySelector("#accountAvatarPreview"),
  adminEntry: document.querySelector("#adminEntry"),
  adminDialog: document.querySelector("#adminDialog"),
  adminLoginForm: document.querySelector("#adminLoginForm"),
  adminPassword: document.querySelector("#adminPassword"),
  adminPanel: document.querySelector("#adminPanel"),
  adminCreateCodeForm: document.querySelector("#adminCreateCodeForm"),
  adminNewCode: document.querySelector("#adminNewCode"),
  adminNewAmount: document.querySelector("#adminNewAmount"),
  adminCodes: document.querySelector("#adminCodes"),
  adminAccounts: document.querySelector("#adminAccounts"),
  leaderboardDrawer: document.querySelector("#leaderboardDrawer"),
  leaderboardClose: document.querySelector("#leaderboardClose"),
  leaderboardRows: document.querySelector("#leaderboardRows"),
  moduleButtons: [...document.querySelectorAll("[data-module]")],
  modulePanel: document.querySelector("#modulePanel"),
  moduleTitle: document.querySelector("#moduleTitle"),
  moduleBody: document.querySelector("#moduleBody"),
  moduleLabel: document.querySelector("#moduleLabel"),
  toast: document.querySelector("#toast"),
};

function t(key) {
  return copy[state.lang][key] || copy.en[key] || key;
}

function fillTemplate(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
}

function defaultBankrolls() {
  return {
    hero: 1000,
    "Vector-9": 1000,
    Mira: 1000,
    "Old River": 1000,
  };
}

function diamond(value) {
  return `♦${Math.max(0, Math.round(value))}`;
}

function defaultAgent() {
  return {
    name: "River Oracle",
    model: "GPT-5 Thinking",
    personality: "calm",
    strategy: "balanced",
    memory: "session",
  };
}

function loadAgent() {
  try {
    state.customAgent = { ...defaultAgent(), ...JSON.parse(localStorage.getItem(dbKeys.agent)) };
  } catch {
    state.customAgent = defaultAgent();
  }
  try {
    state.agentMemory = JSON.parse(localStorage.getItem(dbKeys.agentMemory)) || [];
  } catch {
    state.agentMemory = [];
  }
  syncAgentForm();
}

function loadBankrolls() {
  try {
    state.bankrolls = { ...defaultBankrolls(), ...JSON.parse(localStorage.getItem(dbKeys.bankrolls)) };
  } catch {
    state.bankrolls = defaultBankrolls();
  }
}

function saveBankrolls() {
  localStorage.setItem(dbKeys.bankrolls, JSON.stringify(state.bankrolls));
}

function loadProgress() {
  try {
    const progress = JSON.parse(localStorage.getItem(dbKeys.progress)) || {};
    state.winStreak = Number(progress.winStreak || 0);
    state.rewards = { ...state.rewards, ...(progress.rewards || {}) };
    if (progress.rewards?.totalWins == null || !Number.isFinite(Number(state.rewards.totalWins))) {
      state.rewards.totalWins = getHands().filter((hand) => hand.heroWon).length;
    }
    if (state.rewards.unlimitedRaise) state.rewards.premiumWagers = true;
    state.chipFamily = progress.chipFamily || "classic";
  } catch {
    state.winStreak = 0;
  }
  applyChipFamily();
}

function saveProgress() {
  localStorage.setItem(
    dbKeys.progress,
    JSON.stringify({
      winStreak: state.winStreak,
      rewards: state.rewards,
      chipFamily: state.chipFamily,
    }),
  );
}

function localAccounts() {
  try {
    return JSON.parse(localStorage.getItem(dbKeys.accounts)) || [];
  } catch {
    return [];
  }
}

function saveLocalAccount(user) {
  if (!user?.name && !user?.email) return;
  const id = user.email || user.name || "guest";
  const accounts = localAccounts().filter((account) => (account.email || account.name) !== id);
  accounts.unshift({
    email: user.email || "",
    name: user.name || "Google Player",
    avatar: user.avatar || "",
    chips: Number(state.bankrolls.hero || 0),
    updatedAt: new Date().toISOString(),
  });
  localStorage.setItem(dbKeys.accounts, JSON.stringify(accounts.slice(0, 50)));
}

function profileInitial(name = "") {
  const clean = String(name || "G").trim();
  if (!clean) return "G";
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length > 1) return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  return clean.slice(0, 2).toUpperCase();
}

function syncAccountAvatar() {
  const initial = profileInitial(state.user?.name || "Google Player");
  if (els.accountAvatarBadge) els.accountAvatarBadge.textContent = initial;
  if (els.accountAvatarPreview) els.accountAvatarPreview.textContent = initial;
}

function bankrollKey(name, bot) {
  return bot ? name : "hero";
}

function saveCurrentStacks() {
  if (!state.players.length) return;
  for (const player of state.players) {
    state.bankrolls[player.bankrollKey] = player.stack;
  }
  saveBankrolls();
  saveLocalAccount(state.user || { name: state.players[0]?.name || "Guest" });
}

function loadSession() {
  const params = new URLSearchParams(window.location.search);
  const incomingRoom = params.get("room");
  state.invitedRoom = params.get("seat") === "1" || params.get("invite") === "1";
  state.invitedSeats = state.invitedRoom ? maxInviteSeats : 0;
  state.roomId = incomingRoom || localStorage.getItem(dbKeys.room) || createRoomId();
  localStorage.setItem(dbKeys.room, state.roomId);
  if (incomingRoom) showToast(fillTemplate(t("inviteJoined"), { room: incomingRoom }));
  const wechatName = params.get("wechatName");
  const wechatOpenId = params.get("wechatOpenId");
  if (wechatName || wechatOpenId) {
    state.user = {
      ...(state.user || {}),
      name: wechatName || state.user?.name || "WeChat Player",
      wechat: wechatOpenId || state.user?.wechat || "",
      provider: "wechat",
      signedInAt: new Date().toISOString(),
    };
    localStorage.setItem(dbKeys.user, JSON.stringify(state.user));
    saveLocalAccount(state.user);
    window.history.replaceState({}, document.title, `${window.location.pathname}${incomingRoom ? `?room=${encodeURIComponent(state.roomId)}` : ""}`);
  }
  try {
    state.user = state.user || JSON.parse(localStorage.getItem(dbKeys.user));
  } catch {
    state.user = null;
  }
  renderSession();
}

function loadChat() {
  try {
    state.chat = JSON.parse(localStorage.getItem(dbKeys.chat)) || [];
  } catch {
    state.chat = [];
  }
  if (!state.chat.length) {
    state.chat = [
      {
        role: "agent",
        text: state.lang === "zh" ? "我会一边看牌一边回答你的问题。" : "I can talk while watching the hand.",
      },
    ];
  }
  renderChat();
}

function createRoomId() {
  return `GR-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function renderSession() {
  els.roomCode.textContent = state.roomId;
  els.authStatus.textContent = state.user ? fillTemplate(t("signedInAs"), { name: state.user.name }) : t("guestStatus");
  els.inviteStatus.textContent = t("inviteReady");
  syncAccountAvatar();
}

function signInWithGoogle() {
  const name = state.user?.name || "Google Player";
  state.user = { ...state.user, name, provider: "google", signedInAt: new Date().toISOString() };
  localStorage.setItem(dbKeys.user, JSON.stringify(state.user));
  saveLocalAccount(state.user);
  const hero = getHero();
  if (hero) hero.name = name;
  renderSession();
  render();
}

function loginWithWeChat() {
  const url = new URL("/api/auth/wechat-login", window.location.origin);
  url.searchParams.set("room", state.roomId);
  url.searchParams.set("seat", state.invitedRoom ? "1" : "0");
  window.location.href = String(url);
}

function openAccountDialog() {
  els.accountEmail.value = state.user?.email || "";
  els.accountWechat.value = state.user?.wechat || "";
  els.accountName.value = state.user?.name || "";
  syncAccountAvatar();
  els.accountDialog.showModal();
}

async function saveAccount(event) {
  event.preventDefault();
  state.user = {
    email: els.accountEmail.value.trim(),
    wechat: els.accountWechat.value.trim(),
    name: els.accountName.value.trim() || "Google Player",
    provider: "email",
    signedInAt: new Date().toISOString(),
  };
  localStorage.setItem(dbKeys.user, JSON.stringify(state.user));
  saveLocalAccount(state.user);
  const hero = getHero();
  if (hero) hero.name = state.user.name;
  if (state.user.email) {
    await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: state.user.email, nickname: state.user.name, wechat: state.user.wechat }),
    }).catch(() => {});
  }
  renderSession();
  render();
  els.accountDialog.close();
  showToast(t("accountSaved"));
}

async function inviteFriend() {
  const url = new URL(window.location.href);
  url.searchParams.set("room", state.roomId);
  url.searchParams.set("seat", "1");
  const text = state.lang === "zh" ? `来 GRITH 德州扑克房间 ${state.roomId} 入席对战：${url}` : `Take a seat in my GRITH Hold'em room ${state.roomId}: ${url}`;
  if (navigator.share) {
    await navigator.share({ title: "GRITH Hold'em", text, url: String(url) }).catch(() => {});
  } else {
    await navigator.clipboard.writeText(String(url)).catch(() => {});
  }
  els.inviteStatus.textContent = String(url);
  state.invitedSeats = maxInviteSeats;
  showToast(t("inviteCopied"));
}

function toggleRedeemPanel() {
  els.redeemPanel.hidden = !els.redeemPanel.hidden;
  els.redeem.setAttribute("aria-expanded", String(!els.redeemPanel.hidden));
  if (!els.redeemPanel.hidden) els.redeemDigits[0]?.focus();
}

function getRedeemCode() {
  return els.redeemDigits.map((input) => input.value).join("");
}

function clearRedeemCode() {
  els.redeemDigits.forEach((input) => {
    input.value = "";
  });
}

async function redeemChips(code) {
  const normalized = code.trim();
  if (!/^\d{6}$/.test(normalized) || normalized === "041113") {
    showToast(t("redeemInvalid"));
    return;
  }
  let amount = 0;
  try {
    const response = await fetch("/api/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: normalized }),
    });
    if (response.ok) {
      const payload = await response.json();
      amount = payload.amount || 0;
    }
  } catch {
    // Static previews fall back to the browser-stored Admin list.
  }
  if (amount <= 0) {
    const codes = localAdminCodes();
    const managedCode = codes.find((item) => item.code === normalized && !item.used);
    if (managedCode) {
      amount = Number(managedCode.amount || 0);
      managedCode.used = true;
      managedCode.usedAt = new Date().toISOString();
      saveLocalAdminCodes(codes);
    }
  }
  if (amount <= 0) {
    showToast(t("redeemInvalid"));
    return;
  }
  const hero = getHero();
  state.bankrolls.hero = Math.max(0, Number(state.bankrolls.hero || 0)) + amount;
  if (hero) {
    hero.stack += amount;
    hero.startStack += amount;
  }
  saveBankrolls();
  els.redeemPanel.hidden = true;
  clearRedeemCode();
  render();
  showToast(fillTemplate(t("redeemSuccess"), { amount: money(amount) }));
}

function addHeroChips(amount) {
  const hero = getHero();
  state.bankrolls.hero = Math.max(0, Number(state.bankrolls.hero || 0)) + amount;
  if (hero) {
    hero.stack += amount;
    hero.startStack += amount;
  }
  saveBankrolls();
  render();
}

function openBuyDialog() {
  updateBuyPreview();
  els.buyStatus.textContent = "";
  els.buyDialog.showModal();
}

function updateBuyPreview() {
  const amount = Math.max(1, Math.round(Number(els.buyAmount.value || 1)));
  els.buyPreview.textContent = diamond(amount);
}

async function buyChips(event) {
  event.preventDefault();
  const amount = Math.max(1, Math.round(Number(els.buyAmount.value || 1)));
  try {
    const response = await fetch("/api/pay/alipay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amountRmb: amount, chips: amount, userId: state.user?.email || "guest" }),
    });
    const payload = await response.json();
    if (payload.cashierUrl) {
      window.open(payload.cashierUrl, "_blank", "noopener");
      els.buyStatus.textContent = t("paymentCreated");
      return;
    }
  } catch {
    // Static local previews cannot execute Vercel functions.
  }
  addHeroChips(amount);
  els.buyStatus.textContent = t("paymentDemo");
  showToast(t("paymentDemo"));
}

function renderChat() {
  if (!els.chatMessages) return;
  els.chatMessages.innerHTML = state.chat
    .slice(-8)
    .map((message) => `<div class="chat-bubble ${message.role}">${escapeHtml(message.text)}</div>`)
    .join("");
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function tableContextForAgent(question = "") {
  const hero = getHero();
  const heroEval = hero ? evaluateCards([...hero.cards, ...state.community]) : null;
  const equity = hero ? Math.round(estimateEquity(100) * 100) : 0;
  const potOdds = hero && state.currentBet > hero.committed ? Math.round(((state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed)) * 100) : 0;
  const activeVillains = getActiveVillains().map((player) => ({
    name: player.name,
    style: player.style,
    stack: player.stack,
    committed: player.committed,
    action: player.action,
  }));
  return {
    lang: state.lang,
    question,
    roomId: state.roomId,
    handId: state.handId,
    street: t(state.street),
    pot: state.pot,
    currentBet: state.currentBet,
    hero: hero
      ? {
          name: hero.name,
          cards: hero.cards.map(cardLabel),
          stack: hero.stack,
          committed: hero.committed,
          handType: heroEval?.name || "",
          equity,
          potOdds,
        }
      : null,
    community: state.community.map(cardLabel),
    activeVillains,
    localAdvice: state.lastExplanation || agentChatReply(question),
  };
}

async function syncNaturalAgentAdvice(question) {
  const token = ++state.aiAdviceToken;
  try {
    const response = await fetch("/api/agent/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: question, context: tableContextForAgent(question) }),
    });
    if (!response.ok || token !== state.aiAdviceToken) return;
    const payload = await response.json();
    const reply = String(payload.reply || "").trim();
    if (!reply || !state.agents[0]) return;
    state.agents[0].text = reply;
    state.lastExplanation = reply;
    renderAgentCards();
    if (els.agentNarration) els.agentNarration.textContent = reply;
  } catch {
    // The local guidance remains visible when backend AI is unavailable.
  }
}

function agentChatReply(question) {
  const hero = getHero();
  const heroEval = hero ? evaluateCards([...hero.cards, ...state.community]) : null;
  const equity = hero ? Math.round(estimateEquity(80) * 100) : 0;
  const recommendation = hero ? recommendAction(equity / 100, 0.57).label : "CHECK";
  if (state.lang === "zh") {
    const action = recommendation === "FOLD" ? "弃牌" : recommendation === "RAISE" ? "加注" : "过牌/跟注";
    return `你问：“${question}”。当前牌型是${heroEval?.name || "未知"}，估算胜率约 ${equity}%。我建议先考虑${action}，重点是比较胜率和继续投入价格。`;
  }
  return `You asked: "${question}". Current hand is ${heroEval?.name || "unknown"} with about ${equity}% equity. I would lean ${recommendation}, balancing equity against the price to continue.`;
}

async function submitChat(event) {
  event.preventDefault();
  const text = els.chatInput.value.trim();
  if (!text) return;
  els.chatInput.value = "";
  state.chat.push({ role: "user", text });
  renderChat();
  const localReply = agentChatReply(text);
  try {
    const response = await fetch("/api/agent/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, context: tableContextForAgent(text) }),
    });
    const payload = await response.json();
    state.chat.push({ role: "agent", text: payload.reply || localReply });
  } catch {
    state.chat.push({ role: "agent", text: localReply });
  }
  localStorage.setItem(dbKeys.chat, JSON.stringify(state.chat.slice(-30)));
  renderChat();
}

function openAdminDialog() {
  els.adminLoginForm.hidden = false;
  els.adminPanel.hidden = true;
  els.adminPassword.value = "";
  els.adminDialog.showModal();
}

async function enterAdmin(event) {
  event.preventDefault();
  if (els.adminPassword.value !== "8396237387") {
    showToast(t("adminDenied"));
    return;
  }
  els.adminLoginForm.hidden = true;
  els.adminPanel.hidden = false;
  await renderAdminCodes();
}

function localAdminCodes() {
  try {
    return JSON.parse(localStorage.getItem(dbKeys.adminCodes)) || [];
  } catch {
    return [];
  }
}

function saveLocalAdminCodes(codes) {
  localStorage.setItem(dbKeys.adminCodes, JSON.stringify(codes));
}

async function fetchAdminCodes() {
  try {
    const response = await fetch("/api/admin/redeem-codes");
    if (response.ok) return response.json();
  } catch {
    // Local static previews use localStorage.
  }
  return { codes: localAdminCodes() };
}

async function renderAdminCodes() {
  const payload = await fetchAdminCodes();
  const merged = [...localAdminCodes(), ...(payload.codes || [])];
  const codes = merged
    .filter((code) => code.code !== "041113")
    .filter((code, index, list) => list.findIndex((item) => item.code === code.code) === index);
  els.adminCodes.innerHTML =
    codes
      .map(
        (code) => `
          <div class="admin-code-row ${code.used ? "used" : ""}">
            <strong>${code.code}</strong>
            <span>${money(code.amount || 0)}</span>
            <span>${code.used ? t("codeUsed") : t("codeValid")}</span>
          </div>
        `,
      )
      .join("") || `<p class="dialog-note">${state.lang === "zh" ? "还没有兑换码。" : "No redeem codes yet."}</p>`;
  await renderAdminAccounts();
}

async function renderAdminAccounts() {
  const hero = getHero();
  const guest = {
    name: state.user?.name || hero?.name || "Guest",
    email: state.user?.email || "",
    chips: hero?.stack ?? state.bankrolls.hero ?? 0,
  };
  let remoteAccounts = [];
  try {
    const response = await fetch("/api/admin/accounts");
    if (response.ok) remoteAccounts = (await response.json()).accounts || [];
  } catch {
    remoteAccounts = [];
  }
  const accounts = [guest, ...remoteAccounts, ...localAccounts()].filter(
    (account, index, list) => list.findIndex((item) => (item.email || item.name) === (account.email || account.name)) === index,
  );
  els.adminAccounts.innerHTML =
    accounts
      .map(
        (account) => `
          <div class="admin-code-row account-row">
            <strong>${account.name || account.email || "Guest"}</strong>
            <span>${money(account.chips || 0)}</span>
            <span>${account.email || "LOCAL"}</span>
          </div>
        `,
      )
      .join("");
}

async function createAdminCode(event) {
  event.preventDefault();
  const code = els.adminNewCode.value.trim();
  const amount = Math.max(1, Math.round(Number(els.adminNewAmount.value || 1)));
  if (!/^\d{6}$/.test(code) || code === "041113") {
    showToast(t("redeemInvalid"));
    return;
  }
  try {
    const response = await fetch("/api/admin/redeem-codes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, amount }),
    });
    if (!response.ok) throw new Error("admin api unavailable");
  } catch {
    // Local static previews continue below with the browser-stored list.
  }
  const codes = localAdminCodes().filter((item) => item.code !== code);
  codes.unshift({ code, amount, used: false, createdAt: new Date().toISOString() });
  saveLocalAdminCodes(codes);
  els.adminNewCode.value = "";
  await renderAdminCodes();
  showToast(t("adminCodeAdded"));
}

function saveAgentFromForm() {
  state.customAgent = {
    name: els.agentName.value.trim() || "River Oracle",
    model: els.agentModel.value,
    personality: els.agentPersonality.value,
    strategy: els.agentStrategy.value,
    memory: els.agentMemorySelect.value,
  };
  localStorage.setItem(dbKeys.agent, JSON.stringify(state.customAgent));
  syncAgentForm();
  refreshAgents();
  setAgentSettingsOpen(false);
  render();
  showToast(t("agentSaved"));
}

function setAgentSettingsOpen(open) {
  els.agentConsole.hidden = !open;
  els.agentConsole.classList.toggle("collapsed", !open);
  els.arena.classList.toggle("settings-open", open);
  els.agentSettings.setAttribute("aria-expanded", String(open));
}

function syncAgentForm() {
  const agent = state.customAgent || defaultAgent();
  els.agentName.value = agent.name;
  els.agentModel.value = agent.model;
  els.agentPersonality.value = agent.personality;
  els.agentStrategy.value = agent.strategy;
  els.agentMemorySelect.value = agent.memory;
}

function money(value) {
  return diamond(value);
}

function signedMoney(value) {
  const rounded = Math.round(value);
  if (rounded > 0) return `+${money(rounded)}`;
  if (rounded < 0) return `-${money(Math.abs(rounded))}`;
  return money(0);
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
  saveCurrentStacks();
  state.deck = createDeck();
  state.community = [];
  state.street = "preflop";
  state.result = null;
  state.resultSummary = "";
  state.showdownDetail = null;
  state.settlementShown = false;
  state.resultDelta = 0;
  state.pot = 0;
  state.currentBet = baseBet;
  state.handId = nextHandId();
  state.archived = false;
  state.pressureHand = state.winStreak >= 14;
  state.log = [];
  const extraSeats = state.invitedRoom ? maxInviteSeats : state.handId >= 10 ? maxInviteSeats : 0;
  const activeBots = botSeats.slice(0, 3 + extraSeats);
  state.players = [
    makePlayer(state.user?.name || (state.lang === "zh" ? "你" : "You"), "HERO", false),
    ...activeBots.map((bot) => makePlayer(bot.name, bot.style, true)),
  ];

  for (let i = 0; i < 2; i += 1) {
    for (const player of state.players) {
      player.cards.push(state.deck.pop());
    }
  }

  postBlind(state.players[1], 10);
  postBlind(state.players[2], 20);
  logLine(`Hand #${state.handId}: blinds posted. Hero is on the button.`);
  if (state.handId === 10) showToast(t("sixPlayerNotice"));
  refreshAgents();
  render();
}

function makePlayer(name, style, bot) {
  const key = bankrollKey(name, bot);
  const stack = Math.max(0, Number(state.bankrolls[key] ?? 1000));
  return {
    name,
    style,
    bot,
    bankrollKey: key,
    tellSeed: Math.random(),
    stack,
    startStack: stack,
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
  const equity = estimateEquity(180);
  const potOdds = state.currentBet > hero.committed ? (state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed) : 0;
  const heroEval = evaluateCards([...hero.cards, ...state.community]);
  state.lastExplanation = buildDeepExplanation(action === "call" ? "call" : action, equity, potOdds, heroEval, false);
  els.agentNarration.textContent = state.lastExplanation;

  if (action === "fold") {
    hero.folded = true;
    hero.lastAction = "fold";
    logLine(`Hero folds on ${state.street}.`);
    logLine(`${(state.customAgent || defaultAgent()).name}: ${state.lastExplanation}`);
    archiveHand("folded");
    els.status.textContent = t("folded");
    render();
    return;
  }

  if (action === "raise") {
    const customRaise = Math.max(20, Number(state.selectedWager || 20));
    commit(hero, state.currentBet + customRaise);
    hero.lastAction = "raise";
    logLine(`Hero raises to ${money(hero.committed)}.`);
  } else {
    const needsCall = state.currentBet > hero.committed;
    const callTarget = needsCall ? state.currentBet : hero.committed + Math.max(20, Number(state.selectedWager || 20));
    commit(hero, callTarget);
    hero.lastAction = needsCall ? "call" : "check";
    logLine(`Hero ${hero.lastAction}s.`);
  }
  logLine(`${(state.customAgent || defaultAgent()).name}: ${state.lastExplanation}`);

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
  const activeBefore = getActiveVillains();
  let preflopCallers = 0;
  for (const bot of activeBefore) {
    const strength = scoreToNormalized(evaluateCards([...bot.cards, ...state.community]).score);
    const aggression = bot.style === "LAG" ? 0.12 : bot.style === "NIT" ? -0.1 : 0;
    const isPreflop = state.street === "preflop";
    const foldFloor = isPreflop && preflopCallers < Math.min(2, activeBefore.length) ? 0 : 0.08;
    const threshold = isPreflop ? 0.28 + aggression * 0.25 : 0.5 + aggression - state.community.length * 0.025;
    const foldChance = isPreflop ? Math.max(foldFloor, strength < threshold ? 0.18 : 0.04) : strength < threshold ? 0.54 : 0.08;
    if (Math.random() < foldChance) {
      bot.folded = true;
      bot.lastAction = "fold";
      logLine(`${bot.name} folds.`);
    } else if ((isPreflop && strength > 0.72 && Math.random() < 0.32) || (!isPreflop && strength > 0.7 && bot.stack > 70)) {
      commit(bot, state.currentBet + (state.pressureHand ? 80 : 60));
      bot.lastAction = "raise";
      state.currentBet = Math.max(state.currentBet, bot.committed);
      logLine(`${bot.name} raises.`);
    } else {
      commit(bot, state.currentBet);
      bot.lastAction = "call";
      if (isPreflop) preflopCallers += 1;
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

function compareEvaluations(left, right) {
  return PokerEngine.compareEvaluations(left, right);
}

function valueName(value) {
  const labels = { 14: "A", 13: "K", 12: "Q", 11: "J", 10: "T", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2" };
  return labels[value] || String(value);
}

function describeHand(evalResult) {
  const cards = evalResult.cards?.length ? ` (${evalResult.cards.map(cardLabel).join(" ")})` : "";
  return `${evalResult.name}${cards}`;
}

function comparisonReason(winnerEval, loserEval, winnerName, loserName, tie = false) {
  if (tie) {
    return state.lang === "zh"
      ? `${winnerName} 和 ${loserName} 的最佳五张牌完全相同：${describeHand(winnerEval)}。德州扑克不按花色分胜负，所以底池平分。`
      : `${winnerName} and ${loserName} have the same best five-card hand: ${describeHand(winnerEval)}. Suits do not break ties in Texas Hold'em, so the pot is split.`;
  }
  if (winnerEval.category !== loserEval.category) {
    return state.lang === "zh"
      ? `${winnerName} 的最佳牌是${describeHand(winnerEval)}，${loserName} 的最佳牌是${describeHand(loserEval)}。${winnerEval.name} 高于 ${loserEval.name}，所以 ${winnerName} 赢得底池。`
      : `${winnerName}'s best hand is ${describeHand(winnerEval)}, while ${loserName} has ${describeHand(loserEval)}. ${winnerEval.name} ranks above ${loserEval.name}, so ${winnerName} wins the pot.`;
  }
  const index = winnerEval.tiebreakers.findIndex((value, itemIndex) => value !== loserEval.tiebreakers[itemIndex]);
  const winningValue = valueName(winnerEval.tiebreakers[index]);
  const losingValue = valueName(loserEval.tiebreakers[index]);
  return state.lang === "zh"
    ? `双方同为${winnerEval.name}，继续比较主牌和 kicker。${winnerName} 的关键牌 ${winningValue} 大于 ${loserName} 的 ${losingValue}，所以 ${winnerName} 赢得底池。`
    : `Both players have ${winnerEval.name}, so the main cards and kickers decide it. ${winnerName}'s deciding card ${winningValue} beats ${loserName}'s ${losingValue}, so ${winnerName} wins the pot.`;
}

function archiveHand(result) {
  if (state.archived) return;
  state.archived = true;
  state.street = result === "folded" ? "folded" : state.street;
  state.result = result;
  state.settlementShown = false;
  state.showdownDetail = null;

  let winner = getHero();
  let heroWon = result === "win";
  let winnerEval = null;
  let loser = state.players.find((player) => player !== getHero()) || getHero();
  let loserEval = null;
  if (result === "folded") {
    winner = state.players.slice(1).find((player) => !player.folded) || state.players[1];
    winner.stack += state.pot;
    state.resultSummary = fillTemplate(t("resultByFold"), { winner: winner.name });
    logLine(`${winner.name} wins ${money(state.pot)} after hero folds.`);
  }
  if (result === "showdown") {
    const active = state.players.filter((player) => !player.folded);
    const ranked = active
      .map((player) => ({ player, evalResult: evaluateCards([...player.cards, ...state.community]) }))
      .sort((left, right) => compareEvaluations(right.evalResult, left.evalResult));
    const bestEval = ranked[0].evalResult;
    const winners = ranked.filter((item) => compareEvaluations(item.evalResult, bestEval) === 0);
    const heroEntry = ranked.find((item) => item.player === getHero());
    const heroIsWinner = winners.some((item) => item.player === getHero());
    const isSplit = winners.length > 1;
    const share = Math.floor(state.pot / winners.length);
    let remainder = state.pot - share * winners.length;
    winners.forEach((item) => {
      item.player.stack += share + (remainder > 0 ? 1 : 0);
      remainder -= 1;
    });
    winner = winners[0].player;
    winnerEval = winners[0].evalResult;
    loser = heroIsWinner ? ranked.find((item) => !winners.includes(item))?.player || ranked.find((item) => item.player !== getHero())?.player || winner : getHero();
    loserEval = heroIsWinner ? ranked.find((item) => !winners.includes(item))?.evalResult || ranked.find((item) => item.player !== getHero())?.evalResult || winnerEval : heroEntry.evalResult;
    heroWon = heroIsWinner && !isSplit;
    state.result = heroIsWinner ? (isSplit ? "tie" : "win") : "lose";
    state.resultSummary = isSplit && heroIsWinner ? t("resultByShowdownTie") : fillTemplate(heroWon ? t("resultByShowdownWin") : t("resultByShowdownLose"), {
      winner: winner.name,
      winnerHand: winnerEval.name,
      heroHand: heroEntry.evalResult.name,
      pot: money(state.pot),
    });
    state.showdownDetail = {
      tie: isSplit && heroIsWinner,
      winner: winner.name,
      loser: loser.name,
      winnerEval,
      loserEval,
      reason: comparisonReason(winnerEval, loserEval, winner.name, loser.name, isSplit && heroIsWinner),
      winners: winners.map((item) => item.player.name),
    };
    logLine(`${winners.map((item) => item.player.name).join(", ")} ${isSplit ? "split" : "wins"} ${money(state.pot)} at showdown.`);
  }
  if (result === "win") {
    getHero().stack += state.pot;
    state.resultSummary = fillTemplate(t("resultByUncontested"), {});
    logLine(`Hero wins ${money(state.pot)} uncontested.`);
  }

  const heroEval = evaluateCards([...getHero().cards, ...state.community]);
  state.resultDelta = getHero().stack - getHero().startStack;
  if (!state.showdownDetail && winner !== getHero()) {
    winnerEval = evaluateCards([...winner.cards, ...state.community]);
    loserEval = heroEval;
    state.showdownDetail = {
      tie: false,
      winner: winner.name,
      loser: getHero().name,
      winnerEval,
      loserEval,
      reason: state.resultSummary,
      winners: [winner.name],
    };
  }
  if (!state.showdownDetail) {
    loser = state.players.find((player) => player !== getHero()) || getHero();
    winnerEval = heroEval;
    loserEval = evaluateCards([...loser.cards, ...state.community]);
    state.showdownDetail = {
      tie: false,
      winner: getHero().name,
      loser: loser.name,
      winnerEval,
      loserEval,
      reason: state.resultSummary || t("resultByUncontested"),
      winners: [getHero().name],
    };
  }
  updateWinStreak(heroWon);
  state.lastExplanation = state.resultSummary;
  const hands = getHands();
  hands.unshift({
    id: state.handId,
    result: state.result,
    heroWon,
    winner: winner.name,
    pot: state.pot,
    street: state.street,
    handName: heroEval.name,
    resultSummary: state.resultSummary,
    resultDelta: state.resultDelta,
    heroCards: getHero().cards.map(cardLabel),
    board: state.community.map(cardLabel),
    explanation: state.lastExplanation,
    agent: state.customAgent,
    createdAt: new Date().toISOString(),
  });
  rememberHand(hands[0]);
  saveHands(hands);
  saveCurrentStacks();
  renderHandList();
}

function rememberHand(hand) {
  const agent = state.customAgent || defaultAgent();
  if (agent.memory === "hand") return;
  state.agentMemory.unshift({
    id: hand.id,
    heroWon: hand.heroWon,
    result: hand.result,
    handName: hand.handName,
    strategy: agent.strategy,
  });
  const limit = agent.memory === "long" ? 20 : 6;
  state.agentMemory = state.agentMemory.slice(0, limit);
  localStorage.setItem(dbKeys.agentMemory, JSON.stringify(state.agentMemory));
}

function updateWinStreak(heroWon) {
  if (heroWon) {
    state.winStreak += 1;
    state.rewards.totalWins = Number(state.rewards.totalWins || 0) + 1;
    if (state.winStreak >= 5 && !state.rewards.opened5) state.rewards.chest5 = true;
    if (state.winStreak >= 10 && !state.rewards.premiumWagers) {
      state.rewards.premiumWagers = true;
      showToast(t("unlimitedUnlocked"));
    }
    if (state.winStreak >= 15 && !state.rewards.opened15) state.rewards.chest15 = true;
  } else {
    state.winStreak = 0;
  }
  saveProgress();
}

function nextChestTarget() {
  if (!state.rewards.opened5) return 5;
  return 15;
}

function openStreakChest() {
  const canOpen5 = state.rewards.chest5 && !state.rewards.opened5;
  const canOpen15 = state.rewards.chest15 && !state.rewards.opened15;
  if (!canOpen5 && !canOpen15) {
    showToast(fillTemplate(t("chestLocked"), { target: nextChestTarget() }));
    return;
  }
  openLottery(canOpen15 ? "grand" : "entry");
}

function lotteryPrizes() {
  return [t("lotteryPrizeCash"), t("lotteryPrizeMega"), t("lotteryPrizeSmall"), t("lotteryPrizeCash"), t("lotteryPrizeMega"), t("lotteryPrizeSmall")];
}

function renderLotteryGrid(activeIndex = -1) {
  if (!els.lotteryGrid) return;
  els.lotteryGrid.innerHTML = lotteryPrizes()
    .map((prize, index) => `<div class="lottery-cell${index === activeIndex ? " active" : ""}">${prize}</div>`)
    .join("");
}

function openLottery(tier) {
  state.pendingLotteryTier = tier;
  renderLotteryGrid();
  if (els.lotteryResult) els.lotteryResult.textContent = tier === "grand" ? t("lotteryWonSmall") : t("streakGiftHintReady");
  if (els.lotteryDraw) {
    els.lotteryDraw.disabled = false;
    els.lotteryDraw.textContent = t("lotteryDraw");
  }
  if (els.lotteryDialog) els.lotteryDialog.showModal();
}

function finishLottery() {
  const canOpen15 = state.pendingLotteryTier === "grand";
  const amount = 100;
  if (canOpen15) {
    state.rewards.opened15 = true;
    state.rewards.chest15 = false;
  } else {
    state.rewards.opened5 = true;
    state.rewards.chest5 = false;
  }
  saveProgress();
  addHeroChips(amount);
  if (els.lotteryResult) els.lotteryResult.textContent = t("lotteryWonSmall");
  showToast(fillTemplate(t("chestReward"), { amount: diamond(amount) }));
  renderStreakPanel();
}

function drawLottery() {
  if (!els.lotteryDraw) return;
  els.lotteryDraw.disabled = true;
  els.lotteryDraw.textContent = t("lotteryDrawing");
  const stopIndex = 2;
  const steps = 16;
  let step = 0;
  const tick = () => {
    const index = step < steps ? step % 6 : stopIndex;
    renderLotteryGrid(index);
    if (step >= steps) {
      finishLottery();
      els.lotteryDraw.textContent = t("lotteryDraw");
      return;
    }
    step += 1;
    window.setTimeout(tick, 85 + step * 8);
  };
  tick();
}

function applyChipFamily() {
  document.body.dataset.chipFamily = state.chipFamily || "classic";
}

function renderStreakPanel() {
  if (!els.streakPanel) return;
  const ready = (state.rewards.chest5 && !state.rewards.opened5) || (state.rewards.chest15 && !state.rewards.opened15);
  const totalWins = Number(state.rewards.totalWins || 0);
  const longMission = state.rewards.opened15;
  const count = longMission ? Math.min(totalWins, 888) : state.winStreak;
  const goal = longMission ? 888 : 15;
  els.streakCount.textContent = `${count}`;
  if (els.streakGoal) els.streakGoal.textContent = `${goal}`;
  const progress = Math.min(100, Math.round((Math.min(count, goal) / goal) * 100));
  els.streakProgress.style.width = `${progress}%`;
  els.openChest.disabled = !ready;
  els.openChest.textContent = state.winStreak >= 5 ? t("openChest") : t("claimReward");
  if (longMission) {
    els.streakHint.textContent = t("streakMission888");
    els.openChest.textContent = state.lang === "zh" ? "任务中" : "Mission";
    els.openChest.disabled = true;
  } else {
    const remaining = Math.max(1, 15 - state.winStreak);
    const pitchKey = remaining === 1 ? "streakNextPitch" : "streakNextPitchPlural";
    els.streakHint.textContent = ready ? t("streakGiftHintReady") : fillTemplate(t(pitchKey), { count: remaining });
  }
  els.streakPanel.classList.toggle("reward-ready", ready);
  els.streakPanel.classList.toggle("lottery-ready", ready);
  els.streakPanel.classList.toggle("long-mission", longMission);
}

function refreshAgents() {
  const hero = getHero();
  const heroEval = evaluateCards([...hero.cards, ...state.community]);
  const equity = estimateEquity(180);
  const potOdds = state.currentBet > hero.committed ? (state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed) : 0;
  const recommendationResult = recommendAction(equity, potOdds);
  const recommendation = recommendationResult.label;
  const risk = equity < 0.38 ? "High" : equity < 0.58 ? "Medium" : "Low";
  const zhAction = { RAISE: "加注", CALL: "跟注", CHECK: "过牌", FOLD: "弃牌" };
  const actionText = state.lang === "zh" ? zhAction[recommendation] : recommendation;
  const agent = state.customAgent || defaultAgent();

  state.agents = [
    {
      name: agent.name,
      text: buildHumanAdvice(recommendationResult.action, equity, potOdds, heroEval),
    },
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
  state.lastExplanation = state.agents[0].text;
  renderGuidance(recommendationResult.action, equity, potOdds, heroEval);
  syncNaturalAgentAdvice(state.lang === "zh" ? "现在这手牌应该怎么打？" : "How should I play this hand now?");
}

function renderGuidance(action, equity, potOdds, heroEval) {
  const equityPct = Math.round(equity * 100);
  const oddsPct = Math.round(potOdds * 100);
  const actionText = actionName(action);
  if (state.archived && state.resultSummary) {
    els.agentGuidanceTitle.textContent = state.resultSummary;
    return;
  }
  if (state.lang === "zh") {
    const reason =
      action === "raise"
        ? `胜率约 ${equityPct}% 且当前牌型是${heroEval.name}，可以加压让弱牌和听牌付费。`
        : action === "call"
          ? `胜率约 ${equityPct}%，还高于继续投入的价格，先控制底池保留摊牌价值。`
          : `胜率约 ${equityPct}% 低于底池赔率 ${oddsPct}%，继续投入不划算。`;
    els.agentGuidanceTitle.textContent = `建议${actionText}：${reason}`;
    return;
  }
  const reason =
    action === "raise"
      ? `equity is near ${equityPct}% and ${heroEval.name} can pressure weaker hands and draws.`
      : action === "call"
        ? `equity is near ${equityPct}%, enough to continue while keeping the pot controlled.`
        : `equity is near ${equityPct}% versus ${oddsPct}% pot odds, so the price is too high.`;
  els.agentGuidanceTitle.textContent = `Play ${actionText}: ${reason}`;
}

function buildHumanAdvice(action, equity, potOdds, heroEval) {
  const equityPct = Math.round(equity * 100);
  const oddsPct = Math.round(potOdds * 100);
  const active = getActiveVillains().length;
  if (state.lang === "zh") {
    if (action === "raise") return `这手可以主动一点。你现在是${heroEval.name}，胜率约 ${equityPct}%，对手还有 ${active} 个；加注是在逼弱牌付费，也让他们别便宜看下一张。`;
    if (action === "call") return `我会先跟/过，不急着把底池做大。胜率约 ${equityPct}%，还能看下一街，但别把自己套进大底池。`;
    return `我建议弃牌。胜率约 ${equityPct}%，继续投入要付出的价格接近 ${oddsPct}%，这手牌不值得硬扛。`;
  }
  if (action === "raise") return `I would take the lead. You have ${heroEval.name}, about ${equityPct}% equity, and ${active} live opponents. Make the weaker hands pay.`;
  if (action === "call") return `I would check or call for now. Around ${equityPct}% equity is playable, but not worth inflating the pot.`;
  return `I would fold. Equity is around ${equityPct}% and the price is near ${oddsPct}%, so forcing this hand is too expensive.`;
}

function recommendAction(equity, potOdds) {
  const hero = getHero();
  const agent = state.customAgent || defaultAgent();
  let raiseLine = 0.68;
  let callBuffer = 0.08;
  if (agent.strategy === "tight") {
    raiseLine += 0.08;
    callBuffer += 0.05;
  }
  if (agent.strategy === "aggressive") {
    raiseLine -= 0.09;
    callBuffer -= 0.03;
  }
  if (agent.strategy === "exploitative" && getActiveVillains().some((p) => p.style === "NIT" && !p.folded)) {
    raiseLine -= 0.04;
  }
  const canCheck = state.currentBet <= hero.committed;
  if (equity > raiseLine) return { label: "RAISE", action: "raise" };
  if (canCheck && equity > 0.22) return { label: "CHECK", action: "call" };
  if (equity > potOdds + callBuffer) return { label: "CALL", action: "call" };
  return { label: "FOLD", action: "fold" };
}

function buildDeepExplanation(action, equity, potOdds, heroEval, compact = false) {
  const agent = state.customAgent || defaultAgent();
  const board = state.community.map(cardLabel).join(" ") || (state.lang === "zh" ? "尚无公共牌" : "no board yet");
  const heroCards = getHero().cards.map(cardLabel).join(" ");
  const texture = boardTexture();
  const memoryLine = memoryInsight();
  const actionWord = actionName(action);
  const equityPct = Math.round(equity * 100);
  const oddsPct = Math.round(potOdds * 100);

  if (state.lang === "zh") {
    const tone =
      agent.personality === "bold"
        ? "我会把主动权拿回来，"
        : agent.personality === "teacher"
          ? "从教学角度看，"
          : agent.personality === "exploit"
            ? "从剥削角度看，"
            : "冷静看这手牌，";
    const text = `${tone}我建议「${actionWord}」。你拿 ${heroCards}，公共牌是 ${board}，现在是${heroEval.name}；胜率约 ${equityPct}%，继续投入的价格约 ${oddsPct}%。${texture.zh}。重点不是逞强，而是看这次投入能不能换到足够的后续机会。${memoryLine.zh}`;
    return compact ? text.slice(0, 150) + (text.length > 150 ? "..." : "") : text;
  }

  const tone =
    agent.personality === "bold"
      ? "I want to take initiative here: "
      : agent.personality === "teacher"
        ? "The teaching point is this: "
        : agent.personality === "exploit"
          ? "Exploitatively, the important read is this: "
          : "Calmly, the hand asks for discipline: ";
  const text = `${tone}I recommend ${actionWord}. Hero holds ${heroCards}; board is ${board}; made hand is ${heroEval.name}; equity is about ${equityPct}% and the price is near ${oddsPct}%. The point is simple: pay only when the next card or showdown value is worth it. ${memoryLine.en}`;
  return compact ? text.slice(0, 160) + (text.length > 160 ? "..." : "") : text;
}

function boardTexture() {
  if (state.community.length < 3) {
    return {
      en: "undeveloped, so preflop range shape matters more than made-hand value",
      zh: "尚未展开，因此翻牌前范围结构比当前成牌更重要",
    };
  }
  const suitsOnBoard = new Map();
  for (const card of state.community) suitsOnBoard.set(card.suit, (suitsOnBoard.get(card.suit) || 0) + 1);
  const values = state.community.map((card) => card.value).sort((a, b) => a - b);
  const connected = values.some((value, index) => index && value - values[index - 1] <= 2);
  const flushy = Math.max(...suitsOnBoard.values()) >= 3;
  if (flushy && connected) return { en: "wet and coordinated, with both straight and flush pressure", zh: "很湿且连接紧密，同时存在顺子和同花压力" };
  if (flushy) return { en: "flush-heavy, so blockers and redraws matter", zh: "同花压力明显，阻断牌和再听牌很关键" };
  if (connected) return { en: "connected, so straight draws and two-pair shifts are live", zh: "连接性强，顺子听牌和两对变化都很活跃" };
  return { en: "dry, which rewards thin value and controlled bluff frequency", zh: "偏干，适合薄价值下注和受控诈唬频率" };
}

function memoryInsight() {
  const agent = state.customAgent || defaultAgent();
  if (agent.memory === "hand") {
    return {
      en: "Memory mode is current-hand only, so the recommendation avoids overfitting old outcomes.",
      zh: "当前使用单手牌记忆，因此建议不会被旧结果过度影响。",
    };
  }
  const priorWins = state.agentMemory.filter((item) => item.heroWon).length;
  const total = state.agentMemory.length;
  if (!total) {
    return {
      en: "No prior memory is available yet, so this is a range-first decision.",
      zh: "目前还没有历史记忆，因此这是一次以范围为主的判断。",
    };
  }
  return {
    en: `Memory notes ${priorWins}/${total} recent hero wins; that tempers the advice without overriding the math.`,
    zh: `记忆中最近 ${total} 手牌有 ${priorWins} 次胜利；这会微调建议，但不会覆盖胜率数学。`,
  };
}

function strategyName(strategy) {
  const en = { balanced: "balanced GTO", tight: "tight value", aggressive: "pressure-aggressive", exploitative: "exploitative reads" };
  const zh = { balanced: "均衡 GTO", tight: "紧价值", aggressive: "高压进攻", exploitative: "剥削读牌" };
  return state.lang === "zh" ? zh[strategy] : en[strategy];
}

function actionName(action) {
  const en = { raise: "raise", call: "check/call", fold: "fold" };
  const zh = { raise: "加注", call: "过牌/跟注", fold: "弃牌" };
  return state.lang === "zh" ? zh[action] : en[action];
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
  const result = PokerEngine.evaluateCards(cards);
  return { ...result, name: handName(result.category), cards: result.cards || [] };
}

function evaluateFive(cards) {
  const result = PokerEngine.evaluateFive(cards);
  return { ...result, name: handName(result.category), cards: result.cards || [] };
}

function getStraightHigh(values) {
  return PokerEngine.straightHigh(values);
}

function handName(category) {
  const en = ["High Card", "Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush"];
  const zh = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "四条", "同花顺", "皇家同花顺"];
  return state.lang === "zh" ? zh[category] : en[category];
}

function scoreToNormalized(score) {
  return Math.min(0.98, Math.max(0.12, score / PokerEngine.MAX_SCORE));
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
  const equity = estimateEquity(60);
  const potOdds = state.currentBet > hero.committed ? (state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed) : 0;
  const recommendation = recommendAction(equity, potOdds);
  els.handNumber.textContent = `#${state.handId}`;
  els.street.textContent = t(state.street === "folded" ? "foldedStreet" : state.street === "showdown" ? "showdownStreet" : state.street);
  els.pot.textContent = money(state.pot);
  els.centerPot.textContent = money(state.pot);
  els.centerPotChips.innerHTML = chipStackHtml(state.pot);
  els.heroStack.textContent = money(hero.stack);
  els.bestHand.textContent = heroEval.name;
  els.equityFill.style.width = `${Math.round(equity * 100)}%`;
  els.agentNarration.textContent = state.lastExplanation || state.agents[0]?.text || "";
  renderGuidance(recommendation.action, equity, potOdds, heroEval);
  renderResult();

  renderCards(els.community, state.community, false, 5);
  renderSeat(els.heroSeat, hero, false);
  els.villains.forEach((seat, index) => {
    const player = state.players[index + 1];
    seat.hidden = !player;
    if (player) renderSeat(seat, player, !state.archived);
  });
  renderAgents();
  renderAgentModules();
  renderLog();
  renderHandList();
  renderStreakPanel();
  renderLeaderboard();
  updateButtons();
}

function renderResult() {
  if (!state.result) {
    els.resultPanel.hidden = true;
    els.resultPanel.className = "result-panel";
    els.resultTitle.textContent = "";
    els.resultDelta.textContent = "";
    els.resultSummary.textContent = "";
    return;
  }
  els.resultPanel.hidden = false;
  els.resultPanel.className = "result-panel";
  if (state.result === "win") {
    els.resultTitle.textContent = `${t("resultWin")} · ${t("heroWins")}`;
  } else if (state.result === "lose") {
    els.resultTitle.textContent = `${t("resultLose")} · ${t("villainWins")}`;
    els.resultPanel.classList.add("loss");
  } else if (state.result === "tie") {
    els.resultTitle.textContent = `${t("resultTie")} · ${t("splitHand")}`;
    els.resultPanel.classList.add("neutral");
  } else {
    els.resultTitle.textContent = `${t("resultFold")} · ${t("folded")}`;
    els.resultPanel.classList.add("neutral");
  }
  const delta = state.resultDelta || 0;
  els.resultDelta.textContent =
    delta > 0
      ? fillTemplate(t("netWin"), { amount: signedMoney(delta) })
      : delta < 0
        ? fillTemplate(t("netLose"), { amount: money(Math.abs(delta)) })
        : t("netEven");
  els.resultDelta.classList.toggle("loss", delta < 0);
  els.resultSummary.textContent = state.resultSummary;
  els.status.textContent = state.resultSummary;
  renderSettlementDialog();
}

function renderSettlementCards(target, cards) {
  if (!target) return;
  target.innerHTML = "";
  const visibleCards = cards?.length ? cards : [];
  for (const card of visibleCards) target.appendChild(cardNode(card, false));
}

function renderSettlementDialog() {
  if (!state.showdownDetail || state.settlementShown || !els.settlementDialog) return;
  const detail = state.showdownDetail;
  els.settlementHeadline.textContent = detail.tie ? t("splitHand") : `${detail.winner} ${state.lang === "zh" ? "获胜" : "wins"}`;
  els.settlementWinnerName.textContent = detail.tie ? detail.winners.join(" / ") : detail.winner;
  els.settlementLoserName.textContent = detail.tie ? detail.loser : detail.loser;
  els.settlementWinnerType.textContent = detail.winnerEval.name;
  els.settlementLoserType.textContent = detail.loserEval.name;
  els.settlementReason.textContent = detail.reason;
  const delta = state.resultDelta || 0;
  els.settlementDelta.textContent =
    delta > 0
      ? fillTemplate(t("netWin"), { amount: signedMoney(delta) })
      : delta < 0
        ? fillTemplate(t("netLose"), { amount: money(Math.abs(delta)) })
        : t("netEven");
  els.settlementDelta.classList.toggle("loss", delta < 0);
  renderSettlementCards(els.settlementWinnerCards, detail.winnerEval.cards);
  renderSettlementCards(els.settlementLoserCards, detail.loserEval.cards);
  state.settlementShown = true;
  els.settlementDialog.showModal();
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
    node.innerHTML = `<span class="card-back-word">GRITH</span>`;
    return node;
  }
  node.className = `playing-card ${card.color === "red" ? "red" : ""}`;
  node.innerHTML = `<span class="rank">${card.rank}</span><span class="suit">${card.symbol}</span><span class="mini-suit">${card.symbol}</span>`;
  return node;
}

function renderSeat(target, player, hidden) {
  const status = player.folded ? "FOLD" : player.lastAction.toUpperCase();
  const tell = player.bot ? opponentTell(player) : null;
  const betAmount = player.committed;
  target.innerHTML = `
    <div class="seat-shell">
      ${tell ? `<div class="opponent-avatar ${tell.level}" aria-label="${tell.label}"></div>` : ""}
      <div>
        <h3>${player.name}</h3>
        ${tell ? `<span class="tell-note">${tell.label}</span>` : ""}
      </div>
    </div>
    <div class="seat-meta"><span>${player.style}</span><span>${money(player.stack)}</span><span>${status}</span></div>
    ${betAmount > 0 ? `<div class="seat-bet">${chipStackHtml(betAmount)}<strong>${money(betAmount)}</strong></div>` : ""}
    <div class="card-row"></div>
  `;
  renderCards(target.querySelector(".card-row"), player.cards, hidden, 2);
}

function chipStackHtml(amount) {
  if (amount <= 0) return "";
  const count = Math.max(1, Math.min(5, Math.ceil(amount / 40)));
  return Array.from({ length: count }, (_, index) => `<span class="chip chip-${index + 1}"></span>`).join("");
}

function opponentTell(player) {
  if (player.folded) return { level: "folded", label: t("tellFolded") };
  const strength = scoreToNormalized(evaluateCards([...player.cards, ...state.community]).score);
  const noise = Math.sin((state.handId + 1) * (player.tellSeed + 0.31) * 17) * 0.18;
  const pressure = player.lastAction === "raise" ? 0.12 : player.lastAction === "call" ? 0.04 : 0;
  const style = player.style === "LAG" ? 0.08 : player.style === "NIT" ? -0.06 : 0;
  const tell = strength + noise + pressure + style;
  const moodShift = Math.sin((state.handId + player.tellSeed) * 31 + player.stack / 23);
  if (strength > 0.72 && tell < 0.58) return { level: "trap", label: t("tellTrap") };
  if (strength < 0.42 && tell > 0.58) return { level: "bluff", label: t("tellBluff") };
  if (tell > 0.74) return { level: moodShift > 0 ? "happy" : "angry", label: moodShift > 0 ? t("tellHappy") : t("tellAngry") };
  if (tell > 0.62) return { level: "annoyed", label: t("tellAnnoyed") };
  if (tell < 0.28) return { level: moodShift > 0 ? "sad" : "weak", label: moodShift > 0 ? t("tellSad") : t("tellWeak") };
  if (tell < 0.42) return { level: "doubt", label: t("tellDoubt") };
  if (Math.abs(noise) > 0.11) return { level: "nervous", label: t("tellNervous") };
  return { level: "calm", label: t("tellCalm") };
}

function renderAgents() {
  els.agentCards.innerHTML = "";
  for (const agent of state.agents.slice(0, 1)) {
    const node = document.createElement("article");
    node.className = "agent-card";
    node.innerHTML = `<strong>${agent.name}</strong><p>${agent.text}</p>`;
    els.agentCards.appendChild(node);
  }
}

function moduleMetric(module) {
  const hero = getHero();
  const equity = hero ? estimateEquity(120) : 0;
  const heroEval = hero ? evaluateCards([...hero.cards, ...state.community]) : null;
  const potOdds = hero && state.currentBet > hero.committed ? (state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed) : 0;
  const recommendation = hero ? recommendAction(equity, potOdds) : { action: "call" };
  const risk = equity < 0.38 ? (state.lang === "zh" ? "高" : "High") : equity < 0.58 ? (state.lang === "zh" ? "中" : "Med") : state.lang === "zh" ? "低" : "Low";
  const active = getActiveVillains().length;
  const memory = state.agentMemory.length;
  const actionText = actionName(recommendation.action);
  const hand = heroEval?.name || "-";
  const metrics = {
    range:
      state.lang === "zh"
        ? { label: "范围侦察", value: `${Math.round(equity * 100)}%`, detail: `牌型 ${hand}` }
        : { label: "Range Scout", value: `${Math.round(equity * 100)}%`, detail: hand },
    coach:
      state.lang === "zh"
        ? { label: "策略教练", value: actionText, detail: `赔率 ${Math.round(potOdds * 100)}%` }
        : { label: "GTO Coach", value: actionText, detail: `Odds ${Math.round(potOdds * 100)}%` },
    risk:
      state.lang === "zh"
        ? { label: "风险哨兵", value: risk, detail: `对手 ${active} 名` }
        : { label: "Risk Sentinel", value: risk, detail: `${active} active` },
    memory:
      state.lang === "zh"
        ? { label: "牌桌记忆", value: `${memory}`, detail: "最近记录" }
        : { label: "Table Memory", value: `${memory}`, detail: "hands" },
  };
  return metrics[module] || metrics.range;
}

function renderAgentModules() {
  els.moduleButtons.forEach((button) => {
    const metric = moduleMetric(button.dataset.module);
    button.innerHTML = `<span>${metric.label}</span><b>${metric.value}</b><small>${metric.detail}</small>`;
  });
}

function moduleContent(module) {
  const hero = getHero();
  const equity = hero ? estimateEquity(120) : 0;
  const heroEval = hero ? evaluateCards([...hero.cards, ...state.community]) : null;
  const activeVillains = getActiveVillains().length;
  const modules = {
    range: {
      title: t("rangeScout"),
      body: `${t("moduleRangeBody")} ${state.lang === "zh" ? "当前" : "Current"} ${Math.round(equity * 100)}% · ${heroEval?.name || "-"}.`,
    },
    coach: {
      title: t("gtoCoach"),
      body: `${t("moduleCoachBody")} ${state.lastExplanation || state.agents[0]?.text || ""}`,
    },
    risk: {
      title: t("riskSentinel"),
      body: `${t("moduleRiskBody")} ${state.lang === "zh" ? "仍在牌局中的对手" : "Active opponents"}: ${activeVillains}.`,
    },
    memory: {
      title: t("tableMemory"),
      body: `${t("moduleMemoryBody")} ${state.lang === "zh" ? "最近记录" : "Recent hands"}: ${state.agentMemory.length}.`,
    },
  };
  return modules[module] || modules.range;
}

function showModule(module) {
  renderAgentModules();
  const content = moduleContent(module);
  els.modulePanel.hidden = false;
  els.moduleLabel.textContent = t("moduleLabel");
  els.moduleTitle.textContent = content.title;
  els.moduleBody.textContent = content.body;
  els.moduleButtons.forEach((button) => {
    const active = button.dataset.module === module;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
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
    item.innerHTML = `<span>#${hand.id}</span><small>${hand.agent?.name || "Agent"} · ${hand.heroWon ? "WIN" : hand.result.toUpperCase()}</small><strong>${money(hand.pot)}</strong>`;
    els.handList.appendChild(item);
  }
}

function playerWinRate(name, isHero) {
  const hands = getHands();
  if (!hands.length) return isHero ? 0 : 0.42;
  if (isHero) return hands.filter((hand) => hand.heroWon).length / hands.length;
  const wins = hands.filter((hand) => hand.winner === name).length;
  return Math.max(0.18, Math.min(0.82, wins / hands.length + 0.28));
}

function playerWins(name, isHero) {
  const hands = getHands();
  if (isHero) return hands.filter((hand) => hand.heroWon).length;
  return hands.filter((hand) => hand.winner === name).length;
}

function renderLeaderboard() {
  if (!els.leaderboardRows || !state.players.length) return;
  const rows = state.players
    .map((player, index) => ({
      name: index === 0 ? state.user?.name || player.name : player.name,
      stack: player.stack,
      winRate: playerWinRate(player.name, index === 0),
      wins: playerWins(player.name, index === 0),
      hero: index === 0,
    }))
    .sort((a, b) => b.stack - a.stack);
  els.leaderboardRows.innerHTML = rows
    .map(
      (row, index) => `
        <div class="leaderboard-row ${row.hero ? "hero" : ""}">
          <strong>#${index + 1} ${row.name}</strong>
          <span>${money(row.stack)}</span>
          <small>${t("leaderboardWinRate")} ${Math.round(row.winRate * 100)}% · ${t("leaderboardWins")} ${row.wins}</small>
        </div>
      `,
    )
    .join("");
}

function setLeaderboardOpen(open) {
  els.leaderboardDrawer.classList.toggle("open", open);
  els.leaderboardDrawer.setAttribute("aria-hidden", String(!open));
  if (open) renderLeaderboard();
}

function updateButtons() {
  const ended = state.archived || state.street === "showdown" || state.street === "folded";
  const hero = getHero();
  const needsCall = hero && state.currentBet > hero.committed;
  const wager = money(state.selectedWager || 20);
  els.fold.disabled = ended;
  els.check.disabled = ended;
  els.raise.disabled = ended;
  els.nextStreet.disabled = ended;
  els.check.textContent = needsCall
    ? state.lang === "zh"
      ? `跟注 ${money(state.currentBet - hero.committed)}`
      : `Call ${money(state.currentBet - hero.committed)}`
    : state.lang === "zh"
      ? `下注 ${wager}`
      : `Bet ${wager}`;
  els.raise.textContent = state.lang === "zh" ? `加注 ${wager}` : `Raise ${wager}`;
}

function renderLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  els.language.textContent = t("languageButton");
  els.help.setAttribute("aria-label", els.helpPanel.hidden ? t("helpClosedLabel") : t("helpOpenLabel"));
  renderSession();
  renderAgentModules();
  if (state.players.length) {
    refreshAgents();
    render();
  }
}

function logLine(text) {
  state.log.unshift(text);
}

function askAgentAdvice() {
  const hero = getHero();
  if (!hero) return;
  const equity = estimateEquity(220);
  const potOdds = state.currentBet > hero.committed ? (state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed) : 0;
  const heroEval = evaluateCards([...hero.cards, ...state.community]);
  const recommendation = recommendAction(equity, potOdds);
  state.lastExplanation = buildDeepExplanation(recommendation.action, equity, potOdds, heroEval, false);
  els.agentNarration.textContent = state.lastExplanation;
  logLine(`${(state.customAgent || defaultAgent()).name} advises ${recommendation.label}: ${state.lastExplanation}`);
  renderLog();
}

function agentPlayHand() {
  if (state.archived || state.street === "showdown" || state.street === "folded") return;
  const hero = getHero();
  const equity = estimateEquity(240);
  const potOdds = state.currentBet > hero.committed ? (state.currentBet - hero.committed) / (state.pot + state.currentBet - hero.committed) : 0;
  const recommendation = recommendAction(equity, potOdds);
  askAgentAdvice();
  heroAction(recommendation.action);
  showToast(t("agentActed"));
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

async function syncBackgroundMusic() {
  if (!els.bgMusic) return;
  els.bgMusic.volume = 0.28;
  if (state.muted) {
    els.bgMusic.pause();
    return;
  }
  await els.bgMusic.play().catch(() => {
    state.muted = true;
    els.sound.textContent = "♪";
    showToast(state.lang === "zh" ? "点击音符开启音乐。" : "Tap the note to start music.");
  });
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
els.googleSignIn.addEventListener("click", signInWithGoogle);
els.wechatLogin.addEventListener("click", loginWithWeChat);
els.invite.addEventListener("click", inviteFriend);
els.agentSettings.addEventListener("click", () => setAgentSettingsOpen(els.agentConsole.hidden));
els.leaderboardButton.addEventListener("click", () => setLeaderboardOpen(true));
els.buyChips.addEventListener("click", openBuyDialog);
els.buyAmount.addEventListener("input", updateBuyPreview);
els.buyForm.addEventListener("submit", buyChips);
els.openChest.addEventListener("click", openStreakChest);
els.lotteryDraw.addEventListener("click", drawLottery);
els.wagerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedWager = Number(button.dataset.wager || 20);
    els.wagerButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateButtons();
  });
});
els.account.addEventListener("click", openAccountDialog);
els.accountForm.addEventListener("submit", saveAccount);
els.accountName.addEventListener("input", () => {
  if (els.accountAvatarPreview) els.accountAvatarPreview.textContent = profileInitial(els.accountName.value || state.user?.name);
});
els.chatForm.addEventListener("submit", submitChat);
els.adminEntry.addEventListener("click", openAdminDialog);
els.adminLoginForm.addEventListener("submit", enterAdmin);
els.adminCreateCodeForm.addEventListener("submit", createAdminCode);
els.adminDialog.querySelector("[data-close-admin]").addEventListener("click", () => els.adminDialog.close());
document.querySelectorAll("[data-dialog-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog")?.close());
});
els.redeem.addEventListener("click", toggleRedeemPanel);
els.redeemPanel.addEventListener("submit", (event) => {
  event.preventDefault();
  redeemChips(getRedeemCode());
});
els.redeemDigits.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 1);
    if (input.value && index < els.redeemDigits.length - 1) els.redeemDigits[index + 1].focus();
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && !input.value && index > 0) els.redeemDigits[index - 1].focus();
  });
  input.addEventListener("paste", (event) => {
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    event.preventDefault();
    els.redeemDigits.forEach((digit, digitIndex) => {
      digit.value = pasted[digitIndex] || "";
    });
    els.redeemDigits[Math.min(pasted.length, 6) - 1]?.focus();
  });
});
els.agentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAgentFromForm();
});
els.agentPlay.addEventListener("click", agentPlayHand);
els.advice.addEventListener("click", askAgentAdvice);
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
  syncBackgroundMusic();
  showToast(state.muted ? t("soundOff") : t("soundOn"));
});
els.moduleButtons.forEach((button) => {
  button.addEventListener("click", () => showModule(button.dataset.module));
});
els.leaderboardClose.addEventListener("click", () => setLeaderboardOpen(false));

let touchStartX = 0;
let touchStartY = 0;
window.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  },
  { passive: true },
);
window.addEventListener(
  "touchend",
  (event) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    if (touchStartX > window.innerWidth - 44 && dx < -50 && Math.abs(dy) < 90) setLeaderboardOpen(true);
    if (els.leaderboardDrawer.classList.contains("open") && dx > 55 && Math.abs(dy) < 90) setLeaderboardOpen(false);
  },
  { passive: true },
);

loadAgent();
loadBankrolls();
loadProgress();
loadSession();
loadChat();
setAgentSettingsOpen(false);
renderLanguage();
startHand();
