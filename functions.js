//function is a block of code designed to perform a particular task
//it's a reuseable piece of code that performs some logic and gives you a result
//it is executed when called upon

function myFunctionName() {
  console.log("Hi Charles");
}
//arrow function
const today = () => console.log("today");

//invoking functions
myFunctionName();
today();

//functions are made of - function keyword, parenthesis, curly braces and the return keyword
//the return keyword is used to give the result of the function and can only be used when writing functions. Nothing should be written after the return statement

function addMe() {
  return 3 + 3;
}
console.log(addMe());

//parameters and arguments
//parameters are like placeholders that receives variables. They are used when defining a function
//arguments are the values the function receives from each parameter

function sumMe(a, b) {
  return a + b;
}
console.log(sumMe(4, 7));

function greetMe(name) {
  console.log(`hello ${name}`); //name here is the placeholder
}
greetMe("Ayo"); //argument
greetMe("Ay");
greetMe("A");

const multiplyMe = (number) => {
  number * 3;
};
console.log(multiplyMe(4));

//calc total spent on food
const calcFoodTotal = (food, tip) => {
  const tipPercent = tip / 100; //find percentage tip
  const tipAmount = food * tipPercent; //actual tip amount
  const total = sumMe(food, tipAmount);
  return total;
};
console.log(calcFoodTotal(600, 50));

//write a function that splits the bill of our calcFoodTotal to be shared among users. if the user is less than or equal to 1, the bill should return the total.
//but if the user is more than 1, the bill should be split among the users

function splitBill(calcFoodTotal, users) {
  if (users <= 1) {
    return calcFoodTotal;
  } else if (users > 1) {
    const bill = calcFoodTotal / users;
    return bill;
  }
}
console.log(splitBill(calcFoodTotal(600, 50), 3));


export { sumMe };
