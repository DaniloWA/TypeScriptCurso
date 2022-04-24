"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
// numbers = "teste" vai dar erro!
const nomes = ["Danilo", "João"];
// nomes.push(4) vai dar erro!
// 2 - outra sintaxe array
const nums = [100, 200, 3];
nums.push(300);
console.log(nums);
// nums.push("teste") vai dar erro!
// 3 - any
const arr1 = [1, "teste", true, { nome: "matheus" }, []];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4- parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(5, 5);
//soma("5a","d")
// 5- retorno funcção
function greeting(name) {
    // return 5 erro de tipo
    return `Olá ${name}`;
}
console.log(greeting("Danilo"));
// console.log(greeting(123)) erro de tipo
// 6 - função anonima
setTimeout(() => {
    const sallary = 1000;
    //console.log(parseFloat(sallary)) erro de tipo na func anonima
    //console.log(sallary)
});
// 7 - Objetos
function passCoordinates(coord) {
    console.log("X cordinates: " + coord.x);
    console.log("Y cordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// passCoordinates({nome: 1, sobrenome: 2}) erro
// menos comum
const pessoaObj = { nome: "Danilo", surname: "Oliveira" };
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// showNumbers(1)
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined)
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    return `Olá, ${firstName}, tudo bem ?`;
}
console.log(advancedGreeting("Danilo", "Oliveira"));
console.log(advancedGreeting("Pedro"));
// 10 - union type
function showBalance(balance) {
    console.log("O saldo da conta é R$" + balance);
}
showBalance("500");
showBalance(100);
//showBalance(true) erro de tipo
const arr2 = [1, "teste", true];
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return `A função do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showID(id) {
    console.log(`O ID É ${id}`);
}
showID(1);
showID("200");
showID(123);
function showCoords(obj) {
    console.log(`X ${obj.x} ${obj.y} ${obj.z}`);
}
const coordOBJ = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordOBJ);
const somePerson = { name: "Danilo", age: 25 };
console.log(somePerson.name);
/*
type personType = {
    age: number
}
*/
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
//showDirection("top") erro de tipagem
// 16 - Non-null Assertiuon Operation  ? ! 
const p = document.getElementById("some-p");
console.log(p?.innerText);
// 17 - bigint
let n;
n = 1000n;
console.log(n);
console.log(n + 100n);
console.log(typeof n);
// 18 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("A");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
