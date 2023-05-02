//____________JavaScript Exercises_____________

//............Functions.............

//__________________Question    1 _____________
console.log("Question___________1___________");

function  name(string){
var arr = string.split(" ");
return  arr
}
console.log(name ("Orange Jordan"))



//__________________Question    2 _____________
console.log("Question___________2___________");

function name2(string){
var numHidden = string.slice(0,7)
var star =numHidden.replace(numHidden,"*******")
var number = star + string.slice(7)
console.log(number)
}
name2("077680777")


//__________________Question    3 _____________
console.log("Question___________3___________");

function email(string){
    var arr = string.split("@")
    var email1 = arr[0].slice(0,6) + "..." + "@" + arr[1]
    console.log(email1)
}
email("orange_academy@orange.jo")



//__________________Question    4+5 _____________
console.log("Question___________4+5___________");

function text(string){
    var newArr =[];
    var arr =string.split(" ")
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1) )
        
    }

    console.log(newArr.join(' '))

}
text("coding academy by orange")




//__________________Question    6 _____________
console.log("Question___________6___________");

function flipNumber(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      return NaN;
    }
  
    const reversedNumber = parseInt(number.toString().split('').reverse().join(''));
    return reversedNumber;
  }
  const number = 92485;
const flippedNumber = flipNumber(number);

console.log(flippedNumber);



//__________________Question    7 _____________
console.log("Question___________7___________");

function swap ( num1, num2){
var num3 = num1 ; 
num1=num2;
num2=num3;
return " a = "+num1 +"    "+"b = " +num2}
var a=4 , b=5;

console.log(swap(a,b));




//__________________Question    8 _____________
console.log("Question___________8___________");

function removeCharacter(str, index) {
if (typeof str !== 'string' || typeof index !== 'number' || index < 0 || index >= str.length) {
  return str;
}
const result = str.slice(0, index) + str.slice(index + 1);
return result;
  }
  const text8 = "Orange";
const indexToRemove = 3;
const modifiedText = removeCharacter(text8, indexToRemove);
console.log(modifiedText);



//__________________Question    9 _____________
console.log("Question___________9___________");

function mergeStrings(str1, str2) {
if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length === 0 || str2.length === 0) {
  return "";
}

const mergedString = str1.slice(1) + str2.slice(1);
return mergedString;
  }
  const string1 = "lora";
const string2 = "inge";
const mergedString = mergeStrings(string1, string2);

console.log(mergedString);


//__________________Question    10 _____________
console.log("Question___________10___________");

function checkCharacterAppearance(character, str) {
    if (typeof character !== 'string' || typeof str !== 'string' || character.length !== 1) {
      return false; 
    }
  
    const firstChar = str.charAt(0);
    const lastChar = str.charAt(str.length - 1);
  
    return firstChar === character || lastChar === character;
  }
  const charToCheck = "o";
const stringToCheck = "orange";
const appearsInFirstOrLast = checkCharacterAppearance(charToCheck, stringToCheck);

console.log(appearsInFirstOrLast);



//__________________Question    12 _____________
console.log("Question___________12___________")

function reorderAlphabetically(str) {
    if (typeof str !== 'string') {
      return "";
    }
  
    const sortedStr = str.split('').sort().join('');
    return sortedStr;
  }
const inputString = "Orange";
const reorderedString = reorderAlphabetically(inputString);

console.log(reorderedString);

//____________ End JavaScript Exercises_____________



//                -----------JavaScript Tasks and Exercises----------

//............JavaScript Functions

//__________________Question    1 _____________
console.log("Question___________1___________")

function findSmallest(array) {
if (!Array.isArray(array) || array.length === 0) {
  return undefined;
}
let smallest = array[0];
for (let i = 1; i < array.length; i++) {
if (array[i] < smallest) {
smallest = array[i];
}}
return smallest;
}

console.log(findSmallest([30, 45, 60, 7]));



//__________________Question    2 _____________
console.log("Question___________2___________")

function alphabeticalOrder(str) {
if (typeof str !== 'string') {
  return "";
}
const sortedStr = str.split('').sort().join('');
return sortedStr;
}
console.log(alphabeticalOrder('hello'));



//__________________Question    3 _____________
console.log("Question___________3___________")

function factorial(n) {
if (typeof n !== 'number' || n < 0) {
  return undefined;
}
if (n === 0 || n === 1) {
  return 1;
}
let result = 1;
for (let i = 2; i <= n; i++) {
  result *= i;
}
return result;
}
console.log(factorial(8));



//__________________Question    4 _____________
console.log("Question___________4___________")

function oddOrEven(number) {
if (typeof number !== 'number') {
  return "Invalid input";
}
if (number % 2 === 0) {
  return "Even";
} else {
  return "Odd";
}
}
console.log(oddOrEven(9));


//__________________Question    5 _____________
console.log("Question___________5___________")

function evenNum(array) {
if (!Array.isArray(array)) {
  return [];
}
const evenArray = array.filter(num => num % 2 === 0);
return evenArray;
}
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));



//__________________Question    6 _____________
console.log("Question___________6___________")

function numbersOnly(array) {
if (!Array.isArray(array)) {
  return [];
}
const nonStringArray = array.filter(item => typeof item !== 'string');
return nonStringArray;
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']));



//__________________Question    7 _____________
console.log("Question___________7___________")

function addUp(number) {
if (typeof number !== 'number' || number < 0) {
  return undefined;
}
let sum = 0;
for (let i = number; i >= 0; i--) {
  sum += i;
}
return sum;
}
console.log(addUp(8));



//__________________Question    8 _____________
console.log("Question___________8___________")

function minMaxLengthAverage(array) {
if (!Array.isArray(array)) {
  return [];
}
const min = Math.min(...array);
const max = Math.max(...array);
const length = array.length;
const average = array.reduce((acc, curr) => acc + curr, 0) / length;
const resultArray = [min, max, length, average];
return resultArray;
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));



//__________________Question    9 _____________
console.log("Question___________9___________")

function romanNumbers(number) {
if (typeof number !== 'number' || number <= 0) {
  return "Invalid input";
}
const romanNumeralMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
let result = "";
for (let key in romanNumeralMap) {
  while (number >= romanNumeralMap[key]) {
    result += key;
    number -= romanNumeralMap[key];
  }
}
return result;
}
console.log(romanNumbers(1989));



//__________________Question    10 _____________
console.log("Question___________10___________")

function countWords(sentence) {
if (typeof sentence !== 'string') {
  return 0;
}
const words = sentence.trim().split(/\s+/);
return words.length;
}
console.log(countWords('hello from CodingAcademy!'));


//__________________Question    11 _____________
console.log("Question___________11___________")

function multiplyByLength(array) {
if (!Array.isArray(array)) {
  return []; 
}
const length = array.length;
const resultArray = array.map(element => element * length);
return resultArray;
}
console.log(multiplyByLength([4, 2, 5]));


//__________________Question    13 _____________
console.log("Question___________13___________")

function doubleChar(str) {
  if (typeof str !== 'string') {
    return '';
  }
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
return result;
}
console.log(doubleChar('Coding'));



//__________________Question    14 _____________
console.log("Question___________14___________")

function findIndex(array, element) {
  if (!Array.isArray(array)) {
    return -1;
  }
  return array.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));



//__________________Question    15 _____________
console.log("Question___________15___________")

function getAbsSum(array) {
if (!Array.isArray(array)) {
  return 0;
}
let absSum = 0;
for (let i = 0; i < array.length; i++) {
  absSum += Math.abs(array[i]);
}
return absSum;
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); // Output: 23


//                -----------End JavaScript Tasks and Exercises----------
