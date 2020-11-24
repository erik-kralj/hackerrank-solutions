function main() {
    const n = parseInt(readLine(), 10);
    for (let i = 1; i <= 10; i++) {
        const result = n * i;
        console.log(`${n} x ${i} = ${result}`);
    }
}

function readLine() {
    return "2";
}

main();