const assert = require("assert").strict

function solution(n) {
    const b = (n >>> 0).toString(2)
    let max = 0, c = 0
    for (let i = 0; i < b.length; i++) {
        if (b[i] === "1") {
            c += 1
        } else {
            max = Math.max(max, c)
            c = 0;
        }
    }
    return Math.max(max, c)
}

assert.strictEqual(solution(5), 1)
assert.strictEqual(solution(13), 2)
assert.strictEqual(solution(439), 3)
