const assert = require("assert").strict;

function sockMerchant(n, ar) {
    const map = new Map();

    for (let i = 0; i < n; i++) {
        const val = ar[i];
        if (map.has(val)) {
            map.set(val, map.get(val) + 1)
        } else {
            map.set(val, 1);
        }
    }

    let pairs = 0;
    for (const key of map.keys()) {
        const val = map.get(key);
        if (val > 1) {
            pairs += Math.floor(val / 2);
        }
    }
    return pairs;
}

assert.strictEqual(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]), 2);
assert.strictEqual(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);