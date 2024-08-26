//js strings are used for outputting text and we can use either single or double quotes
let xl = "mac";
let hh = "2022"

//the length counts items from position 1
let longText = "Today is Tuesday";
console.log(longText.length);

//extracting parts of a string
//slice method - it takes in to parameters: start position to be slice and the end position

let fruits = "Apple, Banana, Pear";
console.log(fruits.slice(7)); // if you omit the second parameter, the slice method will output the rest from the  index position.

//the replace method - this replaces a specified value with another value in a string. it takes two parameters - the text to be replaced and the new text to be added
let newText = "I have a book";
console.log(newText.replace("have", "own"));

//the replace method only replaces the first match
newText = "I own a laptop and also own a book";
let newTextB = newText.replace("own", "have");
console.log(newTextB);


//replace method is case sensitive

///replace all - replaces all selected word in a string
let food = "I love rice. Rice is my best food, Rice is delicious";
console.log(food.replaceAll("Rice", "Beans"));

//converting to uppercase or lowercase
let textword = "Hello";
console.log(textword.toUpperCase());
console.log(textword.toLowerCase());

//concat method - joining two or more strings together
let text1 = "I have a shoe";
let text2 = "the shoe is fine";
console.log(text1 + " " + text2);
console.log(text1.concat(" ", text2));


//template literals - used to reference a variable in a string. it is denoted using backticks ``
let phoneMaker = "Google";
let phoneModel = "Pixel 8 pro";

let myPhone = `I have a phone called ${phoneMaker} and the model is ${phoneModel}`;
console.log(myPhone);

//trim method -removes spaces from sides of a string
let text3 = "   Hey young world.     ";
console.log(text3);
console.log(text3.trimStart());
console.log(text3.trimEnd());
console.log(text3.trim());

//the indexOf - this returns the index position of the first occurence of a text in a string
let findText = "Please find me a pen and find a biro";
console.log(findText.indexOf("find"));
console.log(findText.lastIndexOf("find"));

//includes method - returns true if a string contains a specified value
console.log(findText.includes("a"));


let items = "Pen, Paper, Tables, chairs";
console.log(items);
//convert a string to an array - split method
console.log(items.split("-"));


//xcercise
//output a list of items and check its length
//slice your string and extract the third syllable word
//find the index of the fourth word