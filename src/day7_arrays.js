let line = 0
let lines = ["4", "1 4 3 2"]

function readLine() {
    return lines[line++]
}

function main() {
    const n = parseInt(readLine(), 10)
    const arr = readLine()
        .split(' ')
        .map(arrTemp => parseInt(arrTemp, 10))
    
    const rarr = []
    while(arr.length > 0) {
        rarr.push(arr.pop())
    }

    console.log(rarr.join(" "))
}

main();