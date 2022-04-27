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
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
}
const u1 = { email: "ma@gmail.com", role: "Admin" };
const u2 = { email: "joao@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const danilo = {
    name: "Danilo",
    age: 25
};
const daniloDev = {
    name: "Danilo",
    age: 25,
    superpowers: ["Inteligencia", "Astucia"]
};
console.log(danilo);
console.log(daniloDev);
const arnold = {
    name: "arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
// 7  - readonly array
let myArray = ["mala", "roupa", "comida"];
// myArray[3] = "mansão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Item: " + item);
});
myArray = myArray.map(item => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNummbers = [1,2,3,4,5,6] erro de tipagem um elemento a mais do que o type
// const miexedArray: fiveNummbers = [1,true,"teste",5] erro de tipagem
console.log(myNumberArray);
const anotherUser = ["Danilo", 25];
console.log(anotherUser[0]);
anotherUser[0] = "joao";
console.log(anotherUser[0]);
// anotherUser[1] = "texto" erro de tipagem
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10 apenas leitura!
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 4]);
