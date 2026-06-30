(function initPokerEngine(global) {
  const CATEGORY = {
    HIGH_CARD: 0,
    PAIR: 1,
    TWO_PAIR: 2,
    THREE_KIND: 3,
    STRAIGHT: 4,
    FLUSH: 5,
    FULL_HOUSE: 6,
    FOUR_KIND: 7,
    STRAIGHT_FLUSH: 8,
    ROYAL_FLUSH: 9,
  };

  const NAME_KEYS = [
    "highCard",
    "pair",
    "twoPair",
    "threeKind",
    "straight",
    "flush",
    "fullHouse",
    "fourKind",
    "straightFlush",
    "royalFlush",
  ];

  function combinations(items, size) {
    const result = [];
    function walk(start, combo) {
      if (combo.length === size) {
        result.push(combo);
        return;
      }
      for (let index = start; index < items.length; index += 1) walk(index + 1, [...combo, items[index]]);
    }
    walk(0, []);
    return result;
  }

  function valueCounts(cards) {
    const counts = new Map();
    for (const card of cards) counts.set(card.value, (counts.get(card.value) || 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  }

  function straightHigh(values) {
    const unique = [...new Set(values)].sort((a, b) => b - a);
    if (unique.includes(14)) unique.push(1);
    for (let index = 0; index <= unique.length - 5; index += 1) {
      const run = unique.slice(index, index + 5);
      if (run[0] - run[4] === 4) return run[0] === 1 ? 5 : run[0];
    }
    return 0;
  }

  function orderedStraightCards(cards, high) {
    const targets = high === 5 ? [5, 4, 3, 2, 14] : [high, high - 1, high - 2, high - 3, high - 4];
    return targets.map((value) => cards.find((card) => card.value === value));
  }

  function byValueDesc(cards) {
    return [...cards].sort((a, b) => b.value - a.value);
  }

  function score(category, tiebreakers) {
    return tiebreakers.reduce((total, value, index) => total + value * 15 ** (4 - index), category * 15 ** 5);
  }

  function result(category, tiebreakers, cards) {
    return {
      category,
      nameKey: NAME_KEYS[category],
      tiebreakers,
      cards,
      score: score(category, tiebreakers),
    };
  }

  function evaluatePartial(cards) {
    const sorted = byValueDesc(cards);
    const groups = valueCounts(sorted);
    const four = groups.find((group) => group[1] === 4);
    const three = groups.find((group) => group[1] === 3);
    const pairs = groups.filter((group) => group[1] === 2).map((group) => group[0]);
    if (four) return result(CATEGORY.FOUR_KIND, [four[0]], sorted);
    if (three) return result(CATEGORY.THREE_KIND, [three[0], ...sorted.filter((card) => card.value !== three[0]).map((card) => card.value)], sorted);
    if (pairs.length >= 2) return result(CATEGORY.TWO_PAIR, [...pairs.sort((a, b) => b - a), ...sorted.filter((card) => !pairs.includes(card.value)).map((card) => card.value)], sorted);
    if (pairs.length === 1) return result(CATEGORY.PAIR, [pairs[0], ...sorted.filter((card) => card.value !== pairs[0]).map((card) => card.value)], sorted);
    return result(CATEGORY.HIGH_CARD, sorted.map((card) => card.value), sorted);
  }

  function evaluateFive(cards) {
    if (cards.length < 5) return evaluatePartial(cards);
    const sorted = byValueDesc(cards);
    const values = sorted.map((card) => card.value);
    const groups = valueCounts(sorted);
    const isFlush = sorted.every((card) => card.suit === sorted[0].suit);
    const high = straightHigh(values);

    if (isFlush && high) {
      const category = high === 14 ? CATEGORY.ROYAL_FLUSH : CATEGORY.STRAIGHT_FLUSH;
      return result(category, [high], orderedStraightCards(sorted, high));
    }

    if (groups[0]?.[1] === 4) {
      const quad = groups[0][0];
      const kicker = groups.find((group) => group[0] !== quad)[0];
      return result(CATEGORY.FOUR_KIND, [quad, kicker], [...sorted.filter((card) => card.value === quad), sorted.find((card) => card.value === kicker)]);
    }

    if (groups[0]?.[1] === 3 && groups[1]?.[1] === 2) {
      const trips = groups[0][0];
      const pair = groups[1][0];
      return result(CATEGORY.FULL_HOUSE, [trips, pair], [...sorted.filter((card) => card.value === trips), ...sorted.filter((card) => card.value === pair)]);
    }

    if (isFlush) return result(CATEGORY.FLUSH, values, sorted);
    if (high) return result(CATEGORY.STRAIGHT, [high], orderedStraightCards(sorted, high));

    if (groups[0]?.[1] === 3) {
      const trips = groups[0][0];
      const kickers = groups.filter((group) => group[0] !== trips).map((group) => group[0]).sort((a, b) => b - a);
      return result(CATEGORY.THREE_KIND, [trips, ...kickers], [...sorted.filter((card) => card.value === trips), ...kickers.map((value) => sorted.find((card) => card.value === value))]);
    }

    if (groups[0]?.[1] === 2 && groups[1]?.[1] === 2) {
      const pairs = groups.filter((group) => group[1] === 2).map((group) => group[0]).sort((a, b) => b - a);
      const kicker = groups.find((group) => group[1] === 1)[0];
      return result(CATEGORY.TWO_PAIR, [...pairs, kicker], [...pairs.flatMap((value) => sorted.filter((card) => card.value === value)), sorted.find((card) => card.value === kicker)]);
    }

    if (groups[0]?.[1] === 2) {
      const pair = groups[0][0];
      const kickers = groups.filter((group) => group[0] !== pair).map((group) => group[0]).sort((a, b) => b - a);
      return result(CATEGORY.PAIR, [pair, ...kickers], [...sorted.filter((card) => card.value === pair), ...kickers.map((value) => sorted.find((card) => card.value === value))]);
    }

    return result(CATEGORY.HIGH_CARD, values, sorted);
  }

  function compareEvaluations(left, right) {
    if (left.category !== right.category) return left.category - right.category;
    const length = Math.max(left.tiebreakers.length, right.tiebreakers.length);
    for (let index = 0; index < length; index += 1) {
      const diff = (left.tiebreakers[index] || 0) - (right.tiebreakers[index] || 0);
      if (diff) return diff;
    }
    return 0;
  }

  function evaluateCards(cards) {
    if (cards.length < 5) return evaluatePartial(cards);
    return combinations(cards, 5)
      .map(evaluateFive)
      .sort((left, right) => compareEvaluations(right, left))[0];
  }

  function compareHands(leftCards, rightCards) {
    return compareEvaluations(evaluateCards(leftCards), evaluateCards(rightCards));
  }

  const api = {
    CATEGORY,
    NAME_KEYS,
    MAX_SCORE: score(CATEGORY.ROYAL_FLUSH, [14, 14, 14, 14, 14]),
    combinations,
    compareEvaluations,
    compareHands,
    evaluateCards,
    evaluateFive,
    straightHigh,
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  global.PokerEngine = api;
})(typeof globalThis !== "undefined" ? globalThis : window);
