const assert = require("assert").strict;

function solution(candles) {
    const arr = candles.sort((a, b) => a - b);
    const tallest = arr[arr.length - 1];
    return arr.filter(x => x === tallest).length;
}

assert.strictEqual(solution([4, 4, 1, 3]), 2);

