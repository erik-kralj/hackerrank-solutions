function solution(arr) {
    const arr2 = arr.slice().sort((a, b) => a - b);
    let min = 0, max = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (i < 4) {
            min += arr2[i];
        }
        if (i >= arr2.length - 4) {
            max += arr2[i];
        }
    }
    console.log(min + " " + max);
}

solution([1, 3, 5, 7, 9]);