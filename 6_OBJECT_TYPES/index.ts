// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable){
        console.log("O produto está disponivel")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tenis", price: 129.99, isAvailable: false})

// 2 - propiedade opcional em interface
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuario tem o e-mail: ${user.email}`)
    if(user.role){
        console.log(`A função do usuario é: ${user.role}`)
    }
}

const u1:User = {email: "ma@gmail.com", role: "Admin"}
const u2:User = {email: "joao@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - redonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5 Apenas leitura readonly

// 4  - index sgnature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = "teste" erro de tipagem 

// 5  - Extending Types
interface Human {
    name: string,
    age: number
}

interface Superhuman extends Human{
    superpowers: string[]
}

const danilo: Human={
    name: "Danilo",
    age: 25
}

const daniloDev: Superhuman={
    name: "Danilo",
    age: 25,
    superpowers: ["Inteligencia", "Astucia"]
}

console.log(danilo)
console.log(daniloDev)

// 6  - Intersection types
interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name:"arnold",
    type: "shotgun",
    caliber: 12
}

console.log(arnold)