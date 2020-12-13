function processData(input) {
    input.split("\n").map(Number).forEach((n, i) => {
        if (i === 0) return
        if (n == 1) {
            console.log("Not prime")
            return
        }
        for (let i = 2; i * i <= n; i++){
            if (n % i == 0) {
                console.log("Not prime")
                return
            }
        }
        console.log("Prime")
    })
} 