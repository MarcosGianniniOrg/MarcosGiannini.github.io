function calculateOrderTotal(price, discount = 0, shipping = 5, tax = 0.21) {
    // Calculated price with discount
    const discountedPrice = price - (price * discount);

    // Calculated price with tax
    const taxAmount = discountedPrice * tax;

    // Sum discount whith tax and shiping
    const total = discountedPrice + taxAmount + shipping;

    return total;
}

// Examples of use:
console.log(calculateOrderTotal(100)); // Precio base sin descuento, con envío por defecto
console.log(calculateOrderTotal(100, 0.2)); // Precio con 20% de descuento y envío por defecto
console.log(calculateOrderTotal(100, 0.2, 0)); // Precio con 20% de descuento y sin envío
