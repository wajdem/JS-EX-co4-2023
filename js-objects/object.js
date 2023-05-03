// _________________________JavaScript Exercises_______________

//...........Objects..........
//__________________Question    1 _____________
console.log("__________________Question1____________")

function getObjectProperties(obj) {
  return Object.keys(obj);
}
const myObject = {
  name: 'wajdi',
  age: 25,
  city: 'jordan'
};

const properties = getObjectProperties(myObject);
console.log(properties);



//__________________       Question    2 _____________
console.log("__________________Question2____________")

function countObjectProperties(obj) {
  const properties = Object.keys(obj);
  return properties.length;
}
const myObject2 = {
  name: 'wajdi',
  age: 25,
  city: 'jordan'
};
const count = countObjectProperties(myObject2);
console.log(count);


//__________________       Question    3 _____________
console.log("__________________Question3____________")

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
const object1 = { a: 6, b: 7 };
const object2 = { c: 5, d: 3 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);


//__________________       Question    5 _____________
console.log("__________________Question5____________")

function filterNonNullProperties(obj) {
  const filteredObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] !== null) {
      filteredObj[prop] = obj[prop];
    }}
return filteredObj;}
const myObject5 = {
  name: 'wajdi',
  age: 23,
  city: null,
  car: 'Corvette',
};
const filteredObject = filterNonNullProperties(myObject5);
console.log(filteredObject);



//__________________       Question    6 _____________
console.log("__________________Question6____________")

function sortObjectPropertyNames(obj) {
  const propertyNames = Object.keys(obj);
  return propertyNames.sort();
}
const myObject6 = {
    name: 'wajdi',
    age: 25,
    city: 'jordan'
};
const sortedPropertyNames = sortObjectPropertyNames(myObject);
console.log(sortedPropertyNames);

// _________________________End JavaScript Exercises_______________
console.log("_____________________________________________________");


// _________________________JavaScript Tasks and Exercises_______________

//...........Objects..........

//__________________       Question    1 _____________
console.log("__________________Question1____________")

const person1 = {
  name: "Adam",
  age: 25,
  gender: "male"
};
console.log(person1.name, person1.age, person1.gender);


//__________________       Question    2 _____________
 console.log("__________________Question2____________")

 const person2 = {
  name: "Adam",
  age: 25
};
person2.gender = "male";
console.log(person2);


//__________________       Question    3 _____________
console.log("__________________Question3____________")

const person3 = {
  name: "Adam",
  age: 25
};
person3["gender"] = "male";
console.log(person3);



//__________________       Question    4 _____________
console.log("__________________Question4____________")

const person4 = {
    name: "Adam",
    age: 25
  };
console.log(person4.name);




//__________________       Question    5 _____________
console.log("__________________Question5____________")

const person5 = {
  name: "Adam",
  age: 25
};
const nameValue5 = person5["name"];
console.log(nameValue5);


//__________________       Question    6 _____________
console.log("__________________Question6____________")

const person6 = {
  name: "Adam",
  age: 25,
  gender: "male"
};
for (let prop in person6) {
  console.log(prop + ": " + person6[prop]);
}



//__________________       Question    7 _____________
console.log("__________________Question7____________")

const person7 = {
  name: "Adam",
  age: 25,
  gender: "male"
};
const propertyArray = Object.keys(person7);
console.log(propertyArray);



//__________________       Question    8 _____________
console.log("__________________Question8____________")

const person8 = {
  name: "Adam",
  age: 25,
  gender: "male"
};
const valuesArray = Object.values(person8);
console.log(valuesArray);



//__________________       Question    9 _____________
console.log("__________________Question9____________")

const obj1 = {
  name: "Adam",
  age: 25
};
const obj2 = {
  gender: "male"
};
const mergedObject9 = Object.assign({}, obj1, obj2);
console.log(mergedObject9);



//__________________       Question    10 _____________
console.log("__________________Question10____________")

const obj10 = {
  name: "Adam",
  age: 25
};
const obj20 = {
  gender: "male"
};
const mergedObject10 = Object.assign({}, obj10, obj20);
console.log(mergedObject10);


//__________________       Question    11 _____________
console.log("__________________Question11____________")

const person11 = {
  name: "Adam",
  age: 25
};
const frozenObject = Object.freeze(person11);
console.log(frozenObject);


//__________________       Question    12 _____________
console.log("__________________Question12____________")

const person12 = {
  name: "Adam",
  age: 25
};
const sealedObject = Object.seal(person12);
console.log(sealedObject);
















