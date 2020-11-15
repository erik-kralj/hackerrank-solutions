const assert = require("assert").strict;

function solution(arr) {
    let sumltr = 0, sumrtl = 0;
    for (let y = 0; y < arr.length; y++) {
        const row = arr[y];
        for (let x = 0, xr = row.length - 1; x < row.length; x++, xr--) {
            const cell = row[x];
            const cellr = row[xr];
            if (x === y) {
                sumltr += cell;
                sumrtl += cellr;
            }
        }
    }
    return Math.abs(sumltr - sumrtl);
}

assert.strictEqual(solution([[1, 2, 3], [4, 5, 6], [9, 8, 9]]), 2);
