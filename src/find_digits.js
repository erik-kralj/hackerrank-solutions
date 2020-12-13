const assert = require("assert").strict

function solution(n) {
    const s = String(n)
    let c = 0
    for (let i = 0; i < s.length; i++) {
        const t = parseInt(s[i], 10)
        if (n % t === 0) c += 1
    }
    return c
}

assert.strictEqual(solution(12), 2)
assert.strictEqual(solution(1012), 3)
