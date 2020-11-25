const assert = require("assert").strict

function pickingNumbers(l) {
    let max = 0
    for (let i of l) {
        let c = l.filter(x => x === i).length
        let d = l.filter(x => x === (i - 1)).length
        c = c + d
        if (c > max) max = c
    }
    return max
}

assert.strictEqual(pickingNumbers([1,1,2,2,4,4,5,5,5]), 5)
assert.strictEqual(pickingNumbers([4,6,5,3,3,1]), 3)
assert.strictEqual(pickingNumbers([1,2,2,3,1,2]), 5)
assert.strictEqual(pickingNumbers([7,12,13,19,17,7,3,18,9,18,13,12,3,13,7,9,18,9,18,9,13,18,13,13,18,18,17,17,13,3,12,13,19,17,19,12,18,13,7,3,3,12,7,13,7,3,17,9,13,13,13,12,18,18,9,7,19,17,13,18,19,9,18,18,18,19,17,7,12,3,13,19,12,3,9,17,13,19,12,18,13,18,18,18,17,13,3,18,19,7,12,9,18,3,13,13,9,7]), 30)
assert.strictEqual(pickingNumbers([14,18,17,10,9,20,4,13,19,19,8,15,15,17,6,5,15,12,18,2,18,7,20,8,2,8,11,2,16,2,12,9,3,6,9,9,13,7,4,6,19,7,2,4,3,4,14,3,4,9,17,9,4,20,10,16,12,1,16,4,15,15,9,13,6,3,8,4,7,14,16,18,20,11,20,14,20,12,15,4,5,10,10,20,11,18,5,20,13,4,18,1,14,3,20,19,14,2,5,13]),15)
