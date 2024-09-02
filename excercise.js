import { sumMe } from "./functions.js";

//using for of loop, write a function that triples number. You are send the result of the tripled numbers in a new array

const tripleNUM = (numbers) => {
  let result = [];
  for (let num of numbers) {
    result.push(num * 3);
  }
  return result;
};

console.log(tripleNUM([2, 3, 4, 5]));

//write a function that takes a parameter "stringArr". The argument of the parameter should be an array of strings whose values should be uppercased. Return your arguments in a new array
function uperCased(stringArr) {
  let result = [];
  result.push(stringArr[0].toUpperCase());
  result.push(stringArr[1].toUpperCase());
  return result;
}
console.log(uperCased(["Today is monday", "It is noon"]));

//create an array named todos - which should be an array of objects whose properties should be - title, duedate and id. Their values should in string
//write a function that lets you add a new item to the todos array
//for the value of duedate, you are to use date get time method and ensure it as a string.

const todos = [
  {
    title: "hello",
    duedate: "239",
    id: "2",
  },
];

function addToDo(a, b, c) {
  todos.push({ title: a, duedate: b, id: c });
}
console.log(addToDo("monday", new Date().getTime().toString(), "3"));
console.log(todos);

//write a function cartTotal that takes in a parameter - cart
//the parameter cart should be an array. the array should have 2 objects in it.
//the objects should have the properties- price and quantity
//you are to supply the values
//the values of each of the properties should be a number
//the function cartTotal should be able to multiply each of the value of the price and quantity and give you a total sum of the values of the two objects

const cartTotal = (cart) => {
  let total;
  const cart1 = cart[0].price * cart[0].qty;
  const cart2 = cart[1].price * cart[1].qty;
  total = sumMe(cart1, cart2);
  return total;
};

console.log(
  cartTotal([
    {
      price: 300,
      qty: 6,
    },
    {
      price: 500,
      qty: 10,
    },
  ])
);
