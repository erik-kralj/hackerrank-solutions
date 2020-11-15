function solution(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i))
    }
}

solution(6)