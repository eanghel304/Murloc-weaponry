//Fix: Wrap your script inside DOMContentLoaded to ensure the DOM is fully loaded before accessing elements:
document.addEventListener('DOMContentLoaded', () => {

    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const shopButton = document.getElementById('shop-button');
    const shieldsBuy = document.getElementById('shields-buy');
    const swordsBuy = document.getElementById('swords-buy');
    const spearsBuy = document.getElementById('spears-buy');
    const swords1 = document.getElementById('swords1')

//menu
    home.addEventListener('click', () => {
           window.location.href = 'home.html';
    });

    about.addEventListener('click', () => {
        window.location.href = 'about.html';
    });

    contact.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
//shop button "stock up here"    
    shopButton.addEventListener('click', () => {
        window.location.href = 'products.html';
    });
//shop button week's favorite
    swords1.addEventListener('click', () => {
        window.location.href = 'swords.html';
    });
//search button
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
//cart items
    let cartItems = 0;

    // Event listener for cart button click
    cartButton.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });

    // Function to add an item to the cart
    function addToCart() {
        cartItems += 1; // Increase the cart item count
        cartCount.textContent = cartItems; // Update the displayed cart count
    }
//categories home page
    shieldsBuy.addEventListener('click', () => {
        window,location.href = 'shields.html';
    });
    swordsBuy.addEventListener('click', () => {
        window.location.href = 'swords.html';
    });
    spearsBuy.addEventListener('click', () => {
        window.location.href = 'spears.html';
    });


});
