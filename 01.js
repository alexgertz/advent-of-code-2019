const fs = require('fs');
const data = fs.readFileSync('./inputs/01').toString().split('\n');

const mass = num =>  Math.floor(parseInt(num) / 3) - 2;
const massPositive = num => mass(num) >= 0 ? mass(num) : 0;
const hasPositiveMass = arr => arr.some(num => massPositive(num));

const handle = (data) => {
  const masses = data.map(mass);
  return masses.reduce((a, b) => a + b);
};


const handlePartTwo = (data) => {
  let total = 0;

  while (hasPositiveMass(data)) {
    data = data.map(massPositive);
    total += data.reduce((a, b) => a + b);
  }

  return total;
}



console.log(handle(data));
console.log(handlePartTwo(data));