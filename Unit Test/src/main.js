function findStudentScoreByName(students, name) {
    for (let i = 0; i < students.length; i++) {
      if (students[i].name === name) {
        return students[i].score;
      }
    }
    return null;
  }
  
  module.exports = findStudentScoreByName;
  