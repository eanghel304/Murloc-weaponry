document.addEventListener('DOMContentLoaded', () => {

    const swords = document.getElementById('swords');
    const shields = document.getElementById('shields');
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const products = document.getElementById('products');
    const contact = document.getElementById('contact');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
  
  
    swords.addEventListener('click', () => {
        window.location.href = 'swords.html';
    });
  
    shields.addEventListener('click', () => {
        window.location.href = 'shields.html';
    });
    home.addEventListener('click', () => { // Add event listener to 'home' element
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
          } else if (query === 'contact') {
              window.location.href = 'contact.html';
          } else if (query === 'about') {
              window.location.href = 'about.html';
          } else {
              alert ('No results found.')
          }
        });
        cartButton.addEventListener('click', () => {
          window.location.href = 'cart.html';
        });
        let cartItems = 0;
        function addToCart() {
          cartItems += 1;
          cartCount.textContent = cartItems;
        }
      });