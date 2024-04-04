let a; //declare
  a = 2; // assign

//   compare

let b = "10"
let c = 10
// console.log("compare", b == c) //compare
console.log("compare", b === c) // compare with data type

// reserved keyword; ex- switch, function

//   let b = true;
//   let c = "hello"

//   let e = 2,f,g;

//   let d = 1 + "5"

// console.log("Output value of c " + c + " world");
// console.log(`Output value of c  ${a}  world`, c);
// console.log(">>>>>>", d)

// ES6: template literal
// js version: 

// console.log("Output value of c", typeof(a), typeof(b), c);
// operator : + , -, / , *

// data type : number, boolean, string, bigInt;

// 1.declare
// 2.assign
/*

*/

// document - document.innerHtml, 
// window - DOM  and BOM 


// if, else, for, while, switch
// variable : let, var, const
// method, event
// function - very important
// object, array : important
// git and github
// react - js library - single page application - fronend
// node js - backend
// MERN full stack
// DOM

let k = 3;
switch (k) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  case 2:
    text = "two";
    break;
  default:
    text = "No value found";
}
// console.log("switch statement", text)

let x = 2;
let y = 3;
let z = 2
// if(x === y){ // yadi
//     console.log("if condition satisified");
//   }else if(x === z) {  // nhi toh
//     console.log("else if condition satisified");
//   }else{// nhi toh
//     console.log("else condition satisified");
//   } 

// ternary operator

// let p = 1;
// // let q = 2;

// const r = (p === q) ? "ternary operator satisified" : "ternary operator not satisified"

// console.log(">>>", r)



  
// if(x === y){ // yadi
//   console.log("if condition satisified");
// }else {  // nhi toh
//   console.log("else condition satisified");
// } 

// looping 
//  for loop
// initialization, declare/defined
// parameter, argument
// increment, decrement : by 1
// javascript - synchronous




// for(let a = 1; a <= 10; a++){
//   console.log("2","*", a, "=", 2*a);
// }
// a = 1 + 1 => 2
// a = 2 + 1 => 3
// a = 3 + 1 => 4
// a = 4 + 1 => 5
// 2 * 1 = 2
// 2 * 2 = 4


// 2 * 10 = 20


// function

// developer :
// 1 . similar thing put at similar place
// 2.  avoid same code
// 

// keyword : parameter, argument
// hoisting : var, function - interview

function test(a, b){
  let mult = a + b 
  return console.log(">>>> test", mult);
}

test(3, 2);

// Anonymous function - IIFE - immediate invoke function expression

(function(){
  return console.log(">>>> This is IIFE");
})();

(function(){
  return console.log(">>>> This is IIFE 2");
})();

(()=>{
  return console.log(">>>> This is IIFE by arrow function");
})();


const multiplication = function test(a, b){
  let mult = a * b 
  return console.log(">>>> multi", mult);
}
// multiplication(3,2)
// es6 - fat arrow function
// const add = (x, y) => {
//   const z = x + y
//    return z
// }
// const add = (x, y) => x + y

// console.log(add(1, 2));

// nested fuction 
// callback function
function addSquare(a , b){
  function square(x){
    return x * x
  }
  return square(a) + square(b)
}
// console.log(">>>>>>>>>>>",addSquare(2 , 3))

// object 
// represent by {}
// key: value 
// camel case
// chain rule

let obj = {
  name: "sachin",
  city: "noida",
  pinCode: 1,
  address: true,
  car : {
    company: "Audi",
    color: "white",
  }
}

let objResult = obj.name
let obj2Res = obj["city"]

obj.phone = 8765444567
obj["role"] = "Manger"

let obj3 = {
   company: "TCS",
   address: "Noida",
   phone: 8986877587,
   hiring: {
    exam: "NQT",
    date: "20 march"
   }
}

console.log("object 3", obj3["address"])

// let deleteObj =  delete obj.car

// console.log("object", objResult)

// array
// represent by []
// index - start from 0
let arr = ["a", "byju", "c", 1, 2, 3]
console.log("array", arr[1])

// ES6
// Destructuring

let obj2 = {
  name: "sachin",
  city: "noida",
  pinCode: 1,
  address: true,
  car : "Audi"
}

console.log("object result", obj2.name, obj2.city)

const  {name, city, pinCode, address, car} =  obj2;
console.log('====================================');
console.log(car);
console.log('====================================');

// array destructuring
let arr2 = ["aman", "balram", "caitanya"]
let [a1, a2, a3] = arr2;
console.log(">>>", a1 )

// ES6
// spread operator/cloning(copy)
// rest operator - remaining
//  represent - ... (three dot)

// spread operator
const obj4 = { name : "Aman", city: "noida" }
const obj5 = { age: 20 }

const mergedObj = {...obj4, ...obj5}
console.log("spread operator", mergedObj)

const arr4 = ["a", "b"]
const arr5 = ["c", "d", "e"]
const mergedArr = [...arr4, ...arr5]
console.log("spread array", mergedArr)

// rest operator

function f2( a, b, ...d){
  return console.log("restArg",a, b, d)
}
f2("a1", "b2", "c3", "d4")

// array- method, properties
// object- method
// javascript event

// let, var, const 

// scope
// var - global scope
// let, const - block scope - ES6

// var - re-initialized and re-declared/defined
// let - re-initialized but not re-declared
// const - neither re-initialized nor re-declared

var p1 = "pen"
    p1 = "book" // re-initialized
var p1 = "pencil"  // re-declared
var var1;  
console.log("var1", var1)

let p2 // decalre
    p2 = "mobile" // initialize
    p2 = "tablet" // re-initialize
