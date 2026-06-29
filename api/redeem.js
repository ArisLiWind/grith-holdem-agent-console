const store = require("./_store");
const { kvGetJson, kvSetJson } = require("./_kv");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ amount: 0 });
    return;
  }

  const code = String(request.body?.code || "").trim();
  if (!/^\d{6}$/.test(code) || code === "041113") {
    response.status(400).json({ amount: 0 });
    return;
  }
  const codes = await kvGetJson("grith:redeemCodes", store.redeemCodes);
  const managedCode = codes.find((item) => item.code === code && !item.used);
  if (!managedCode) {
    response.status(400).json({ amount: 0 });
    return;
  }
  managedCode.used = true;
  managedCode.usedAt = new Date().toISOString();
  store.redeemCodes = codes;
  await kvSetJson("grith:redeemCodes", codes);
  response.status(200).json({ amount: Number(managedCode.amount || 0) });
};
