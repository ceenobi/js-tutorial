const productsApi = "https://fakestoreapi.com/products ";
const categoryApi = "https://fakestoreapi.com/products/categories";

const displayCat = document.querySelector(".nav");
const h1Text = document.querySelector(".topRated  ");
const displayTopRated = document.querySelector(".topRatedProducts ");
const displayAllProducts = document.querySelector(".allProducts ");

const getProducts = async () => {
  await fetch(productsApi)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("products", data);
      getTopRated(data);
      showProducts(data)
    });
};
const getCategories = async () => {
  await fetch(categoryApi)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("category", data);
      showCategories(data);
    });
};

const getTopRated = async (data) => {
  const filterRatings = data.map((item) => item.rating.rate);
  const maxRate = Math.max(...filterRatings);
  const topRatedProducts = data.filter((item) => item.rating.rate === maxRate);
  console.log("filter ", topRatedProducts);
  displayTopRated.innerHTML = topRatedProducts.map((item)=> (
    `<div class='topRatedProductCard'>
    <img src=${item.image} alt=${item.title} />
    <h3>${item.title} </h3>
    <p>$ ${item.price}</p>
    </div>`
  ))
};

getProducts();
getCategories();

const showCategories = (cat) => {
  displayCat.innerHTML = cat
    .map((item) => `<a href=${item}>${item}</a>`)
    .join(" ");
};

h1Text.textContent = "Our top rated products";


const showProducts = (data)=> {
  displayAllProducts.innerHTML = data
   .map((item) => (
      `<div class='productCard'>
      <img src=${item.image} alt=${item.title} />
      <h4>${item.title} </h4>
      <p>$ ${item.price}</p>
      </div>`
    ))
   .join("");
} 
