// 1 - importação de arquivos
import importGreet from "./greet";

importGreet()

// 2 - import de variavel
import { x }from "./varible"

console.log(x)


// 3 - multiplas importações 
import{a, b, myfunction } from "./multiple"

console.log(a)
console.log(b)
myfunction()


// 4 - alias
import { someName as name } from "./changeName";

console.log(name)

// 5 - import all
import * as myNumbers from './number'

const nx = myNumbers.n1

console.log(nx)
myNumbers.showNumber()

// 6 - importando tipos
import { Human } from "./mytype";

class User implements Human{
    name
    age
    constructor(name: string,age: number){
        this.name = name
        this.age = age
    }
}

const danilo = new User("Danilo", 25)

console.log(danilo)