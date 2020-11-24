const assert = require("assert").strict;

function birthday(s, d, m) {
    let matches = 0;
    for (let i = 0; i < s.length; i++) {
        const sum = s.slice(i, i+m).reduce((a,b) => a+b);
        if (sum === d) {
            matches++;
        }
    }
    return matches;
}

assert.strictEqual(birthday([1,2,1,3,2], 3, 2), 2);
assert.strictEqual(birthday([1,1,1,1,1,1], 3, 2), 0);