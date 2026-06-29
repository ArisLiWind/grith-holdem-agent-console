const store = require("../_store");
const { kvGetJson, kvSetJson } = require("../_kv");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ ok: false });
    return;
  }

  const email = String(request.body?.email || "").trim().toLowerCase();
  const nickname = String(request.body?.nickname || "Player").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    response.status(400).json({ ok: false, error: "invalid_email" });
    return;
  }

  const users = await kvGetJson("grith:users", store.users);
  const existing = users.find((user) => user.email === email);
  if (existing) {
    existing.nickname = nickname;
    existing.updatedAt = new Date().toISOString();
    store.users = users;
    await kvSetJson("grith:users", users);
    response.status(200).json({ ok: true, user: { email, nickname } });
    return;
  }

  users.push({ email, nickname, createdAt: new Date().toISOString() });
  store.users = users;
  await kvSetJson("grith:users", users);
  response.status(200).json({ ok: true, user: { email, nickname } });
};
