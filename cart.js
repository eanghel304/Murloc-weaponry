document.addEventListener('DOMContentLoaded', () => {

  const cartList = document.getElementById('cart-list');
  const totalItems = document.getElementById('total-items');
  const totalPrice = document.getElementById('total-price');
  const swords = document.getElementById('swords');
  const shields = document.getElementById('shields');
  const spears = document.getElementById('spears');
  const home = document.getElementById('home');
  const about = document.getElementById('about');
  const products = document.getElementById('products');
  const contact = document.getElementById('contact');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input'); 

  let cart = [
      { name: 'Sword of Destiny', quantity: 1, price: 100 }
      // Additional items can be added here
  ];

  function updateCart() {
      cartList.innerHTML = ''; // Clear existing cart items

      let totalQuantity = 0;
      let totalCost = 0;

      cart.forEach(item => {
          const cartItem = document.createElement('li');
          cartItem.className = 'cart-item';
          cartItem.innerHTML = `
              <span class="item-name">${item.name}</span>
              <span class="item-quantity">Quantity: ${item.quantity}</span>
              <span class="item-price">$${item.price * item.quantity}</span>
              <button class="remove-item">Remove</button>
          `;

          cartItem.querySelector('.remove-item').addEventListener('click', () => {
              removeItemFromCart(item.name);
          });

          cartList.appendChild(cartItem);

          totalQuantity += item.quantity;
          totalCost += item.price * item.quantity;
      });

      totalItems.textContent = totalQuantity;
      totalPrice.textContent = `$${totalCost}`;
  }

  function removeItemFromCart(itemName) {
      cart = cart.filter(item => item.name !== itemName);
      updateCart();
  }

  updateCart(); // Initial call to display the cart items
});

    swords.addEventListener('click', () => {
    window.location.href = 'swords.html';
    });

    shields.addEventListener('click', () => {
        window.location.href = 'shields.html';
    });

    spears.addEventListener('click', () => {
        window.location.href = 'spears.html';
    });

    home.addEventListener('click', () => {
        window.location.href = 'home.html';
    });

    about.addEventListener('click', () => {
        window.location.href = 'about.html';
    });

    products.addEventListener('click', () => {
    window.location.href = 'products.html';
    });

    contact.addEventListener('click', () => {
    window.location.href = 'contact.html';
    });

    // Event listener for search form submission
    searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    if (query === 'swords') {
        window.location.href = 'swords.html';
    } else if (query === 'shields') {
        window.location.href = 'shields.html';
    } else if (query === 'spears') {
        window.location.href = 'spears.html';
    } else if (query === 'home') {
        window.location.href = 'home.html';
    } else if (query === 'about') {
        window.location.href = 'about.html';
    } else if (query === 'contact') {
        window.location.href = 'contact.html';
    } else {
        alert('No results found!');
    }
    });
