function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const sumApples = apples.reduce((p, c) => {
        const pos = c + a;
        if (pos >= s && pos <= t) {
            return p + 1;
        }
        return p;
    }, 0);

    const sumOranges = oranges.reduce((p, c) => {
        const pos = c + b;
        if (pos >= s && pos <= t) {
            return p + 1;
        }
        return p;
    }, 0);

    console.log(sumApples.toString());
    console.log(sumOranges.toString());
    // return sumApples + sumOranges;
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));