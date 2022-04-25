// 1 type guard
function sum(a: number | string, b: number | string) {

    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    } else {
        console.log("Impossivel realaizar a soma!")
    }

    
}

sum("4", "59")
sum(12, 42.3)
sum("5", 42.3)

// 2 checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
    if(operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply"){
            const sum = arr.reduce((i, total) => i * total)
            console.log(sum)
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}


operations([1,2,3], "sum")
operations([3,2,3], "multiply")
operations([1,2,3])

// 3 - instance of
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string){
        super(name)
    }
}

const jhon = new User("Jhon")
const danilo = new SuperUser("Danilo")

console.log(jhon)
console.log(danilo)

function userGreeting(user: object){
    if(user instanceof SuperUser){
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`)
    } else if (user instanceof User){
        console.log(`Olá ${user.name} `)
    }
}

userGreeting(jhon)
userGreeting(danilo)

// 4 - operador in 
class Dog {
    name
    breed

    constructor(name: string, breed?: string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor alemao")

function showDogDetails(dog: Dog){
    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log('O cachorro é um SRD')
    }
}

showDogDetails(turca)
showDogDetails(bob)
//showDogDetails(danilo) erro de tipagem espera um Dog

function reviewUser(nota: number | boolean){
    switch(nota) {
        case 1:
          console.log(`${nota} horrivel`)
          break;
        case 2:
          console.log(`${nota} ruim`)
          break;
        case 3:
          console.log(`${nota} aceitavel`)
          break;
        case 4:
          console.log(`${nota} bom`)
          break;
        case 5:
          console.log(`${nota} Perfeito`)
          break;
        case false:
          console.log(`Sem nota no momento!`)
          break;
        default:
          console.log(`${nota} Mande uma nota valida!`)
      }
}

reviewUser(1)
reviewUser(2)
reviewUser(3)
reviewUser(4)
reviewUser(5)
reviewUser(false)

