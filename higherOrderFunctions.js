import { sumMe } from "./functions.js";

const useSumMe = sumMe(4, 5, 6);
console.log(useSumMe);

//functions can be assigned to a variable, they can passed to other functions as paramters and be returned as a value

//higher order fucntions is a function that accepts fucntions as parameter and returns them as values

let plusFive = (num) => {
  return num + 5;
};
console.log(plusFive(10));

let opp = plusFive; //asigning the functin to a new variable opp
console.log(opp(8));

function callMe() {
  console.log("call me");
}

function higherOrder(ccc) {
  ccc();
}

higherOrder(callMe);

//we have 4 higher order function - map method, filter method, reduce method and forEach method

//map method iterates over data and returns back your data in an array. it does not alter the original array, the result you see in map is served in a new array. it is non-mutating
const arr = [1, 3, 5, 7, 9];
const arrResult = arr.map((num) => num * 4); //arrow  method
console.log(arrResult);

const tt = function jj(num) {
  return num + 4;
};

const arrResultB = arr.map(tt);
console.log(arrResultB);

const myStudents = ["Dre", "Tope", "Jamal", "AyoB", "AyoG"];
const printMyStudent = myStudents.map((item) => item);
console.log(printMyStudent);

const actors = [
  { name: "Keanu", networth: 500000 },
  { name: "Denzel", networth: 400000 },
  { name: "Sandra", networth: 700000 },
];

const actorNames = actors.map((actor) => actor.name);
console.log(actorNames);

//filter method takes an array and returns a new array with only the values that match the conditions specified. it does not alter the original array.
const filterActorNetworth = actors.filter((actor) => actor.networth > 450000);
console.log(filterActorNetworth);

const filterNums = [1, 2, 3, 4, 5, 6];
//filter numbers greater than 3 or less than 2
const filterNumResult = filterNums.filter((num) => num > 3 || num < 2);
console.log(filterNumResult);

//filter numbers greater than
const fNumberGreaterThan = (numbers, greaterThan) => {
  let filteredNum = [];
  const getNum = numbers.filter((num) => num > greaterThan);
  filteredNum.push(getNum);
  return filteredNum;
};
console.log(fNumberGreaterThan([5, 6, 7, 8, 9, 10], 7));

//the reduce method iterates over an array and return a single value. it takes in a call back function with two paramters (accumulator, currentValue). on each iteration, the accumulator is the value returned by the last iteration while the currentvalue is the current element in the array.
//additionally, a second argument can be passed which acts as the initial value of the accumlator

const getSumOfNumbers = [5, 6, 7, 8];
const getTotalNum = getSumOfNumbers.reduce((acc, cv) => acc + cv);
console.log(getTotalNum);

const sumUpActorsNetworth = actors.reduce(
  (prev, curr) => prev + curr.networth, 0
);
console.log(sumUpActorsNetworth);

const maxNums = [30, 40, 65, 70];
const findMaxNum = maxNums.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
});
console.log(findMaxNum);

//there the reduce method starts by 30 as the accumulator and 40 as the current value. it will check if 40 is greater than 30, if so, it updates the accumulator to 40. it will once again set 40 as the currentvalue and check if 65 is greater than 40.
//it does this until it gets to 70 where the 70 as the current value is not greater than 70 as the accumulator and so therefore returns back 70 as te maximum value


//for each method loops through an array and provides a callback function on each array element
const weather = ["cloudy", "sunny", "humid"];
weather.forEach((item, index) => console.log(`${index} ${item}`));

//map and forEach can take up to 3 argument - the current element, index -the index of the array elements, and the array itself. the index and the array element is optional

actors.forEach(({ name, networth }) => {
  if (networth > 600000) {
    console.log(name);
  }
});