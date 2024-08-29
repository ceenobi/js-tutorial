//if and else statement
//if statement evaluates a condition inside a bracket
//use if statement if the code to be excuted is true, while else is used if the same code to be executed is false
//use else if - to specify a new conditon to test if the first conditon is false

//structure of the if statement
// if(condition to be tested) {
//     execute code if condition is true
// } else {
//         execute code if condition is false
// }

const checkAmount = 1000;

if (checkAmount > 600) {
  console.log("yes");
} else {
  console.log("no");
}

//else if
if (checkAmount >= 1200) {
  console.log("low funds");
} else if (checkAmount <= 500) {
  console.log("steady");
} else if (checkAmount > 900 && checkAmount <= 1100) {
  console.log("ttttttt");
} else {
  console.log("hello");
}

//ternery operator
const pt = checkAmount >= 600 ? "yes" : "no";
console.log(pt);

//switch statement performs a series of actions based on diff conditions
//switch statement is evaluated once
//the value is compared with the value of each case
//if there is a match, the associated block of code is executed
//if there is no match, the default block of code is executed

switch ((ai = 2)) {
  case 1:
    ai = "one";
    break;
  case 2:
    ai = "two";
    break;
  case 3:
    ai = "three";
    break;
  default:
    console.log("0");
    break;
}

console.log(`the value is ${ai}`);

const getDate = new Date().getDay();
console.log(getDate);

switch (getDate) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Friday");
    break;
  case 2:
    console.log("Thursday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Monday");
    break;
  case 5:
    console.log("Saturday");
    break;
  default:
    console.log("no day found");
    break;
}

// alert("hey")
// prompt("Enter your name");

//write a code that ask for a question using the prompt method
//the question should say "Who is there?"
//if the question reply is 'Dami', it should prompt for a password
//if the question reply is not 'Dami', alert('I dont know you')
//if the password is 'javascript', alert('Welcome')
//if the password is not 'javascript', alert('wrong password')
//if there is no question, alert('cancelled')

// let question = prompt("Who is there");

// if (question === "Dami") {
//   let password = prompt("Enter password");
//   if (password === "javascript") {
//     alert("Welcome");
//   } else if (password !== "javascript") {
//     alert("wrong password");
//   }
// } else if (!question) {
//   alert("cancelled");
// } else if (question !== "Dami") {
//   alert("I dont know you");
// }


// const operator = prompt("Enter operator (either +, -, *, or /");
// let ourResult;

// const num1 = parseFloat(prompt("Enter first number"));
// const num2 = parseFloat(prompt("Enter second number"));

// switch (operator) {
//   case "+":
//     ourResult = num1 + num2;
//     alert(`${num1} + ${num2} = ${ourResult}`);
//     break;
//   case "-":
//     ourResult = num1 - num2;
//     alert(`${num1} - ${num2} = ${ourResult}`);
//     break;
//   case "*":
//     ourResult = num1 * num2;
//     alert(`${num1} * ${num2} = ${ourResult}`);
//     break;
//   case "/":
//     ourResult = num1 / num2;
//     alert(`${num1} / ${num2} = ${ourResult}`);
//     break;
//   default:
//     alert("Invalid operator");
// }
