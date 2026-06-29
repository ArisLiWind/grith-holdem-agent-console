const store = require("../_store");

module.exports = function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ ok: false });
    return;
  }

  const amountRmb = Math.max(1, Math.round(Number(request.body?.amountRmb || 0)));
  const chips = Math.max(1, Math.round(Number(request.body?.chips || amountRmb)));
  const orderId = `GRITH-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const configured = Boolean(process.env.ALIPAY_APP_ID && process.env.ALIPAY_PRIVATE_KEY && process.env.ALIPAY_PUBLIC_KEY);

  const payment = {
    orderId,
    amountRmb,
    chips,
    userId: request.body?.userId || "guest",
    provider: "alipay",
    status: configured ? "created" : "demo",
    createdAt: new Date().toISOString(),
  };
  store.payments.unshift(payment);

  response.status(200).json({
    ...payment,
    cashierUrl: configured ? `${process.env.ALIPAY_GATEWAY || "https://openapi.alipay.com/gateway.do"}?out_trade_no=${orderId}` : "",
    message: configured ? "alipay_cashier_created" : "alipay_env_not_configured",
  });
};
