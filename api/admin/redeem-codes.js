const store = require("../_store");
const { kvGetJson, kvSetJson } = require("../_kv");

function listCodes(codes) {
  return codes.filter((item) => item.code !== "041113");
}

module.exports = async function handler(request, response) {
  const codes = await kvGetJson("grith:redeemCodes", store.redeemCodes);

  if (request.method === "GET") {
    response.status(200).json({ codes: listCodes(codes) });
    return;
  }

  if (request.method === "POST") {
    const code = String(request.body?.code || "").trim();
    const amount = Math.max(1, Math.round(Number(request.body?.amount || 0)));
    if (!/^\d{6}$/.test(code) || code === "041113" || !amount) {
      response.status(400).json({ ok: false });
      return;
    }
    store.redeemCodes = codes.filter((item) => item.code !== code);
    store.redeemCodes.unshift({ code, amount, used: false, createdAt: new Date().toISOString() });
    await kvSetJson("grith:redeemCodes", store.redeemCodes);
    response.status(200).json({ ok: true, codes: listCodes(store.redeemCodes) });
    return;
  }

  response.status(405).json({ ok: false });
};
