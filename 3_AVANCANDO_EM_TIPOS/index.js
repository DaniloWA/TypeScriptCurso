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
