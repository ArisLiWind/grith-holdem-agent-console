import { context, createServer, getServerPort, reddit } from "@devvit/web/server";

function json(res, statusCode, body) {
  const payload = JSON.stringify(body);
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(payload)
  });
  res.end(payload);
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString("utf8");
  return body ? JSON.parse(body) : {};
}

async function createTable(req, res) {
  await readJson(req);

  const subredditName = context.subredditName || "grith_holdem_dev";
  const post = await reddit.submitCustomPost({
    subredditName,
    title: "GRITH™ Holdem Playtest",
    entry: "default",
    textFallback: {
      text: "Open this Devvit post to play GRITH™ Holdem."
    },
    postData: {
      table: "grith-holdem",
      createdAt: new Date().toISOString()
    },
    styles: {
      backgroundColor: "#F3EDDFFF",
      backgroundColorDark: "#111111FF",
      height: "TALL"
    }
  });

  json(res, 200, {
    showToast: {
      text: "GRITH™ Holdem 牌桌已创建。",
      appearance: "success"
    },
    navigateTo: {
      url: post.url,
      permalink: post.permalink
    }
  });
}

createServer(async (req, res) => {
  const url = new URL(req.url || "/", "https://devvit.local");

  if (req.method === "POST" && url.pathname === "/internal/menu/create-table") {
    try {
      await createTable(req, res);
    } catch (error) {
      json(res, 500, {
        showToast: {
          text: `创建牌桌失败：${error instanceof Error ? error.message : "未知错误"}`,
          appearance: "neutral"
        }
      });
    }
    return;
  }

  json(res, 404, { error: "Not found" });
}).listen(getServerPort());
