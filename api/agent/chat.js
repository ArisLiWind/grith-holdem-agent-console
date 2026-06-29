module.exports = function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ reply: "" });
    return;
  }

  const message = String(request.body?.message || "").trim();
  const hand = String(request.body?.hand || "").trim();
  const reply = message
    ? `我收到了：“${message}”。结合当前牌局，我会先看胜率、底池赔率和对手动作。${hand ? `当前 Agent 记录：${hand.slice(0, 90)}...` : "如果你不确定，可以先问我“这手牌为什么要跟/弃/加”。"}`
    : "你可以问我这手牌为什么要弃牌、跟注或加注。";

  response.status(200).json({ reply });
};
