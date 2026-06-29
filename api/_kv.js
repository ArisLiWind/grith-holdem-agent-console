async function kvCommand(command) {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token || typeof fetch !== "function") return null;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  if (!response.ok) throw new Error(`KV command failed: ${response.status}`);
  const payload = await response.json();
  return payload.result;
}

async function kvGetJson(key, fallback) {
  try {
    const value = await kvCommand(["GET", key]);
    if (!value) return fallback;
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

async function kvSetJson(key, value) {
  try {
    await kvCommand(["SET", key, JSON.stringify(value)]);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  kvGetJson,
  kvSetJson,
};
