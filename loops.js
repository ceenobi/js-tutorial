//loops are used to execute a code a number of times.  They are useful if you want to get a different result each time with a different value based on a specified condition

const clubNames = ["Chelsea", "Liverpool", "Arsenal"];
//if you were to bring out the names,you would do do
console.log(clubNames[0]);
console.log(clubNames[1]);
console.log(clubNames[2]);
//types ofloop

//for loop - this iterates the elements for a fixed number of times - it takes in 3 things  - initialization, condition and the increment

for (let i = 0; i < clubNames.length; i++) {
  console.log(clubNames[i]);
}

const testScore = [2, 3, 4, 5, 6];
for (let i = 0; i < testScore.length; i++) {
  console.log(testScore[i] * 3);
}
//count from 1 to 9
for (let i = 1; i < 10; i++) {
  console.log(i);
}

//for of loop - here you introduce a variable name that act as a key to enter into your data in order to iterate
for (let item of testScore) {
  console.log(item * 2);
}

//for in loop - loops through properties of an object/arrays
const myObject = {
  today: "Monday",
  tomorrow: "Tuesday",
  number: 10,
};

for (let p in myObject) {
  console.log(myObject[p]);
}
const numObject = {
  1: 2,
  2: 40,
  3: 50,
  4: 55,
};

for (const num in numObject) {
  console.log(numObject[num] * 2);
}

const letterCount = (countLetter) => {
  let total = 0;
  for (const letter in countLetter) {
    total = Number(letter) + 1;
  }
  return total;
};

const sentence = "It is time to go home";
console.log(letterCount(sentence));
console.log(sentence.length);

//while loop - loops over data if the condition is true

let textA = "";
let i = 0;
while (i < 10) {
  textA += "The number is" + i;
  i++;
  console.log(textA);
}

let qq = 0;
while (qq < testScore.length) {
  console.log(testScore[qq] + 10);
  qq++;
}


//do while loop will be executed at least once even if the condition is false, before checking if the conditon is true

let numText = "";
let op = 0;
do {
  numText += "Today" + op;
  op++;
} while (op < 10);

console.log(numText);