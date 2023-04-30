/*//.......Q1
console.log("question 1");
for (var i = 1; i <= 10; i++) {
    console.log(i);
};


//.......Q2
console.log("question 2");
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
};


//.......Q3
console.log("question 3");
var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
};


//.......Q4
console.log("question 4");
for (var i = 0; i <= 10; i += 2) {
    console.log(i);
};



//.......Q5
console.log("question 5");
var sum = 0;
for (var i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);



//.......Q6
console.log("question 6");
var numbers = [1, 2, 3, 4, 5];
var maxNumber = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
console.log(maxNumber);



//.......Q7
console.log("question 7");
var numbers = [1, 2, 3, 4, 5];
var minNumber = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}
console.log(minNumber);



//.......Q11
console.log("question 11");
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
var average = sum / numbers.length;
console.log(average);



//.......Q12
console.log("question 12");
function factorial(number) {
  var result = 1;
  for (var i = number; i >= 1; i--) {
    result *= i;
  }
return result;
}
var num = 5;
var factorialNum = factorial(num);
console.log(factorialNum);



//.......Q13
console.log("question 13");
function fibonacciSequence(limit) {
  var sequence = [0, 1];
  for (var i = 2; sequence[i - 1] + sequence[i - 2] <= limit; i++) {
  sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;}
  var limit = 10;
  var fibonacci = fibonacciSequence(limit);
  console.log(fibonacci.join(", "));



//.......Q14
console.log("question 14");
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;}}
  return true;}
  function printPrimes(limit) {
  for (var i = 2; i <= limit; i++) {
    if (isPrime(i))
    {console.log(i);}}}
  var limit = 20;
console.log(printPrimes(limit));



//.......Q15
console.log("question 15");
function printMultiplicationTable(number, range) {
  for (var i = 1; i <= range; i++) {var result = number * i;
    console.log(number + " x " + i + " = " + result);}}
var givenNumber = 5;
var givenRange = 10;
console.log(printMultiplicationTable(givenNumber, givenRange));




//.......Q16
console.log("question 16");
var twoDArray = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
for (var i = 0; i < twoDArray.length; i++) {
for (var j = 0; j < twoDArray[i].length; j++) {
console.log(twoDArray[i][j]);}}




//.......Q17
console.log("question 17");
var array = [1, 2, 3, 4, 5];
var j = 4

for(var a = array.length - 1; a >= 0; a--) 
{  
  console.log(array[a]);  
}



//.......Q18
console.log("question 18");
var array = [1,2,3,4,5]
for(var a = 2; a <5; a++) 
{  
  console.log(array[a]);  
}



//.......Q19
console.log("question 19");
var array = [1,2,3,4,5]
for(var a = 0; a <5; a=a+2)
{ 
  console.log(array[a]);
}
*/



//.......Q20
console.log("question 20");
var array = [1,2,3,4,5]
for (var a =0; a<array.length; a++ ){
  if (array[a]==4)
  console.log(true);
}



//.......Q21
console.log("question 21");
var array = [1,2,1,3,2,1];
var count = 0;
for(var i=0;i<array.length;i++){
if(array[i] == 1){
count++;
}
}
console.log("count",count);



