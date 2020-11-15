const assert = require("assert").strict;

function solution(a, b) {
    let result = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            result[0] += 1;
        } else if (a[i] < b[i]) {
            result[1] += 1;
        }
    }
    return result;
}

assert.deepStrictEqual(solution([1,2,3], [3,2,1]), [1, 1])
