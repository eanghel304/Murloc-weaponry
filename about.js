document.addEventListener('DOMContentLoaded', () => {
    // Get elements by their IDs
    const swords = document.getElementById('swords');
    const shields = document.getElementById('shields');
    const spears = document.getElementById('spears');
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const products = document.getElementById('products');
    const contact = document.getElementById('contact');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
  
    // Add event listeners to menu items
    swords.addEventListener('click', () => {
          window.location.href = 'swords.html';
    });
    shields.addEventListener('click', () => {
          window.location.href = 'shields.html';
    });
    spears.addEventListener('click', () => {
        window.location.href = 'spears.html';
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
  
    // Event listener for search form submission
    searchForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent default form submission
          const query = searchInput.value.trim().toLowerCase(); // Get and normalize the search query
  
          // Redirect based on the search query
          if (query === 'swords') {
              window.location.href = 'swords.html';
          } else if (query === 'shields') {
              window.location.href =  'shields.html';
          } else if (query === 'spears') {
              window.location.href = 'spears.html';
          } else if (query === 'home') {
              window.location.href = 'home.html';
          } else if (query === 'about') {
              window.location.href = 'about.html';
          } else if (query === 'contact') {
              window.location.href = 'contact.html';
          } else {
              alert('No results found.');
          }
    });
  
    // Event listener for cart button click
cartButton.addEventListener('click', () => {
        window.location.href = 'cart.html';
});
  
    // Initialize the cart items count
let cartItems = 0;
  
    // Function to add an item to the cart
function addToCart() {
        cartItems += 1; // Increase the cart item count
        cartCount.textContent = cartItems; // Update the displayed cart count
    }
});
  