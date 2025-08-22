// Dummy products (later tu admin panel se real add karega)
const products = [
  {
    name: "Black Hoodie",
    price: "$35",
    image: "https://via.placeholder.com/300x400?text=Black+Hoodie"
  },
  {
    name: "White T-Shirt",
    price: "$20",
    image: "https://via.placeholder.com/300x400?text=White+Tshirt"
  },
  {
    name: "Denim Jacket",
    price: "$50",
    image: "https://via.placeholder.com/300x400?text=Denim+Jacket"
  },
  {
    name: "Track Pants",
    price: "$30",
    image: "https://via.placeholder.com/300x400?text=Track+Pants"
  }
];

// Load products dynamically
window.onload = () => {
  const container = document.getElementById("products-container");

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="buy-btn">Add to Cart</button>
    `;

    container.appendChild(div);
  });

  // Example: Buy button action
  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Added to cart ✅");
    });
  });
};
