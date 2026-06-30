const assert = require("assert");
const PokerEngine = require("../poker-engine");

const suitMap = { s: "♠", h: "♥", d: "♦", c: "♣" };
const valueMap = { T: 10, J: 11, Q: 12, K: 13, A: 14 };

function card(token) {
  const rank = token[0];
  const suit = token[1];
  return {
    id: token,
    rank,
    value: valueMap[rank] || Number(rank),
    suit,
    symbol: suitMap[suit],
    color: suit === "h" || suit === "d" ? "red" : "black",
  };
}

function hand(tokens) {
  return tokens.split(/\s+/).map(card);
}

function evaluate(tokens) {
  return PokerEngine.evaluateCards(hand(tokens));
}

function beats(left, right, message) {
  assert(PokerEngine.compareEvaluations(evaluate(left), evaluate(right)) > 0, message);
}

function ties(left, right, message) {
  assert.strictEqual(PokerEngine.compareEvaluations(evaluate(left), evaluate(right)), 0, message);
}

beats("Jc Jd 5s 5h Ah 9d 2c", "Qs Qd As Kc 9h 6d 3c", "two pair beats one pair");
beats("7c 7d 7s Ah Kh 9d 2c", "Ac Ad Ks Kh Qs 8d 3c", "three of a kind beats two pair");
beats("5c 6d 7s 8h 9c Ad 2s", "Qc Qd Qs Ah Kh 8d 3c", "straight beats three of a kind");
beats("Ah Jh 8h 5h 2h Kc Qd", "5c 6d 7s 8h 9c Ad 2s", "flush beats straight");
beats("Ac Ad As Kc Kd 8h 2s", "Ah Jh 8h 5h 2h Kc Qd", "full house beats flush");
beats("9c 9d 9s 9h Ah Kd 2c", "Ac Ad As Kc Kd 8h 2s", "four of a kind beats full house");
beats("9h Th Jh Qh Kh 2c 3d", "9c 9d 9s 9h Ah Kd 2c", "straight flush beats four of a kind");
beats("Ac Ad Ks Qh 9c 6d 2s", "Ac Ad Js Th 9d 6c 2h", "kicker decides equal pair");
ties("Ac Kd Qs Jh 9c 4d 2h", "Ad Kh Qc Js 9d 4c 2s", "identical best five-card hands split");

assert.strictEqual(evaluate("Ac 2d 3s 4h 5c Kd Qh").tiebreakers[0], 5, "A2345 is the wheel straight");
assert.strictEqual(evaluate("Tc Jd Qs Kh Ac 2d 3h").tiebreakers[0], 14, "TJQKA is the Broadway straight");
assert.strictEqual(evaluate("Th Jh Qh Kh Ah 2d 3c").category, PokerEngine.CATEGORY.ROYAL_FLUSH, "TJQKA suited is royal flush");

console.log("poker-engine tests passed");
