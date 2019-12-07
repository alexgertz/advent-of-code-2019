const start = 357253;
const end = 892942;

let passwordCount = 0;


for (let i = start; i < end; i++) {
  const numbers = i.toString().split('');
  const isIncreasing = numbers.every((number, index) => number <= (numbers[index+1] || 10));
  const hasDoubles = numbers.some((number, index) => number == (numbers[index+1] || 0));

  if (isIncreasing && hasDoubles) passwordCount++;
}

console.log(passwordCount);