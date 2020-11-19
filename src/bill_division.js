const assert = require("assert").strict;

function bonAppetit(bill, k, b) {
    const sum = bill.reduce((p, c, i) => p + (i !== k ? c : 0), 0);
    const perPerson = sum / 2;
    const diff = Math.abs(perPerson - b);
    if (diff === 0) {
        return "Bon Appetit";
    } else {
        return diff.toString();
    }
}

assert.strictEqual(bonAppetit([3, 10, 2, 9], 1, 12), "5");
assert.strictEqual(bonAppetit([3, 10, 2, 9], 1, 7), "Bon Appetit");
