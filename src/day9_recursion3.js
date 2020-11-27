const assert = require("assert").strict

function factorial(n) {
    if (n <= 1) return n
    else return n * factorial(n-1);
}

assert.strictEqual(factorial(5), 120)
