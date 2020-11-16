const assert = require("assert").strict;

function countingValleys(steps, path) {
    let valleyCount = 0;
    let inValley = false;
    let elevation = 0;
    for (let i = 0; i < steps; i++) {
        const direction = path[i];
        if (direction === 'U') {
            elevation += 1;
        } else {
            elevation -= 1;
        }
        if (elevation === -1) {
            inValley = true;
        }
        if (elevation === 0 && inValley) {
            valleyCount += 1;
            inValley = false;
        }
    }
    return valleyCount;
}

assert.strictEqual(countingValleys(8, 'UDDDUDUU'), 1);
