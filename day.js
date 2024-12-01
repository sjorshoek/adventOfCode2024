//get all lines from html in an array and then removes all empty strings 
const lines = document.getElementsByTagName('pre')[0].innerHTML.split('\n').filter(line => line.trim() !== '');

let arrayLeft = [];
let arrayRight = [];

// Loop through each line
lines.forEach(line => {
  const [num1, num2] = line.split(/\s{3}/); //split on 3 spaces exactly 
  arrayLeft.push(num1);
  arrayRight.push(num2);
});

// convert to Numbers because they are still strings
arrayLeft = arrayLeft.map(Number)
arrayRight = arrayRight.map(Number)

// Sort both arrays from smallest to biggest
arrayLeft.sort((a, b) => a - b);
arrayRight.sort((a, b) => a - b);

let totalDistance = 0;

// Loop through both arrays
for (let i = 0; i < arrayLeft.length; i++) {
  const distance = Math.abs(arrayLeft[i] - arrayRight[i]); // Calculate difference between 2 numbers
  totalDistance += distance; // Add the difference to the total
};

console.log(totalDistance);

// count occurrences of each number in arrayRight
const count = arrayRight.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

let totalSimilarityScore = 0;
// calculate total similarity score
arrayLeft.forEach(num => {
  totalSimilarityScore += num * (count[num] || 0);
});

console.log(totalSimilarityScore);