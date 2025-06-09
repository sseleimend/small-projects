document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 59.99,
    },
  ];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });
  renderCart();

  productList.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find((product) => product.id === productId);
    addToCart(product);
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    localStorage.setItem("cart", JSON.stringify(cart));

    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length <= 0) {
      totalPriceDisplay.textContent = totalPrice.toFixed(2);
      return emptyCartMessage.classList.remove("hidden");
    }
    emptyCartMessage.classList.add("hidden");
    cartTotalMessage.classList.remove("hidden");

    cart.forEach((item) => {
      totalPrice += item.price;
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button data-id="${item.id}">Delete</button>
      `;
      cartItems.appendChild(cartItem);
    });

    totalPriceDisplay.textContent = totalPrice.toFixed(2);
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout succesfully");
    renderCart();
  });

  cartItems.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;
    const productId = parseInt(e.target.getAttribute("data-id"));
    cart = cart.filter((cartItem) => cartItem.id !== productId);
    renderCart();
  });
});
