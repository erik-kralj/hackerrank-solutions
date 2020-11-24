const assert = require("assert").strict;

function migratoryBirds(arr) {
    let max = 0, type = 0;
    for (let i = 1; i <= 5; i++) {
        const count = arr.filter(x => x === i).length;
        if (count > max) {
            max = count;
            type = i;
        }
    }
    return type;
}

assert.strictEqual(migratoryBirds([1,4,4,4,5,3]), 4);
assert.strictEqual(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]), 3);