let var3;
    console.log("p2", var3) // undefined

const p3 = "TV"
      // p3 = "ddd"
      // var p3= ""
      // const var4;
console.log("p3", p3)

// var / function - hoisting - js default behevior - move to top of the scope - declare
// scope : var -> global
// scope : let , const -> block scope
// var num;
var num1;
var num1 = 10;
function foo(){
  var num;
  var num1;
  // console.log("num1", num1);
  var num = 20;
  var num1 = 30;
  // console.log("num2", num)
}

foo();

var scope1; // hoisting
// console.log("scope1", scope1)
var scope1 = "delhi";
// console.log("scope1", scope1);

// var num1;
let num2 = 10;
function foo(){
  // console.log("num2>>>>>>", num2, num3); // undefined ,
  let num3 = 10

}

// let
let num4;
function foo2(){
    num4 = 20
  // console.log("num2>>>>>>", num4); // undefined ,
}
// console.log("foo2", num4)
foo2();
// console.log("foo2", num4) // re-initialized

const arr3 = [];

// const
const num5 = 10;
function foo2(){
   const num5 = 200
  // console.log("num2>>>>>>", num5); // undefined ,


}

// array method 

// Array Methods
// The Array object has a number of methods that can be used to manipulate arrays. The following are some of the most commonly used array methods:

// push() – Adds an element to the end of an array.
// pop() – Removes the last element from an array.
// shift() – Removes the first element from an array.
// unshift() – Adds an element to the beginning of an array.
// sort() – Sorts the elements of an array in ascending order.
// reverse() – Reverses the order of the elements in an array.
// Let's look at an example of how to use the push() method:

// index.js
// let arr = ['apple', 'banana', 'cherry'];
// arr.push('orange');

// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// See Also:
// Search Methods
// Sort Methods
// Iteration Methods	Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()
// includes
// length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits", fruits.toString());
console.log("fruits", fruits.join("$"));
// console.log("fruits", fruits.pop());
console.log("fruits", fruits.push("fruits2"), fruits );
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(">>myChildren>", myChildren)

// reverse 
console.log("fruits", fruits[2]);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// difference btw splice and slice
// arrayName.splice(index where to Start , how many items to remove , optional:add);
const spliceResult = fruits2.splice(2, 2, "grapes");
console.log("spliceResult", fruits2)
console.log("spliceResult", spliceResult)

// slice [1st param : equal to, 2nd param : less than)
// slice(start point index , optional: end point)
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const indecRes = fruits3.indexOf("Mangos")
const sliceResult = fruits3.slice(1, 3);
console.log("sliceResult", indecRes);

// difference btw forEach and map 
// forEach -  iterates and doesn't return new array
// map - iterates and its return new array 
function fnn(w){
console,log()
}
const d = (items, index) => {

}
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

fruits3.forEach((items, index )=>{
   console.log("items", items, index)
})
// array of object
const fruits5 = [
  {
    productName:"VIVO",
    model: "V9"
  },
  {
    productName:"VIVO",
    model: "V10"
  },
  {
    productName:"VIVO",
    model: "V11"
  }
];

fruits5.map((items, idx)=>{
  console.log("map", items.model, idx)
})
// console.log(">>>", fruits4)

const arr7 = [1, 2, 3, 4, 5];

const sum2 = arr7.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
}, 1)
// 0+1= 1
// 1+2 = 3
// 3+3 = 6
// 6 +4 = 10
// 10 + 5 = 15
console.log("sum2", sum2);

// filter
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];

function filterItem(arr, searchKeywords){
   return arr.filter((data)=>data.toLowerCase().includes(searchKeywords.toLowerCase()));
}
console.log("filterItem",filterItem(fruits10, "E"));
// String Methods
// The String object has a number of methods that can be used to manipulate strings. The following are some of the most commonly used string methods:

// length() – Returns the length of a string.
// indexOf() – Returns the index of a specified character in a string.
// charAt() – Returns the character at a specified index in a string.
// substring() – Returns a substring of a specified string.
// toUpperCase() – Converts a string to uppercase.
// toLowerCase() – Converts a string to lowercase.
// trim() – Removes leading and trailing whitespace from a string.
// Let's look at an example of how to use the length() method:

// index.js
let str = '  Hello World  ';
let length = str.length;

console.log(">>>> length", str.indexOf("o"));
console.log(">>>> length", str.charAt(6)); 
console.log(">>>> length", str.substring(0, 4)); 
console.log(">>>> length", str.toUpperCase()); 
console.log(">>>> length", str.trim()); 






// --------------------------------------------------------------------------------------------------
// Object Methods
// The Object object has a number of methods that can be used to manipulate objects. The following are some of the most commonly used object methods:

// hasOwnProperty() – Returns a boolean value indicating whether an object has a specified property.
// keys() – Returns an array of the keys of an object.
// values() – Returns an array of the values of an object.
// entries() – Returns an array of the [key, value] pairs of an object.
// Let's look at an example of how to use the hasOwnProperty() method:

// index.js
let obj6 = {
  name: 'John',
  age: 30
};

let hasName = obj6.hasOwnProperty('city');

console.log("hasName",hasName);// true

let person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

// Check if the object has a property named 'name'
console.log("person", Object.entries(person)); 

// sync/async
// async / await
// // promise- (resolve,reject) - all/allSettled
// setTimeout
// setInterval
// callback 
// sessionStorage
// localStorage
// cookies
//  event loop
// debouncing and throttling

// service worker

// git and github
// react js - library - frontend
// node js - backend
// mongodb and postgres - database

































  





