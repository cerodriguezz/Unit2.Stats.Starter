// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {"5"} the length of the array
 */
function getLength(numbers) {
  return numbers.length
  // TODO
}

/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {"15"} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0
  for (let i=0; i<numbers.length; i++) {
    sum+=numbers[i];
  }
  // TODO
}

/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {"3"} the mean of the numbers
 */
function getMean(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for(let i=0; i< numbers.length; i++) {
    sum+= numbers [i];   
  }
  return sum/numbers.length;
  // TODO
}

/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {number "0"} the smallest of the numbers
 */
function getMin(numbers) {
  if (numbers.length === 0) {
  return undefined;
  }
  let min = numbers [0];
  for (let i = 1; i< numbers.length; i++) {
    if (numbers[i]<min) {
      min = numbers[i];
    }
    return min;
  }
  
  // TODO
}

/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {number"5"} the largest of the numbers
 */
function getMax(numbers) {
  if (numbers.length === 0)
  return undefined;
}
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers [i];
  }
  return max;
}
  // TODO


/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {number"5","1"} the range of the numbers (max - min)
 */
function getRange(numbers) {
  const min = getmin (numbers);
  const max = getmax (numbers);
  if (min === undefined || max === undefined);
  return undefined;
}
return min - max;
  // TODO


/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {number["2","4"]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
}

/**
 * @param {number["1","2","3","4","5"]} numbers an array of integers
 * @returns {number["1","3","5"]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
}
