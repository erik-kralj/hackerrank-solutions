let inputString = [
	'3',
	'5 2',
	'8 5',
	'2 2'
]
let currentLine = 0

function readLine() {
	return inputString[currentLine++]
}

function main() {
	const t = parseInt(readLine(), 10)

	for (let tItr = 0; tItr < t; tItr++) {
		const nk = readLine().split(' ')
		const n = parseInt(nk[0], 10)
		const k = parseInt(nk[1], 10)

		let max = 0
		for (let a = 1; a <= n; a++) {
			for (let b = a + 1; b <= n; b++) {
				const val = a & b
				if (val < k) {
					max = Math.max(max, a & b)
				}
			}
		}
		console.log(max)
	}
}

main()