// Select the form element from the DOM
const form = document.querySelector('form');

// Select the product counter element
const productCounter = document.getElementById('product-counter');

// Select the section to render the product cards
const productList = document.querySelector('section.product-list');

// Initialize an empty array to store product data
const products = [];

/**
 * Update the dynamic counter to reflect the current number of products.
 */
function updateCounter() {
    productCounter.textContent = `Total Products: ${products.length}`;
}

/**
 * Create a new product card element with product details and delete functionality.
 * @param {Object} product - The product object containing name and number.
 * @returns {HTMLElement} - The DOM element representing the product card.
 */
function createProductCard(product) {
    // Create the main product card container
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <h3>Product name: ${product.name}</h3>
        <p>Product number: ${product.number}</p>
    `;

    // Create the delete button for the product card
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    productCard.appendChild(deleteButton);

    // Add smooth animation for the card when added
    setTimeout(() => {
        productCard.classList.add('visible');
    }, 10);

    // Add functionality to delete the product card
    deleteButton.addEventListener('click', () => {
        productCard.classList.add('hidden'); // Add animation for card removal
        setTimeout(() => {
            productList.removeChild(productCard); // Remove card from the DOM
            products.splice(products.indexOf(product), 1); // Remove product from the array
            updateCounter(); // Update the product counter
        }, 300); // Duration of the animation in milliseconds
    });

    return productCard; // Return the fully constructed card
}

// Add an event listener to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default page reload on form submission

    // Retrieve and sanitize input values from the form
    const productName = document.getElementById('productName').value.trim();
    const productNumber = document.getElementById('productNumber').value.trim();

    // Validate the product name input
    if (productName === '' || !isNaN(productName)) {
        alert('Please provide a valid product name'); // Notify the user of an invalid name
        return; // Stop execution if validation fails
    }

    // Validate the product number input
    if (productNumber === '' || parseInt(productNumber) <= 0) {
        alert('Please provide a valid product number greater than 0'); // Notify the user of an invalid number
        return; // Stop execution if validation fails
    }

    // Create a new product object from the input values
    const newProduct = {
        name: productName,
        number: productNumber
    };

    // Add the new product object to the products array
    products.push(newProduct);

    // Update the product counter dynamically
    updateCounter();

    // Log the updated product list to the console (for debugging purposes)
    console.log(products);

    // Create a new product card and append it to the product list
    const productCard = createProductCard(newProduct);
    productList.appendChild(productCard);

    // Reset the form fields for new input
    form.reset();
});

// Initialize the product counter when the page loads
updateCounter();
