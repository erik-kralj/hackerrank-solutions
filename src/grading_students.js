
function gradingStudents(grades) {
    return grades.map(grade => {
        const remainder = 5 - grade % 5;
        if (remainder < 3) {
            const finalGrade = grade + remainder;
            if (finalGrade < 40) {
                return grade;
            } else {
                return finalGrade;
            }
        }
        return grade;
    });
}

console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([84, 29, 57]));