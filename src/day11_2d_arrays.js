const assert = require("assert").strict;

function solution(a) {
    let max = -9 * 7;
    for (let y = 0; y < a.length - 2; y++) {
        const b = a[y];
        const c = a[y+1];
        const d = a[y+2];
        for (let x = 0; x < b.length - 2; x++) {
            const sum = b[x] +
                b[x+1] +
                b[x+2] +
                c[x+1] +
                d[x] +
                d[x+1] +
                d[x+2];
            max = Math.max(sum, max);
        }
    }
    return max;
}

assert.strictEqual(solution([
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]), 19);

assert.strictEqual(solution([
    [-1,-1,0,-9,-2,-2],
    [-2,-1,-6,-8,-2,-5],
    [-1,-1,-1,-2,-3,-4],
    [-1,-9,-2,-4,-4,-5],
    [-7,-3,-3,-2,-9,-9],
    [-1,-3,-1,-2,-4,-5]
]), -6);
