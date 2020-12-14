const assert = require("assert").strict

function solution(input) {
    const arr = input.split("\n").map(x => x.split(" ").map(Number))
    const dateret = new Date(
        arr[0][2],
        arr[0][1] - 1,
        arr[0][0]
    )
    const datedue = new Date(
        arr[1][2],
        arr[1][1] - 1,
        arr[1][0]
    )
    if (datedue - dateret >= 0) {
        return 0
    }
    if (dateret > datedue &&
        dateret.getMonth() == datedue.getMonth() &&
        dateret.getFullYear() == datedue.getFullYear()) {
        const dayslate = dateret.getDate() - datedue.getDate()
        return 15 * dayslate
    }
    if (dateret.getMonth() > datedue.getMonth() &&
        dateret.getFullYear() == datedue.getFullYear()) {
        const monthslate = dateret.getMonth() - datedue.getMonth()
        return 500 * monthslate
    }
    if (dateret.getFullYear() > datedue.getFullYear()) {
        return 10000
    }
}

assert.strictEqual(solution("9 6 2015\n6 6 2015"), 45)
assert.strictEqual(solution("31 8 2004\n20 1 2004"), 3500)
assert.strictEqual(solution("1 1 2010\n31 12 2009"), 10000)
