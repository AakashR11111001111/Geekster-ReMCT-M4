const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categoryFilter");
const productList = document.getElementById("productList");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");

let allProducts = [];

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  allProducts = data;
  renderProducts(allProducts);
}

function renderProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>₹${product.price}</p>
      <button class="like-btn" data-id="${product.id}">❤️</button>
    `;

    productList.appendChild(card);
  });
}

function filterProducts() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value.toLowerCase();
  const minPrice = parseFloat(minPriceInput.value) || 0;
  const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

  const filtered = allProducts.filter((product) => {
    const matchTitle = product.title.toLowerCase().includes(searchQuery);
    const matchCategory = !selectedCategory || product.category.toLowerCase() === selectedCategory;
    const matchPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchTitle && matchCategory && matchPrice;
  });

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
minPriceInput.addEventListener("input", filterProducts);
maxPriceInput.addEventListener("input", filterProducts);

fetchProducts();