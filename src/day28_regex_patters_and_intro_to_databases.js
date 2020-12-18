let inputString = [
	'6',
	'riya riya@gmail.com',
	'julia julia@julia.me',
	'julia sjulia@gmail.com',
	'julia julia@gmail.com',
	'samantha samantha@gmail.com',
	'tanya tanya@gmail.com'
]
let currentLine = 0

function readLine() {
	return inputString[currentLine++]
}

function main() {
	const regexp = new RegExp(/[a-z.]+@gmail\.com/)
	new Array(parseInt(readLine(), 10))
		.fill()
		.map(() => {
			const split = readLine().split(' ')
			const name = split[0]
			const email = split[1]
			return { name, email }
		})
		.filter(x => regexp.test(x.email))
		.map(x => x.name)
		.sort()
		.forEach(x => console.log(x))
}

main()