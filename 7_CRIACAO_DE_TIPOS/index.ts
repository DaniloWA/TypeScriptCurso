import { types } from "sass"

// 1 - generics
function showDate<T>(argumento: T): string{
    return `O dado é: ${argumento}`
}

//console.log(showDate(5))
//console.log(showDate("testando generic"))
//console.log(showDate(true))
//console.log(showDate(["teste", ""]))


// 2 - GENERICS CONSTRAINT

function shwoProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherObj = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99 , categoria: "roupa"}

console.log(shwoProductName(myObj))
console.log(shwoProductName(otherObj))
// console.log(shwoProductName(thirdObj)) falta propriedade name no generic


// 3 - GENERICS com interface
interface MyObject<T, U, Q> {
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = MyObject<number,number, string> 
type Pen = MyObject<boolean,boolean, string>

const myCar:Car = {name:"Fusca", wheels:4, engine:1.0, color: "Branco"}
const myPen:Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)


// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj:T, key:K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`

}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"))


// 5 - keyof type operator 
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character 

function showCharname(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Danilo",
    age: 30,
    hasDriveLicense: true
}

console.log(showCharname(myChar, "name"))
// showCharname("name", "name") erro tipagem 

// 6 - typeof type operator 
const userName: string = "Danilo"

const userName2:typeof userName = "joao"

// const userName3:typeof userName = 14 erro de tipo

type x = typeof userName

const userName4: x = "Joaquim"


// 7 - INDEXED ACESS TYPE
// pode criar um tipo baseeado em uma chave de objeto!

type Truck = {km: number, kg:number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km :Km) {
    console.log(`O veiculo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg:1000
}

showKm(newCar.km)

// 8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

//                   existe dentro do Testo o metodo showNumber() ? se sim string se não boolean
type myTypeB = Teste extends {showNumber(): number} ? string : Boolean

const someVar: myType = 5
// const someVar2: myType = "Teste" erro de tipagem 

// 9 - template literals type
// É uma forma de customizar tipos de maneiras infinitas

type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"
// const testing2: CustomType = "some text 2" erro tipagem 

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`




