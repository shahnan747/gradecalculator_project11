let s1 = Number(prompt("Enter the mark of English:"));
let s2 = Number(prompt("Enter the mark of Computer:"));
let s3 = Number(prompt("Enter the mark of Maths:"));
let s4 = Number(prompt("Enter the mark of Science:"));
let s5 = Number(prompt("Enter the mark of Social Science:"));

let total_marks = s1 + s2 + s3 + s4 + s5;
alert("Total Marks : " + total_marks);

let average_mark = total_marks / 5;
alert("Average Mark : " + average_mark);

if (average_mark >= 90) {
    alert("Grade : A+");
}
else if (average_mark >= 80 && average_mark <= 89) {
    alert("Grade : A");
}
else if (average_mark >= 70 && average_mark <= 79) {
    alert("Grade : B");
}
else if (average_mark >= 60 && average_mark <= 69) {
    alert("Grade : C");
}
else if (average_mark >= 50 && average_mark <= 59) {
    alert("Grade : D");
}
else if (average_mark < 50) {
    alert("Grade : F")
}







