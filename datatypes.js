//js has 8 datatypes
//string
//number
//boolean
//undefined
//null
//object
//symbol
//biginit

//srings are written in quotes and are used for outputting texts
let color = "yellow";

//to check datatype we use type of
console.log(typeof color);

//number are stored in decimal values but can be written with or without decimals
let length = 45;
let waist = 33.6;
let height = "70";
console.log(typeof length); //number
console.log(typeof height); //string

//boolean - can only have two values - true or false
let ab = true;
let cd = false;
console.log(typeof ab);

//undefined - a variable that has been declared without a value
let tomorrow;
console.log(typeof tomorrow);

let next = ""; //this is not undefined
console.log(typeof next);

//null - can only hold one value - null
let obj = null;
console.log(typeof obj);


//objects can contain objects, arrays, dates - and are written with curly brackets
const person = {
  firstName: "charley",
  lastName: "tech",
  car: true,
  money: 300,
};
console.log(person);


//arrays - are denoted by a square bracket
const phonebrands = ["Apple", "Samsung", "Google Pixel"];
console.log(phonebrands);