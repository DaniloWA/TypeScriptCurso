"use strict";
// 1 type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel realaizar a soma!");
    }
}
sum("4", "59");
sum(12, 42.3);
sum("5", 42.3);
// 2 checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const sum = arr.reduce((i, total) => i * total);
            console.log(sum);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3], "sum");
operations([3, 2, 3], "multiply");
operations([1, 2, 3]);
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const danilo = new SuperUser("Danilo");
console.log(jhon);
console.log(danilo);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name} `);
    }
}
userGreeting(jhon);
userGreeting(danilo);
// 4 - operador in 
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor alemao");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log('O cachorro é um SRD');
    }
}
showDogDetails(turca);
showDogDetails(bob);
//showDogDetails(danilo) erro de tipagem espera um Dog
