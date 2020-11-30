const assert = require("assert").strict;

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    calculate() {
        const sum = this.scores.reduce((a,b) => a+b, 0);
        const avg = sum / this.scores.length;
        if (90 <= avg && avg <= 100) return "O";
        else if (80 <= avg && avg < 90) return "E";
        else if (70 <= avg && avg < 80) return "A";
        else if (55 <= avg && avg < 70) return "P";
        else if (40 <= avg && avg < 55) return "D";
        else if (avg < 40) return "T";
        else throw new Error("Something went terribly wrong.");
    }
}

assert.strictEqual(new Student(
    "Aakansha",
    "Doshi",
    "7825621",
    [31,32,34,35]
).calculate(), "T");