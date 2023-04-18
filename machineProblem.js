function computeGrade(name, cp, s1, s2, s3, fe) {
  
  var cp_avg = (cp[0] + cp[1] + cp[2] + cp[3] + cp[4]) / 5;

  var s_avg = (s1 + s2 + s3) / 3;

  var grade = cp_avg * 0.3 + s_avg * 0.3 + fe * 0.4;

  var letter_grade;
  if (grade >= 90) {
    letter_grade = "A";
  } else if (grade >= 80) {
    letter_grade = "B";
  } else if (grade >= 70) {
    letter_grade = "C";
  } else if (grade >= 60) {
    letter_grade = "D";
  } else {
    letter_grade = "F";
  }

  return {
    name: name,
    cp: cp_avg.toFixed(2),
    s: s_avg.toFixed(2),
    grade: grade.toFixed(2),
    letter_grade: letter_grade
  };
}

var students = [];
for (var i = 0; i < 5; i++) {
  var name, cp = [], s1, s2, s3, fe;
  name = prompt("Enter the name of student #" + (i+1) + ":");
  for (var j = 0; j < 5; j++) {
    cp[j] = parseFloat(prompt("Enter the Enabling Assessment " + (j+1) + " for Class Participation:"));
  }
  s1 = parseFloat(prompt("Enter the first Summative Assessment:"));
  s2 = parseFloat(prompt("Enter the second Summative Assessment:"));
  s3 = parseFloat(prompt("Enter the third Summative Assessment:"));
  fe = parseFloat(prompt("Enter the Final Examination grade:"));
  students.push(computeGrade(name, cp, s1, s2, s3, fe));
}


console.table(students, ["name", "cp", "s", "grade", "letter grade"]);