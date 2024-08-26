let xp = 3.13;
let yx = 3;
console.log(xp + yx);

let xo = "10";
let yo = "20";
console.log(xo + yo); //this will be seen as string and not number

console.log(xp / yx); //division
console.log(xo / yo); //division

//NAN - not a number
console.log(xo / "book");

//converting a number to a string
let po = 300;
console.log(po.toString());

//to fixed method
let uu = 7.456;
console.log(uu.toFixed(0));
console.log(uu.toFixed(2));

//parsefloat - it converts a value as a string and returns the first number
console.log(parseFloat("440 year"));
console.log(parseFloat("40 10"));
console.log(parseFloat("year 10"));

//parseInt - convert a string and return  the first integer
console.log(parseInt("10.00"));
console.log(parseInt("I am charley 40"));
console.log(parseInt("30 50 40"));

//number converts a string value to a javascript number datatype
const num = Number("50");
console.log(typeof num);
