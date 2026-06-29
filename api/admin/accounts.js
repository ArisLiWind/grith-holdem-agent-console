const store = require("../_store");
const { kvGetJson } = require("../_kv");

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.status(405).json({ accounts: [] });
    return;
  }

  const users = await kvGetJson("grith:users", store.users);
  response.status(200).json({
    accounts: users.map((user) => ({
      name: user.nickname || user.name || user.email,
      email: user.email || "",
      wechat: user.wechat || "",
      chips: user.chips || 0,
      updatedAt: user.updatedAt || user.createdAt || "",
    })),
  });
};
