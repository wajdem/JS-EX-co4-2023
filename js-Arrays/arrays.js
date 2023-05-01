//                   ----------JavaScript Exercises-------------
//--------Arrays--------//
//........question 1......//

const array_1 =["Coding", "Academy", "By", "Orange"];
array_1.push("Jordan");
console.log(array_1);
console.log("________________________")



array_1.pop();
array_1.pop();
array_1.pop();
console.log(array_1);
console.log("________________________")



array_1.unshift("Welcome", "To");
array_1.push("By", "Orange");
console.log(array_1);
console.log("________________________")




const array2 =["Coding", "Academy", "By", "Orange"];
array2.shift(2);
console.log(array2);
console.log("________________________")




/*let array_5 =" "
array_5.forEach(myfunction);
function myfunction(item,index){
    array_5 += item + " "
}
console.log(array_5);*/
console.log("________________________")




const array3 =["Coding", "Academy", "By", "Orange"];
array3.splice(1,2)
console.log(array3);
console.log("________________________")



//........question 2......//


//----------A
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop()
console.log(vegetables);
console.log("________________________")



//----------B
fruit.shift()
console.log(fruit);
console.log("________________________")


//----------C
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log(fruit.slice(2,3));
console.log("________________________")


//----------D
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
let numberToAdd = 5;
fruit.push(numberToAdd);
console.log(fruit);
console.log("________________________")



//----------E
console.log(vegetables.push());
console.log("________________________")



//----------F
let numberToAdd2 = 9;
vegetables.push(numberToAdd2);
console.log(vegetables);
console.log("________________________")



//----------G
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
let food = fruit.concat(vegetables);
console.log(food)
console.log("________________________")




//----------H
food.splice(2, 2);
console.log(food);
console.log("________________________")



//----------I
vegetables.reverse();
console.log(vegetables);
console.log("________________________")


//----------G
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.join(" ");
console.log(vegetables);




//                -----------JavaScript Tasks and Exercises----------

//............1-JavaScript Arrays
//---------question   1.........

let number =[1,2,3,4,5];
for (i = 1; i <= 6; i +=1 )
{
    console.log(i);
}





//---------question   2.........
console.log("_______Question_______2")

let number2 =[1,2,3,4,5];
for (i = 2; i <= 10; i +=2 )
{
    console.log(i);
}




//---------question   3.........
console.log("_______Question_______3")

const number3 =[1,2,3,4,5]
const a= number3.filter((number) => number % 2 === 0)
console.log(a);



//---------question   4.........
console.log("_______Question_______4")

const number4 = [1, 2, 3, 4, 5];
const sum = number4.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);



//---------question   5.........
console.log("_______Question_______5")

const array = ["apple", "cherry", "banana",];
const y = array.sort();
console.log(y);


//---------question   6.........
console.log("_______Question_______6")

const array6 = ["apple", "cherry", "banana",];
const n = array6.reverse()
console.log(n);



//---------question   7.........
console.log("_______Question_______7")

let number7 =[1,2,3];
let number_7 =[4,5,6];
console.log(number7.concat(number_7));


//---------question   8.........
console.log("_______Question_______8")

const number8 =[1,2,3,4,5,6];
console.log(number8.slice(2,4));



//---------question   9.........
console.log("_______Question_______9")

const number9 =[1,2,3,4,5]
console.log(number9.splice(1,1))


//---------question   10.........
console.log("_______Question_______10")

const number10 =[1,2,3,4,5]
console.log(number10.indexOf(1,2,3,4,5));



//---------question   11.........
console.log("_______Question_______11")

const number11 =[1,2,3,4,5]
console.log(number11.join())



//---------question   12.........
console.log("_______Question_______12")

/*const array12 =[1,2,3,4,5]

const array_12 = array12.split("");

console.log(array_12);*/


//---------question   13.........
console.log("_______Question_______13")

const array13 = [1, 2, 3, 4, 5];
const length = array13.length;
console.log(length);



//---------question   14.........
console.log("_______Question_______14")

const array14 = [1, 2, 3, 4, 5];

for (const element of array14) {
  console.log(element);
}


//---------question   15.........
console.log("_______Question_______15")

const array15 = [1, 2, 3, 4, 5];
for (const index in array15) {
  console.log(index);
}


//---------question   16.........
console.log("_______Question_______16")

const obj1 = [1, 2, 3, 4, 5];
const obj2 = { name: "wajdi", age: 23 };
console.log(Array.isArray(obj1));


//---------question   17.........
console.log("_______Question_______17")

const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray);


//---------question   18.........
console.log("_______Question_______18")

const newArray18 = Array.of(1, 2, 3);
console.log(newArray18);


//---------question   19.........
console.log("_______Question_______19")

const array19 = [1, 2, 3, 4, 5];
console.log(array19.fill(0,3));


//---------question   20.........
console.log("_______Question_______20")

const array20 = [1, 2, 3, 4, 5];
console.log(array20.fill(1,3));






















