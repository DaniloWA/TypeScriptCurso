"use strict";
// 1 - generics
function showDate(argumento) {
    return `O dado é: ${argumento}`;
}
//console.log(showDate(5))
//console.log(showDate("testando generic"))
//console.log(showDate(true))
//console.log(showDate(["teste", ""]))
// 2 - GENERICS CONSTRAINT
function shwoProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherObj = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, categoria: "roupa" };
console.log(shwoProductName(myObj));
console.log(shwoProductName(otherObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showCharname(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Danilo",
    age: 30,
    hasDriveLicense: true
};
console.log(showCharname(myChar, "name"));
// showCharname("name", "name") erro tipagem 
// 6 - keyof type operator 
