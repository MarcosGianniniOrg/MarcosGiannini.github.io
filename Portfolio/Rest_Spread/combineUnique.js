const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "USB Cable", price: 10, category: "Electronics" }
    { name: "Shirt", price: 30, category: "Clothing" },
    { name: "Book", price: 20, category: "Education" },
];

cont filterProducts = (products, ...conditions) => {
    return products.filter((product) =>
        conditions.every((condition) => condition(product))
    );
};

const isElectronics = (product) => product.category === "Electronics";
const isCheap = (product) => product.price < 100;

const filteredProducts = filterProducts(products, isElectronics, isCheap);
console.log(filteredProducts);