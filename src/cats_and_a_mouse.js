
function catAndMouse(x, y, z) {
    const catA = Math.abs(x - z);
    const catB = Math.abs(y - z);

    if (catA < catB) {
        return 'Cat A';
    } else if (catB < catA) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }
}

