//operators are uesd to perform actions

//assigment operator - assigns a value to a variable
let dd = 4;

//arithmetic operators - (+ , - , * , / , ** ,  % )
let ee = 5;
console.log(dd + ee); //addtion
console.log(dd - ee); //substraction
console.log(dd * ee); //multiplication
console.log(dd ** 4); //exponential or raised to the power
console.log(dd / ee); //division
console.log(ee % dd); //modulus or remainder of

let y = 8;
let z = y++;
let p = 6;
let pp = p--;
console.log(y); //increment of 1
console.log(p); //decrement of 1

//comparison operators - used to determine the difference between variables or values
let ff = 30;
//equal to. == check if they are of the same value
console.log(ff == 20); //false
console.log(ff == 30); //true
console.log(ff == "30"); //true

//strict equal to === checks for same dataype and value
console.log(ff === "30"); //false
console.log(ff === 30); // true

//not equal to
console.log(ff != 30); //false
console.log(ff != "30"); //false

//strict not equal to !== checks for same dataype and value
console.log(ff !== 30); //false
console.log(ff !== "30"); //true

// > greater than
console.log(ff > 50); //false

// >= greater than or equal to
console.log(ff >= 30); //true

// < less than
console.log(ff < 50); //true

// <= less than or equal to
console.log(ff <= 30); //true

//logical operators
//logical OR - ||
//logical AND - &&
//logical not - !

//logical OR evaluates the operand from left to right
//for each of the operand, it converts it to boolean and if the result is true,
//it stops and returns the original value of the operand
//if all the operands are false, it return the last operand

let output = dd || ee;
console.log(output); //4 cos its truthy

console.log(1 || 0); //1 is truthy and 0 is falsy
console.log(null || 1); //1 is truthy and null is falsy in value
console.log(undefined || null || 0); //0 all are falsy
console.log(null || 3 || undefined); //3
console.log(null || (2 && 3) || 4); //it evaluates the bracket first which gives 3 cos it's truthy. then we have null || 3 || 4. Using logical OR, 3 is truthy ignoring 4 since 3 is the first truthy value.

//logical && returns true if both operands are truthy and falsy if the value is falsy
console.log(dd && ee); // 5
console.log(0 && 4); // 0 cos it is falsy
console.log(1 && 2 && 3); //3
console.log(null && 4); //null
console.log(3 && 0 && 3); //0
console.log(0 && "today"); //0
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

//logical not !
console.log(!true); //false
console.log(!false); //true
console.log(!40); //false

//ternary operator is a conditional operator that ouptuts a result based on the boolean value
const score = 80;
const scoreBoard = score > 100 ? "good" : "poor";
console.log(scoreBoard);

const pen = true;
const biro = false;
const eraser = 10;
console.log(pen || biro); //true
console.log(biro || biro); //false
console.log(eraser > 5 || eraser < 5); //true
console.log(!pen); //false

let rr = 2;
console.log(rr > 2 && rr < 2); //false

let ac = 50 + "Emma";
console.log(ac);

let cc = "Emma" + 20 + 4;
console.log(cc);

let dc = 20 + 4 + "Emma";
console.log(dc);