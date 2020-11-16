const assert = require("assert").strict;

function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const sum = keyboards[i] + drives[j];
            if (sum > max && sum <= b) {
                max = sum;
            }
        }
    }
    return max;
}

assert.strictEqual(getMoneySpent([40, 50, 60], [5, 8, 12], 60), 58);
assert.strictEqual(getMoneySpent([3, 1], [5, 2, 8], 10), 9);