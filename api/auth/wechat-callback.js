const store = require("../_store");
const { kvGetJson, kvSetJson } = require("../_kv");

function decodeState(raw) {
  try {
    return JSON.parse(Buffer.from(String(raw || ""), "base64url").toString("utf8"));
  } catch {
    return {};
  }
}

function redirectHome(response, state, params = {}) {
  const search = new URLSearchParams();
  if (state.room) search.set("room", state.room);
  if (state.seat === "1") search.set("seat", "1");
  Object.entries(params).forEach(([key, value]) => {
    if (value) search.set(key, value);
  });
  response.writeHead(302, { Location: `/${search.toString() ? `?${search.toString()}` : ""}` });
  response.end();
}

async function saveWechatUser(profile) {
  const users = await kvGetJson("grith:users", store.users);
  const email = `wechat:${profile.openid}`;
  const existing = users.find((user) => user.email === email || user.wechatOpenId === profile.openid);
  const next = {
    email,
    nickname: profile.nickname || "WeChat Player",
    avatar: profile.headimgurl || "",
    wechatOpenId: profile.openid,
    wechatUnionId: profile.unionid || "",
    provider: "wechat",
    updatedAt: new Date().toISOString(),
  };
  if (existing) Object.assign(existing, next);
  else users.push({ ...next, createdAt: new Date().toISOString() });
  store.users = users;
  await kvSetJson("grith:users", users);
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.status(405).json({ ok: false });
    return;
  }

  const state = decodeState(request.query?.state);
  const code = String(request.query?.code || "").trim();
  const appId = process.env.WECHAT_OPEN_APP_ID || process.env.WECHAT_APP_ID;
  const appSecret = process.env.WECHAT_OPEN_APP_SECRET || process.env.WECHAT_APP_SECRET;

  if (!code || !appId || !appSecret) {
    redirectHome(response, state, { wechatError: "missing_config" });
    return;
  }

  try {
    const tokenUrl = new URL("https://api.weixin.qq.com/sns/oauth2/access_token");
    tokenUrl.searchParams.set("appid", appId);
    tokenUrl.searchParams.set("secret", appSecret);
    tokenUrl.searchParams.set("code", code);
    tokenUrl.searchParams.set("grant_type", "authorization_code");
    const tokenPayload = await fetch(tokenUrl).then((res) => res.json());
    if (!tokenPayload.access_token || !tokenPayload.openid) throw new Error(tokenPayload.errmsg || "wechat_token_failed");

    const userUrl = new URL("https://api.weixin.qq.com/sns/userinfo");
    userUrl.searchParams.set("access_token", tokenPayload.access_token);
    userUrl.searchParams.set("openid", tokenPayload.openid);
    userUrl.searchParams.set("lang", "zh_CN");
    const profile = await fetch(userUrl).then((res) => res.json());
    if (!profile.openid) throw new Error(profile.errmsg || "wechat_profile_failed");

    await saveWechatUser(profile);
    redirectHome(response, state, {
      wechatName: profile.nickname || "WeChat Player",
      wechatOpenId: profile.openid,
    });
  } catch (error) {
    redirectHome(response, state, { wechatError: "login_failed" });
  }
};
