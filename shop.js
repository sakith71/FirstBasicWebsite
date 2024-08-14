/**
 * Online Shop
 * 
 * This script manages the functionality of an online shop, including displaying products,
 * filtering products by category, searching for products, adding products to the shopping cart,
 * updating the shopping cart, and handling checkout.
 */

// Selecting elements from the DOM
let shopping = document.querySelector('.shopping');
let cart = document.querySelector('.cart');
let close = document.querySelector('.closeShopping');
let container = document.querySelector('.container');

/**
 * Toggle shopping cart visibility when the shopping cart icon is clicked.
 */

shopping.addEventListener('click', ()=>{
    if(cart.style.right =='-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-200px)';
        container.style.transition = '1s';
    }
    else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
/**
 * Close the shopping cart when the close button is clicked.
 */
close.addEventListener('click', ()=>{
    cart.style.right ='-100%';
    container.style.transform ='translateX(0)';
    container.style.transition = '1s';
})
let products = [
    // Product objects with properties like id, name, category, image, and price
    {
        id: 1,
        name: '12W Solara Marine <br>Solar Panel M-Series',
        category: 'SolaraPanales',
        image: 'image/solara_12w.jpg',
        price: 249
    },
    {
        id: 2,
        name: '15W Solara Marine <br>Solar Panel M-Series',
        category: 'SolaraPanales',
        image: 'image/solara_15w.jpg',
        price: 285
    },
    {
        id: 3,
        name: '27W Solara Marine <br>Solar Panel M-Series',
        category: 'SolaraPanales',
        image: 'image/solara_27w.jpg',
        price: 349
    },
    {
        id: 4,
        name: '41W Solara Marine <br>Solar Panel M-Series',
        category: 'SolaraPanales',
        image: 'image/solara_41w.jpg',
        price: 475
    },
    {
        id: 5,
        name: '55W Solara Marine <br>Solar Panel M-Series',
        category: 'SolaraPanales',
        image: 'image/solara_55w.jpg',
        price: 429
    },
    {
        id: 6,
        name: 'Yingli 20W Polycrystalline<br>Solar Panel',
        category: 'SolaraPanales',
        image: 'image/solara_1.jpg',
        price: 60
    },
    {
        id: 7,
        name: 'Yingli 10W Polycrystalline<br>Solar Panel',
        category: 'SolaraPanales',
        image: 'image/solara_2.jpg',
        price: 48
    },
    {
        id: 8,
        name: 'Yingli 40W Polycrystalline<br>Solar Panel',
        category: 'SolaraPanales',
        image: 'image/solara_3.jpg',
        price: 72
    },
    {
        id: 9,
        name: 'Rutland 504 <br>Wind Turbine',
        category: 'WindTurbines',
        image: 'image/windTurbine_1.jpg',
        price: 435
    },
    {
        id: 10,
        name: 'Rutland 914i Marine <br>Wind Turbine',
        category: 'WindTurbines',
        image: 'image/windTurbine_2.jpg',
        price: 825
    },
    {
        id: 11,
        name: 'Rutland 1200 Marine <br>Wind Turbine',
        category: 'WindTurbines',
        image: 'image/windTurbine_3.jpg',
        price: 1495
    },
    {
        id: 12,
        name: 'AIR BREEZE Marine<br> Wind Generator',
        category: 'WindTurbines',
        image: 'image/windTurbine_4.jpg',
        price: 1450
    },
    {
        id: 13,
        name: 'AIR BREEZE Wind <br>Turbine - Reconditioned',
        category: 'WindTurbines',
        image: 'image/windTurbine_5.jpg',
        price: 1350
    },
    {
        id: 14,
        name: 'AIR X Marine<br> Wind Turbine',
        category: 'WindTurbines',
        image: 'image/windTurbine_6.jpg',
        price: 1450
    },
    {
        id: 15,
        name: 'AIR SILENT X Marine <br>Wind Turbine',
        category: 'WindTurbines',
        image: 'image/windTurbine_7.jpg',
        price: 1675
    },
    {
        id: 16,
        name: '150 Liter Solar <br>Water Heater',
        category: 'WaterHeater',
        image: 'image/waterHeater_1.jpeg',
        price: 615
    },
    {
        id: 17,
        name: '200 Liter Solar<br> Water Heater',
        category: 'WaterHeater',
        image: 'image/waterHeater_2.jpeg',
        price: 728
    },
    {
        id: 18,
        name: '250 Liter Solar<br> Water Heater',
        category: 'WaterHeater',
        image: 'image/waterHeater_3.jpeg',
        price: 800
    },
    {
        id: 19,
        name: 'ECO 40W LED Light <br>Bulb, Warm White, <br>B22 Bayonet',
        category: 'LedBulbs',
        image: 'image/ledbulb_1.jpg',
        price: 2
    },
    {
        id: 20,
        name: 'ECO 60W LED Light<br> Bulb, Warm White, <br>B22 Bayonet',
        category: 'LedBulbs',
        image: 'image/ledbulb_1.jpg',
        price: 2.5
    },
    {
        id: 21,
        name: 'ECO 75W LED Light<br> Bulb,Warm White, <br>B22 Bayonet',
        category: 'LedBulbs',
        image: 'image/ledbulb_1.jpg',
        price: 3
    },
    {
        id: 22,
        name: 'ECO 60W LED Light<br> Bulb, Cool White, <br>E27 Screw',
        category: 'LedBulbs',
        image: 'image/ledbulb_2.jpg',
        price: 2.5
    },
    {
        id: 23,
        name: 'ECO 75W LED Light <br>Bulb, Cool White, <br>E27 Screw',
        category: 'LedBulbs',
        image: 'image/ledbulb_2.jpg',
        price: 3
    },
    {
        id: 24,
        name: 'ECO 100W LED Light <br>Bulb, Cool White, <br>E27 Screw',
        category: 'LedBulbs',
        image: 'image/ledbulb_2.jpg',
        price: 4
    },
    {
        id: 25,
        name: 'ECO 40W Dimmable<br> LED Pear Bulb',
        category: 'LedBulbs',
        image: 'image/ledbulb_3.jpg',
        price: 2
    },
    {
        id: 26,
        name: 'ECO 75W Dimmable<br> LED Pear Bulb',
        category: 'LedBulbs',
        image: 'image/ledbulb_3.jpg',
        price: 3
    },
    {
        id: 27,
        name: 'ECO 40W Dimmable LED <br>Candle Bulb E14',
        category: 'LedBulbs',
        image: 'image/ledbulb_4.jpg',
        price: 2
    },
    {
        id: 28,
        name: 'ECO 60W Dimmable LED<br> Candle Bulb E14',
        category: 'LedBulbs',
        image: 'image/ledbulb_4.jpg',
        price: 2.5
    },
    {
        id: 29,
        name: 'Rolls Solar AGM Series 2<br>12V Deep Cycle Battery-<br>90Ah (C100) 68Ah (C10)',
        category: 'Others',
        image: 'image/battery_1.jpg',
        price: 246
    },
    {
        id: 30,
        name: 'Rolls Solar AGM Series 2<br>12VDeep Cycle Battery-<br>110Ah (C100) 68Ah (C10)',
        category: 'Others',
        image: 'image/battery_2.jpg',
        price: 284
    },
    {
        id: 31,
        name: 'Rolls Solar AGM Series 5<br>12V Deep Cycle Battery-<br>94Ah (C100) 77Ah (C10)',
        category: 'Others',
        image: 'image/battery_3.jpg',
        price: 294.00
    },
    {
        id: 32,
        name: 'Rolls Solar AGM Series 5<br>12V Deep Cycle Battery-<br>94Ah (C100) 77Ah (C10)',
        category: 'Others',
        image: 'image/battery_4.jpg',
        price: 318
    },
    {
        id: 33,
        name: 'Air 30 and Air X <br>Replacement<br>Spare Blades - Set of 3',
        category: 'Others',
        image: 'image/blades_1.jpg',
        price: 175
    },
    {
        id: 34,
        name: 'AIR BREEZE and <br>AIR 40 Replacement<br>Spare Blades - Set of 3',
        category: 'Others',
        image: 'image/blades_2.jpg',
        price: 175
    },
    
    // Add more products as needed
];

// Array to store items in the shopping cart
let shoppingCart = [];

/**
 * Display products on the webpage.
 * @param {Array} products - The array of products to display.
 */
function displayProducts(products) {
    // Select the container for the product list
    const productList = document.querySelector('.list');
    // Clear the existing content of the product list
    productList.innerHTML = '';
    // Iterate over each product and create HTML elements to display them
    products.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="title">${product.name}</div>
            <div class="price">£${product.price}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(item);
    });
}

