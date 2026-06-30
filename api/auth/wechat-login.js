function baseUrl(request) {
  const host = request.headers["x-forwarded-host"] || request.headers.host || "grith-cardgame.vercel.app";
  const proto = request.headers["x-forwarded-proto"] || "https";
  return `${proto}://${host}`;
}

function encodeState(request) {
  const room = String(request.query?.room || "").trim();
  const seat = String(request.query?.seat || "0").trim() === "1" ? "1" : "0";
  return Buffer.from(JSON.stringify({ room, seat, ts: Date.now() })).toString("base64url");
}

module.exports = function handler(request, response) {
  if (request.method !== "GET") {
    response.status(405).json({ ok: false });
    return;
  }

  const appId = process.env.WECHAT_OPEN_APP_ID || process.env.WECHAT_APP_ID;
  const redirectUri = process.env.WECHAT_REDIRECT_URI || `${baseUrl(request)}/api/auth/wechat-callback`;
  if (!appId) {
    response.status(500).json({ ok: false, error: "missing_wechat_app_id" });
    return;
  }

  const url = new URL("https://open.weixin.qq.com/connect/qrconnect");
  url.searchParams.set("appid", appId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "snsapi_login");
  url.searchParams.set("state", encodeState(request));
  response.writeHead(302, { Location: `${url.toString()}#wechat_redirect` });
  response.end();
};
