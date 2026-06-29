const globalStore = globalThis.__grithStore || {
  redeemCodes: [],
  users: [],
  payments: [],
};

globalThis.__grithStore = globalStore;

module.exports = globalStore;
