const store = require("../_store");

module.exports = function handler(request, response) {
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

  const existing = store.users.find((user) => user.email === email);
  if (existing) {
    existing.nickname = nickname;
    existing.updatedAt = new Date().toISOString();
    response.status(200).json({ ok: true, user: { email, nickname } });
    return;
  }

  store.users.push({ email, nickname, createdAt: new Date().toISOString() });
  response.status(200).json({ ok: true, user: { email, nickname } });
};
