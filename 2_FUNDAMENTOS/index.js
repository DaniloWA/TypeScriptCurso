"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 16.42424;
console.log(y.toPrecision(3));
console.log(typeof y);
// 2 - string
const firstName = "Danilo Duarte";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Oliveira";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
// annotation
let ann = "Teste";
// inference
let inf = "Teste";
//ann = 1
//inf = 1
console.log("ex_02");
// ex_02 --
const numero = 10;
const texto = `Eu vou dar console.log nesse numero : ${numero.toString()}`;
console.log(texto.toUpperCase());
console.log(typeof texto);
