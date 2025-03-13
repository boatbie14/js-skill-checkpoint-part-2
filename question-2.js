const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

let getScoreAbove50 = students.filter((student) => (student.score > 50 ? true : false));

let increaseScore = getScoreAbove50.map((student) => student.score * 1.1);

let totalScore = increaseScore.reduce((acc, cur) => acc + cur, 0);

let result = `Total score is ${totalScore.toFixed(1)}`;

console.log(result);
