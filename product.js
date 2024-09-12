const data = [
  {
    id: 1,
    name: "Google Pixel 7",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1668153032/Gadgets/pixel-7-pro_cjxuki.png",
    price: 300000,
    cat: "Phones",
  },
  {
    id: 2,
    name: "Apple Watch 7",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1655244443/Gadgets/apple-watch-series-7-lte-41mm-productred-aluminum-productred-sport-band-mkhd3ll-a-sku4790164_iurfo9.jpg",
    price: 150000,
    cat: "Smartwatch",
  },
  {
    id: 3,
    name: "Samsung Watch 3",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1654264504/Gadgets/61Nhi7ovjkL._SL1500__gbmxgo.jpg",
    price: 180000,
    cat: "Smartwatch",
  },
  {
    id: 4,
    name: "Samsung Buds Pro",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1637412312/Gadgets/samsung_galaxy_buds_pro_r190_08_ad_l_qwjmug.jpg",
    price: 120000,
    cat: "Earbuds",
  },
  {
    id: 5,
    name: "Iphone 12 Pro Max",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1636041986/Gadgets/iPhone-12-Pro-Max-128GB-Graphite_talqdb_pmraau.jpg",
    price: 400000,
    cat: "Phones",
  },
];

const categoryContainer = document.querySelector(".cats");
const productContainer = document.querySelector(".products");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");
const searchInput = document.querySelector(".search");

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const removeCatDuplicates = [
    "All",
    ...allCats.filter((item, index) => allCats.indexOf(item) === index),
  ];
  categoryContainer.innerHTML = removeCatDuplicates
    .map((item) => `<p>${item}</p>`)
    .join(" ");
  categoryContainer.addEventListener("click", (e) => {
    const selectedCategoryName = e.target.textContent;
    selectedCategoryName === "All"
      ? displayProducts(data)
      : displayProducts(
          data.filter((item) => item.cat === selectedCategoryName)
        );
  });
};

const displayProducts = (products) => {
  productContainer.innerHTML = products
    .map(
      (item) =>
        `<div class="product">
    <img src="${item.img}" alt="${item.name}">
    <p>${item.name} </p>
    </div>`
    )
    .join(" ");
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  console.log({ maxPrice, minPrice });
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "#" + maxPrice;
  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "#" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

const searchProducts = () => {
  searchInput.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase();
    if (query) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(query) !== -1)
      );
    } else {
      return;
    }
  });
};

searchProducts();
setPrices();
displayProducts(data);
setCategories();
