const assert = require("assert").strict;

function solution(ar) {
    return ar.reduce((p, c) => p + c, 0);
}

assert.strictEqual(solution([1,2,3]), 6);
