const assert = require("assert").strict;

function dayOfProgrammer(year) {
    const isLeapYear = (year >= 1919)
        ? ((year % 400 === 0) ||
            (year % 4 === 0 && year % 100 !== 0))
        : (year % 4 === 0);

    const sum = 31 + (isLeapYear ? 29 : 28) + 31 + 30 + 31 + 30 + 31 + 31 + (year === 1918 ? -13 : 0);
    const day = 256 - sum;
    const dayStr = day.toString();
    const yearStr = year.toString();
    return "0".repeat(2).substring(0, 2 - dayStr.length) + dayStr + ".09." + "0".repeat(4).substring(0, 4 - yearStr.length) + yearStr;
}

assert.strictEqual(dayOfProgrammer(2016), "12.09.2016");
assert.strictEqual(dayOfProgrammer(1800), "12.09.1800");
assert.strictEqual(dayOfProgrammer(1918), "26.09.1918");