/**
 * Filter products by category.
 * @param {string} category - The category to filter products by.
 */
function filterProducts(category) {
    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

/**
 * Search products by name.
 */
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts);
}

/**
 * Add a product to the shopping cart.
 * @param {number} productId - The ID of the product to add to the cart.
 * Find the product to add to the cart by its ID
 * Check if the product is already in the cart
 * Update the quantity if the product is already in the cart
 * Add the product to the shopping cart if it's not already there
 * Update the cart display
 */
function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    const existingItem = shoppingCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        shoppingCart.push({ ...productToAdd, quantity: 1 });
    }

    updateCart();
}

/**
 * Update the shopping cart display.
 * Select elements related to the shopping cart display
 * Clear the existing content of the cart list
 * Initialize variables for total price and quantity of items
 * Iterate over each item in the shopping cart and display them in the cart list
 * Calculate the total price and quantity of items in the cart
 * Display the total price and quantity of items in the cart
 * Update the checkout link with the total price 
 */
function updateCart() {
    const cartList = document.querySelector('.listCart');
    const totalPrice = document.querySelector('.total');
    const quantityDisplay = document.querySelector('.quantity');
    const checkoutLink = document.getElementById('checkoutLink'); 

    cartList.innerHTML = '';
    let total = 0;
    let quantity = 0;

    shoppingCart.forEach(item => {
        total += item.price * item.quantity;
        quantity += item.quantity;

        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div>${item.name}</div>
            <div>£${item.price * item.quantity}</div>
            <div>
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
            </div>
        `;
        cartList.appendChild(cartItem);
    });

    totalPrice.textContent = 'Total price: £ ' + total.toFixed(2);
    quantityDisplay.textContent = quantity;

    checkoutLink.href = 'shopCheckout.html?total=' + total.toFixed(2);


}

/**
 * Decrease the quantity of a product in the cart.
 * @param {number} productId - The ID of the product to decrease the quantity of.
 * 
 * Find the index of the item in the shopping cart array
 * Decrease the quantity of the item if it's greater than 1
 * Remove the item from the cart if its quantity becomes 0
 * Update the cart display
 */
function decreaseQuantity(productId) {
    const itemIndex = shoppingCart.findIndex(item => item.id === productId);
    if (shoppingCart[itemIndex].quantity > 1) {
        shoppingCart[itemIndex].quantity--;
    } else {
        shoppingCart.splice(itemIndex, 1);
    }
    updateCart();
}

/**
 * Increase the quantity of a product in the cart.
 * @param {number} productId - The ID of the product to increase the quantity of.
 * 
 * Find the index of the item in the shopping cart array
 * Increase the quantity of the item
 * Update the cart display
 */

function increaseQuantity(productId) {
    const itemIndex = shoppingCart.findIndex(item => item.id === productId);
    shoppingCart[itemIndex].quantity++;
    updateCart();
}

// Call the displayProducts function to initially display all products
displayProducts(products);