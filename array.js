//arrays are used to store multiple values in a single variable

const classItems = ["AC", "Fan", "chairs"];

console.log(classItems);

let book2 = "hh";
let book1 = "yy";
//the above is not an ideal way to list out things, hence the need for arrays

//creating an array
const classItems2 = ["AC", "Fan", "chairs"]; //using the square bracket
const randomThings = []; //empty array, we can put items inside by their index position
randomThings[0] = "phone";
randomThings[1] = "brush";
randomThings[2] = "food";
console.log(randomThings);

//using the new Array keyword
const myColors = new Array("Red", "Blue", "Black");
console.log(myColors);

//accessing an item in a array - we do so by their index position
console.log(randomThings[1]);

//modifying an item value in an array
randomThings[1] = "spoon";
console.log(randomThings);

//array methods
//converting an array to string
console.log(randomThings.toString());

//join an array - join method
console.log(randomThings.join("*"));

//add items to an array - use the push method
console.log(classItems.push("Benz"));
console.log(classItems);
//push method adds an item begining from the last item in the array

//remove an item - pop method - removes the last item in the array
console.log(classItems.pop());
console.log(classItems);

//shift method removes the first item in an array
console.log(classItems.shift());
console.log(classItems);

//unshift method adds an item to the starting position of an array
console.log(classItems.unshift("Pencil"));
console.log(classItems);

const moreList = [
  "ticket",
  "hair",
  {
    color: "yellow",
    number: 7,
    isActive: true,
  },
];
console.log(moreList);
// console.log(moreList.indexOf("hair"));

//splice method - adds new items to an array in a specified position
//splice method takes 2 arguments - position to insert an item and number of items to delete after adding the item.
const places = ["Ikeja", "Yaba", "ilupeju", "Maryland"];
console.log(places);

places.splice(1, "Onipanu");
console.log(places);
console.log(places.splice(1, 3));
console.log(places);


//slice returns selected elements in an arrray as a new array
const myFood = ["rice", "beans", "eba", "salad", "oo", "pp"];
console.log(myFood.slice(3, 4));
console.log(myFood);

//merge two or more arrays - concat method or the spread operator
const mergedArray = places.concat(myFood);
console.log(mergedArray);


//using the spread operation
const spreadMyArray = [...myFood, ...places];
console.log(spreadMyArray);

