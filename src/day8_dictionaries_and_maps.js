function processData(input) {
    const arr = input.split("\n")
    const n = parseInt(arr[0], 10)
    const dic = new Map()
    for (let i = 0; i < n; i++) {
        const personarr = arr[i+1].split(" ")
        const name = personarr[0]
        const phone = personarr[1]
        dic.set(name, phone)
    }
    for (let i = 0; i < arr.length - n - 1; i++) {
        const q = arr[i+1+n]
        if (dic.has(q)) console.log(`${q}=${dic.get(q)}`)
        else console.log("Not found")
    }
} 

processData("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry")