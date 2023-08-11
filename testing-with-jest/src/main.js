function findHighestScoringStudent(students) {
let highestScoreStudent = students[0];
for(let i = 0; i < students.length; i++) {
    if(students[i].score > highestScoreStudent.score) {
        highestScoreStudent = students[i];
    }
}
return highestScoreStudent;
}

const mathStudents = [
    { name: "Shane Carey", score: 9.5 },
  { name: "Catarina Lima", score: 9.7 },
  { name: "Rebecca Mills", score: 8.7 },
];

console.log(findHighestScoringStudent(mathStudents));

module.exports = findHighestScoringStudent;