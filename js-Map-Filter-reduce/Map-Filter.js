//______________JavaScript Tasks and Exercises______

//****************JavaScript Map filter,reduce************


//__________________ Question    1 _____________
console.log("___________Question 1__________");
function cleanNames(names) {
    return names.map(name => name.trim());
  }
  const names = [" injustice", " SuperMan", "Batman ", " flash "];
const cleanedNames = cleanNames(names);
console.log(cleanedNames);


// //__________________ Question    2 _____________
// console.log("___________Question 2__________");

// function convertToKm(miles) {
//     const totalDistanceInKilometers = miles.map(mile => mile * 1.60934).reduce((a, b) => a + b, 0);
//     return totalDistanceInKilometers;
//   }
//   const miles = [10, 20, 30, 40];
// const totalDistanceInKilometers = convertToKm(miles);
// console.log(totalDistanceInKilometers);


//__________________ Question    3 _____________
console.log("___________Question 3__________");

function squareAndAverage(arr) {
    const sumOfSquares = arr.map(num => num * num).reduce((a, b) => a + b, 0);
    const avg = sumOfSquares / arr.length;
    return avg;
  }
  const arr = [1, 2, 3, 4, 5];
const avg = squareAndAverage(arr);
console.log(avg);


//__________________ Question    4 _____________
console.log("___________Question 4__________");

function addFour(arr) {
    const plus4 = arr.map(num => num + 4);
    return plus4;
  }
const numbers3 = [1, 2, 3, 4, 5];
const plus4 = addFour(numbers3);
console.log(plus4);


//__________________ Question    5 _____________
console.log("___________Question 5__________");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenDoubleEvenSum = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(evenDoubleEvenSum);


//__________________ Question    6 _____________
console.log("___________Question 6__________");

const words = ['apple', 'banana', 'cherry', 'date'];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords);


//__________________ Question    7 _____________
console.log("___________Question 7__________");

const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
  ];
  const newHeros = heros.map((hero, index) => {
    const { name, ...rest } = hero;
    return { hero: name, ...rest, id: index };
  });
  console.log(newHeros);



//__________________ Question    8 _____________
console.log("___________Question 8__________");

  function filterWords(inputWords) {
    const filteredWords = inputWords.filter(word => word.length > 7);
    return filteredWords;
  }
  const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
  const filteredWords = filterWords(inputWords);
  console.log(filteredWords);
  


//__________________ Question    9 _____________
console.log("___________Question 9__________");

const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter odd numbers9
const oddNumbers = numbers9.filter(num => num % 2 !== 0);
console.log("Odd numbers9:", oddNumbers);

// Filter numbers9 divisible by 2 or 5
const divisibleBy2Or5 = numbers9.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Numbers9 divisible by 2 or 5:", divisibleBy2Or5);

// Filter numbers9 divisible by 3 and then square them
const divisibleBy3Squared = numbers9.filter(num => num % 3 === 0).map(num => num ** 2);
console.log("Numbers9 divisible by 3 and squared:", divisibleBy3Squared);

// Sum of squares of numbers9 divisible by 5
const sumOfSquaresDivisibleBy5 = numbers9.filter(num => num % 5 === 0).map(num => num ** 2)
.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of squares of numbers9 divisible by 5:", sumOfSquaresDivisibleBy5);


//__________________ Question    10 _____________
console.log("___________Question 10__________");

let num10 = [11, 22, 33, 46, 75, 86, 97, 98];
// filter even numbers and square them
let squaredEvenNum10 = num10.filter(num => num % 2 === 0).map(num => num * num);
// calculate the sum of all elements in num10
let sumOfNum10 = num10.reduce((accumulator, currentValue) => accumulator + currentValue);
// display the results
console.log("squaredEvenNum10: ", squaredEvenNum10);
console.log("Sum of array elements: ", sumOfNum10);


//__________________ Question    11 _____________
console.log("___________Question 11__________");

let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];

let filteredCountries = countries.filter(country => !country.startsWith('U') && !country.startsWith('R'));
let uppercaseCountries = filteredCountries.map(country => country.toUpperCase());
let totalCharacters = uppercaseCountries.reduce((acc, country) => acc + country.length, 0);
console.log(filteredCountries);
console.log(uppercaseCountries);
console.log(totalCharacters);


//__________________ Question    12 _____________
console.log("___________Question 12__________");

const numbers12 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
const greaterThan50 = numbers12.filter(num => num > 50);
console.log(greaterThan50);







