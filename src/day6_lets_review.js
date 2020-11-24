function processData(input) {
    const lines = input.split("\n");
    const N = parseInt(lines[0], 10);
    for (let j = 0; j < N; j++) {
        const line = lines[j+1];
        let odd = "", even = "";
        for (let i = 0; i < line.length; i++) {
            const chr = line[i];
            if (i % 2 === 0) {
                even += chr;
            } else {
                odd += chr;
            }
        }
        console.log(`${even} ${odd}`);
    }
}

processData("2\nHacker\nRank");