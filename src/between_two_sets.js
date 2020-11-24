function getTotalX(a, b) {
    // Write your code here
    let between = [];
    for (let i = 1; i <= 100; i++) {
        let aYes = true, bYes = true;
        for (let ia = 0; ia < a.length; ia++) {
            const val = a[ia];
            if (i % val !== 0) {
                aYes = false;
            }
        }
        for (let ib = 0; ib < b.length; ib++) {
            const val = b[ib];
            if (val % i !== 0) {
                bYes = false;
            }
        }
        if (aYes && bYes) {
            between.push(i);
        }
    }
    return between.length;
}

// console.log(getTotalX([2,6],[24,36]));
console.log(getTotalX([2,4],[16,32,96]));
