const store = require("../_store");

function listCodes() {
  return store.redeemCodes.filter((item) => item.code !== "041113");
}

module.exports = function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json({ codes: listCodes() });
    return;
  }

  if (request.method === "POST") {
    const code = String(request.body?.code || "").trim();
    const amount = Math.max(1, Math.round(Number(request.body?.amount || 0)));
    if (!/^\d{6}$/.test(code) || code === "041113" || !amount) {
      response.status(400).json({ ok: false });
      return;
    }
    store.redeemCodes = store.redeemCodes.filter((item) => item.code !== code);
    store.redeemCodes.unshift({ code, amount, used: false, createdAt: new Date().toISOString() });
    response.status(200).json({ ok: true, codes: listCodes() });
    return;
  }

  response.status(405).json({ ok: false });
};
