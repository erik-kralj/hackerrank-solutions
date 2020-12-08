const assert = require("assert").strict

function solution(a) {
    let b = a.slice()
    let swaps = 0
    let sort = true
    while(sort) {
        sort = false
        for (let i = 0; i < b.length - 1; i++) {
            let i1 = b[i], i2 = b[i+1]
            if (i1 > i2) {
                b[i] = i2
                b[i+1] = i1
                swaps += 1
                sort = true
            }
        }
    }
    // console.log("Array is sorted in " + swaps + " swaps.")
    // console.log("First Element: " + b[0])
    // console.log("Last Element: " + b[b.length - 1])
    return b
}

assert.deepStrictEqual(solution([3,2,1]), [1,2,3])