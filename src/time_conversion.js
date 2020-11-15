import { strict as assert } from "assert";

function solution(s) {
    let hour = parseInt(s.substring(0, 2), 10);
    if (hour === 12) {
        hour = 0;
    }
    const isPM = s.substring(s.length - 2, s.length) === 'PM';
    if (isPM) {
        hour += 12;
    }
    const hourPrefix = hour < 10 ? "0" : "";
    return hourPrefix + hour.toString() + s.substring(2, s.length - 2);
}

assert.strictEqual(solution('12:01:00PM'), '12:01:00');
assert.strictEqual(solution('12:01:00AM'), '00:01:00');
assert.strictEqual(solution('07:05:45PM'), '19:05:45')