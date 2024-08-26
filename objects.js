//objects come in key - value pairs - they are identified by curly braces {}

let emptyObj = {};

let lists = {
  color: "white",
  car: "Lexus",
  size: 40,
};
console.log(lists);

//accessing properties in an object -  2 ways
//dot notation
console.log(lists.car);
//array-like
console.log(lists["color"]);

//adding a new property to an object
lists.brand = "Nike";
console.log(lists);

//modifying an object property
lists.color = "red";
console.log(lists);

//deleting a property in an object
delete lists.size;
console.log(lists);

//in - to check if a property exists  in an object
console.log("dd" in lists);
console.log("car" in lists);

//object.assign -  copies properties from one or more objects a target object
const person1 = {
  firstName: "charley",
};

console.log(Object.assign(lists, person1));

//object.entries returns an array of the key/value pairs of an object
const objectEnt = Object.entries(lists);
console.log(objectEnt);


//objectFromEntries creates an object from a list of key/value pairs in an array
console.log(Object.fromEntries(objectEnt));

//object.create - this create a new object from an existing object
const newLists = Object.create(lists);
console.log(newLists.car);

//object.keys - returns an array of the keys of an object
console.log(Object.keys(lists));

//object.values return an array of the values of an object
console.log(Object.values(lists));