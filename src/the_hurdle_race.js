const assert = require("assert").strict

function solution(k, height) {
    let highest = 0
    for (let i = 0; i < height.length; i++) {
        const cur = height[i]
        if (cur > highest) {
            highest = cur
        }
    }
    const diff = highest - k
    if (diff <= 0) return 0
    return diff
}

assert.strictEqual(solution(7, [2,5,4,5,2]), 0)
assert.strictEqual(solution(4, [1,6,3,5,2]), 2)
assert.strictEqual(solution(1, [1,2,3,3,2]), 2)
