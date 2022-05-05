"use strict";
// 1 - campos em classe
class User {
}
const danilo = new User();
danilo.name = "Danilo";
// danilo.job = "Programmer" só pode por prioridades que já existem na classe no molde
// 2 - CONSTRUCTOR
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
// const pedro = new NewUser("Pedro", "22")
