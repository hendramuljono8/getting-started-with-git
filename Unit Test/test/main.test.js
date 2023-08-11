const findStudentScoreByName = require('../src/main');

// Define some test data
const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

// Begin a group of tests for the findStudentScoreByName function
describe('findStudentScoreByName', () => {
  
  // Define a test for when a valid student name is given
  it('returns the correct score when a valid student name is given', () => {
    // Call the function with test data and store the result
    const result = findStudentScoreByName(students, "Natalee Vargas");
    
    // Check that the result is what you expect
    expect(result).toBe(9.2);
  });
});

describe('findStudentScoreByName', () => {
  // Define a test for when an invalid student name is given
  it('returns null when an invalid student name is given', () => {
    // Call the function with test data and store the result
    const result = findStudentScoreByName(students, "Terry Peters");
    
    // Check that the result is what you expect
    expect(result).to.equal(null);
  });
});




