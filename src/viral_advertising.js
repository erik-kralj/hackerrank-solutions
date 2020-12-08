const assert = require("assert").strict

function solution(n) {
	let comulative = 0, shared = 5
	for (; 0 < n; n--) {
		comulative += Math.floor(shared / 2)
		shared = Math.floor(shared / 2) * 3
	}
	return comulative
}

assert.strictEqual(solution(5), 24)
assert.strictEqual(solution(3), 9)

