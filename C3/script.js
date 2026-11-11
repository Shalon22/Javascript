
// Student marks
let marks = [78, 45, -5, 92, 60, 101, 55, 38, 50, 80];

// Student names
let students = [
    "John", "Mary", "Peter", "Grace", "David",
    "Sarah", "James", "Ann", "Brian", "Lucy"
];

// Class summary variables
let validMarks = 0;
let passes = 0;
let fails = 0;
let total = 0;

let highest = -1;
let highestStudent = "";

let lowest = 101;
let lowestStudent = "";

// Loop through the marks
for (let i = 0; i < marks.length; i++) {
    let mark = marks[i];
    let studentName = students[i];

    // Skip invalid marks
    if (mark < 0 || mark > 100) {
        console.log(`${studentName}: Invalid mark, skipped`);
        continue;
    }

    validMarks++;
    total += mark;

    // Assign grades
    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 70) {
        grade = "B";
    } else if (mark >= 60) {
        grade = "C";
    } else if (mark >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Pass or fail
    let result;

    if (mark >= 50) {
        result = "Pass";
        passes++;
    } else {
        result = "Fail";
        fails++;
    }

    console.log(`${studentName}: ${mark} - Grade ${grade} (${result})`);

    // Find highest mark
    if (mark > highest) {
        highest = mark;
        highestStudent = studentName;
    }

    // Find lowest valid mark
    if (mark < lowest) {
        lowest = mark;
        lowestStudent = studentName;
    }
}

// Display class summary
console.log("--------------------");
console.log(`Valid marks: ${validMarks}`);
console.log(`Passed: ${passes}`);
console.log(`Failed: ${fails}`);

if (validMarks > 0) {
    let average = (total / validMarks).toFixed(1);

    console.log(`Average: ${average}`);
    console.log(`Highest mark: ${highest} - ${highestStudent}`);
    console.log(`Lowest mark: ${lowest} - ${lowestStudent}`);
}