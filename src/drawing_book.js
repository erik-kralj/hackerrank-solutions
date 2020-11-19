const assert = require("assert").strict;

function pageCount(n, p) {
    const nturns = Math.floor(n / 2);
    const pturns = Math.floor(p / 2);
    const diff = nturns - pturns;
    if (diff < pturns) {
        return diff;
    }
    return pturns;
}

assert.strictEqual(pageCount(5, 3), 1);
assert.strictEqual(pageCount(6, 2), 1);
assert.strictEqual(pageCount(5, 4), 0);