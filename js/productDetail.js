const data = JSON.parse(localStorage.getItem("selectedProduct"));

if (data) {
  document.querySelector(".product-image").innerHTML = `
    <img src="${data.image}" alt="${data.title}" />
  `;
  document.querySelector(".product-title").innerText = data.title;
  document.querySelector(".product-description").innerText = data.description;
  document.querySelector(".product-price").innerText = `₹${data.price}`;
}

document.querySelector(".back-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});
