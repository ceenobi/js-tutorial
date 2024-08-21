//a variable is used to store information so that it can be used or manipulated later on
console.log("hello world");

//how to define a variable name
//a letter A-Z or a-z
// a dollar sign ($)
// an underscore (_)

//you cannot begin a variable name with a number

//js variable names are case sensitive
lastname = 3;
lastName = 4; //camelcased
LASTNAME = 5; //uppercased
LastName = 6; //pascalcased

//js variable name declaration
//automatically - not good practise
ourName = "Today";

//using var, let and const keyword
var dre = 1; //old way prior to 2015
let book = "Harry potter";
const phone = "apple";

//when do we use var,let and const
//var - if you want to support older browsers
//let - use if you know the value might be changed
//const - use if the value should not be changed

//redeclaring variable name
//you can't redeclare a variable name that begins with let and const
let year = 2024;
// console.log(year);
year= "2024"; //let value updated from 2024 to 303
console.log(year);

const day = "monday";
console.log(day);
// day = "tue".  const cannot be changed
// console.log(day);

//block scope and global scoped variables
//block
{
  let a = 40;
  console.log(a);
}

//global
let a = 30;
console.log(a);