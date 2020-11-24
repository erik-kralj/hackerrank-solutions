const assert = require("assert").strict;

function breakingRecords(scores) {
    let min, max, bestCount = 0, worstCount = 0;
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        if (i === 0) {
            min = max = score;
        } else {
            if (score > max) {
                bestCount++;
                max = score;
            }
            if (score < min) {
                worstCount++;
                min = score;
            }
        }
    }
    return [bestCount, worstCount];
}

assert.deepStrictEqual(breakingRecords([10,5,20,20,4,5,2,25,1]), [2,4]);
assert.deepStrictEqual(breakingRecords([3,4,21,36,10,28,35,5,24,42]), [4,0]);
