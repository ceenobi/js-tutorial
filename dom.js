//dom - document object model
//it allows you to manipulate html documents
//it is a tree of nodes that allows you to add, remove and modify parts of the html document

//how to select elements in the dom

//getElementById - this allows to target elements by their id's. the ids are case sensitive. id should be used per element
const helloId = document.getElementById("hello");
console.log(helloId);
// getElementsByName
const targetH2Name = document.getElementsByName("nameh2");
console.log(targetH2Name);
//getElementByTageName
const allP = document.getElementsByTagName("p");
console.log(allP);

//getElementByClassName
//getElementsbyclassnames
const domClass = document.getElementsByClassName("h3Class");
console.log(domClass);

//write text in html
helloId.textContent = "Monday";
//css in html
helloId.style.color = "green";

//css querySelectors method
//querySelector - this allows you to get the first element that matches the css selector
//querySelectorALL - all elements that matches the css selector
const cssQuery = document.querySelector(".query");
console.log(cssQuery);
const cssQueryAll = document.querySelectorAll(".queryAll");
console.log(cssQueryAll);

//target image
const getImage = document.getElementById("img");
getImage.src =
  "https://unsplash.com/photos/9e9PD9blAto/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzI1ODc2NjE5fA&force=true&w=640";

///accessing the node list
const getLastChild = document.getElementById("parent").lastElementChild;
console.log(getLastChild);

const indexChild = document.getElementById("parent").children[1];
console.log(indexChild);

//creating elements
const createDiv = document.createElement("div");
console.log(createDiv);

createDiv.innerHTML = "<p>Today is good</p>";

const parent = document.getElementById("parent");
parent.appendChild(createDiv);
console.log(parent);

const alertMe = document.getElementById("styleButton");
alertMe.addEventListener("click", () => {
  alert("Hello Monday");
});
