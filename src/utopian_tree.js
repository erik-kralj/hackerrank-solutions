const assert = require("assert").strict

function solution(n) {
	let height = 0, spring = true
	for (; 0 <= n; n--) {
		if (spring) height += 1
		else height *= 2
		spring = !spring
	}
	return height
}

assert.strictEqual(solution(0), 1)
assert.strictEqual(solution(1), 2)
assert.strictEqual(solution(4), 7)
assert.strictEqual(solution(3), 6)

