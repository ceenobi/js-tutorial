const categoriesApi = "https://fakestoreapi.com/products/categories";
const singleCategoryApi = "https://fakestoreapi.com/products/category";
const productsApi = "https://fakestoreapi.com/products";

const displayCategories = document.querySelector(".categories");
const hero = document.querySelector(".hero");
const displayAllProducts = document.querySelector(".products");

const getCategories = async () => {
  await fetch(categoriesApi)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      showCategories(data);
    });
};
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
      getTopPricedProduct(data);
      showProducts(data);
    });
};

const showCategories = (categories) => {
  displayCategories.innerHTML = categories
    .map(
      (category, index) =>
        `<a href='#' class="tet-zinc-700 ml-4">${category}</a>`
    )
    .join("");
};

const getTopPricedProduct = (products) => {
  const getPrices = products.map((item) => item.price);
  const maxPrice = Math.max(...getPrices);
  console.log(maxPrice);
  const topRatedProduct = products.filter((item) => item.price === maxPrice);
  console.log("top ", topRatedProduct);
  hero.innerHTML = topRatedProduct
    .map(
      (item) => `
  
  <div class="w-full lg:w-[50%]">
  <img src=${item.image} alt=${item.title} class="w-full"/>
  </div>
  <div class="w-full lg:w-[45%] text-center md:text-start">
   <h1 class="my-6 font-semibold">Top Priced Product</h1>
  <h1 class="text-xl font-bold">${item.title}</h2>
  <button class="my-6 border-0 bg-red-400 h-[48px] w-[120px] font-bold">Buy now</button>
  </div>
  `
    )
    .join(" ");
};

const showProducts = (products) => {
  displayAllProducts.innerHTML = products
    .map(
      (item) =>
        `<div class="w-[150px] md:w-[200px] mb-8"> 
    <img src=${item.image} alt=${item.title} class="h-[180px] w-[200px] mb-3" loading="lazy"/>
    <p class="text-sm">${item.title}</p>
    <p class="text-md font-bold">$${item.price}</p>
    </div>`
    )
    .join(" ");
};

getCategories();
getProducts();
