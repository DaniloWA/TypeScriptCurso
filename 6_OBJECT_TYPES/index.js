"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvailable: false });
