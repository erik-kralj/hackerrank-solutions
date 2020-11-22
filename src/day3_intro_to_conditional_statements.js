const assert = require("assert").strict;

function solution(input) {
	const N = parseInt(input, 10);
	if (N % 2 !== 0) {
		return "Weird";
	} else {
		if (N >= 2 && N <= 5) {
			return "Not Weird";
		}
		if (N >= 6 && N <= 20) {
			return "Weird";
		}
		if (N > 20) {
			return "Not Weird";
		}
	}
}

assert.strictEqual(solution("3"), "Weird");
assert.strictEqual(solution("24"), "Not Weird");

