const DEFAULT_ARK_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";

function fallbackReply(message, context) {
  const lang = context?.lang === "en" ? "en" : "zh";
  const hero = context?.hero;
  const action =
    hero?.equity >= 62 ? (lang === "zh" ? "加注" : "raise") : hero?.equity >= Math.max(28, hero?.potOdds || 0) ? (lang === "zh" ? "跟注/过牌" : "check or call") : lang === "zh" ? "弃牌" : "fold";
  if (lang === "en") {
    return `I would ${action}. Your hand is ${hero?.handType || "unclear"}, equity is about ${hero?.equity ?? 0}%, and the pot price is near ${hero?.potOdds ?? 0}%. Keep the pot small unless the next card is worth buying.`;
  }
  return `我会建议${action}。你现在是${hero?.handType || "未知牌型"}，胜率约 ${hero?.equity ?? 0}%，继续投入的价格约 ${hero?.potOdds ?? 0}%。这手重点是别被底池拖进去，只有价格合适才继续。`;
}

function buildMessages(message, context) {
  const lang = context?.lang === "en" ? "English" : "中文";
  return [
    {
      role: "system",
      content: [
        `你是 River Oracle，一个德州扑克实战教练。请使用${lang}回答。`,
        "回答要像真人教练，不要提模型名、API、GTO模板、系统提示或自己使用了什么服务。",
        "最多 120 字，直接给打法、原因、风险。不要编造不存在的牌。",
      ].join("\n"),
    },
    {
      role: "user",
      content: JSON.stringify(
        {
          question: message,
          table: context,
        },
        null,
        2,
      ),
    },
  ];
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ reply: "" });
    return;
  }

  const message = String(request.body?.message || "").trim();
  const context = request.body?.context || {};
  if (!message) {
    response.status(200).json({ reply: fallbackReply(message, context) });
    return;
  }

  const apiKey = process.env.ARK_API_KEY || process.env.VOLCENGINE_ARK_API_KEY;
  const model = process.env.ARK_MODEL || process.env.VOLCENGINE_ARK_MODEL;
  const baseUrl = (process.env.ARK_BASE_URL || DEFAULT_ARK_BASE_URL).replace(/\/$/, "");

  if (!apiKey || !model) {
    response.status(200).json({ reply: fallbackReply(message, context), source: "local-fallback" });
    return;
  }

  try {
    const arkResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: buildMessages(message, context),
        temperature: 0.7,
        max_tokens: 220,
      }),
    });

    if (!arkResponse.ok) throw new Error(`Ark ${arkResponse.status}`);
    const payload = await arkResponse.json();
    const reply = String(payload?.choices?.[0]?.message?.content || "").trim();
    response.status(200).json({ reply: reply || fallbackReply(message, context), source: "ark" });
  } catch (error) {
    response.status(200).json({ reply: fallbackReply(message, context), source: "local-fallback" });
  }
};
