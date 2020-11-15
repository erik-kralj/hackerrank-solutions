const assert = require("assert").strict;

function solution(arr) {
    let plus = 0, minus = 0, neutral = 0, total = arr.length;
    for (let i = 0; i < total; i++) {
        const val = arr[i];
        if (val > 0) plus++;
        else if (val < 0) minus++;
        else neutral++;
    }
    console.log((plus / total).toFixed(6));
    console.log((minus / total).toFixed(6));
    console.log((neutral / total).toFixed(6));
}

solution([-4, 3, -9, 0, 4, 1])