const assert = require("assert").strict

function solution(h, word) {
    let tallest = 0
    for (let i = 0; i < word.length; i++) {
        const idx = word[i].charCodeAt(0) - 97
        tallest = Math.max(h[idx], tallest)
    }
    return word.length * tallest * 1
}

assert.strictEqual(solution(
    "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"
        .split(" ")
        .map(x => parseInt(x, 10)),
    "abc"
), 9)

assert.strictEqual(solution(
    "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7"
        .split(" ")
        .map(x => parseInt(x, 10)),
    "zaba"
), 28)
