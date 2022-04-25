"use strict";
// 1 - void
function withoutReturn() {
    console.log("Está função não tem retorno!");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Danilo");
preGreeting(greeting, "Joao");
// 2 - Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, true]));
console.log(firstElement(["dada", 2, { 1: 2 }]));
//console.log(firstElement("oi")) erro de tipagem
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: " Danilo" }, { age: 30, job: "Programmer" });
console.log(newObject);
