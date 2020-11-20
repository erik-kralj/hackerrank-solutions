function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2 && v1 >= v2) {
        return "NO";
    }
    if (x2 > x1 && v2 >= v1) {
        return "NO";
    }
    let x1mut = x1;
    let x2mut = x2;
    for (let i = 0; i < 10000; i++) {
        x1mut += v1;
        x2mut += v2;
        if (x1mut === x2mut) {
            return "YES";
        } else if (x1 > x2 && x2mut > x1mut) {
            return "NO";
        } else if (x2 > x1 && x1mut > x2mut) {
            return "NO";
        }
    }
    return "NO";
}

console.log(kangaroo(0, 2, 5, 3), "NO");
console.log(kangaroo(21, 6, 47, 3), "NO")