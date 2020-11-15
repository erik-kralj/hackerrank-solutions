const assert = require("assert").strict;

function solution(ar) {
    return ar.reduce((p, c) => p + c, 0);
}

assert.strictEqual(solution([1000000001,1000000002,1000000003,1000000004,1000000005]), 5000000015);
