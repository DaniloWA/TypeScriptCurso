// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers)

// numbers = "teste" vai dar erro!

const nomes: string[] = ["Danilo", "João"]

// nomes.push(4) vai dar erro!

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200, 3]

nums.push(300)

console.log(nums)

// nums.push("teste") vai dar erro!

// 3 - any
const arr1: any = [1, "teste", true, {nome:"matheus"}, []]

console.log(arr1)

arr1.push([1,2,3])

console.log(arr1)

// 4- parametros tipados

function soma(a:number , b:number) {
    console.log(a + b)
}
soma(5,5)

//soma("5a","d")

// 5- retorno funcção

function greeting(name:string): string {
    // return 5 erro de tipo
    return `Olá ${name}`
}

console.log(greeting("Danilo"))
// console.log(greeting(123)) erro de tipo

// 6 - função anonima
setTimeout(() => {
    const sallary: number = 1000
    //console.log(parseFloat(sallary)) erro de tipo na func anonima

    //console.log(sallary)
})

// 7 - Objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X cordinates: " + coord.x )
    console.log("Y cordinates: " + coord.y )
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

// passCoordinates({nome: 1, sobrenome: 2}) erro

// menos comum
const pessoaObj: {nome: string, surname: string} = {nome: "Danilo", surname: "Oliveira"}

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}

showNumbers(1,2,3)
showNumbers(1,2)
// showNumbers(1)

// 9 - validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined)
        return`Olá, ${firstName} ${lastName}, tudo bem?`

    return  `Olá, ${firstName}, tudo bem ?`
}

console.log(advancedGreeting("Danilo", "Oliveira"))
console.log(advancedGreeting("Pedro"))

// 10 - union type

function showBalance(balance: string | number) {
    console.log("O saldo da conta é R$" + balance)
}

showBalance("500")
showBalance(100)
//showBalance(true) erro de tipo

const arr2: Array<number | string | boolean> = [1, "teste" , true]

// 11 - avancando em union types
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean"){
        return "Usuario não aprovado!"
    }

    return `A função do usuario é: ${role}`

}

console.log(showUserRole(false)) 
console.log(showUserRole("Admin")) 

// 12 - Type alias

type ID = string | number

function showID(id: ID) {
    console.log(`O ID É ${id}`)
}
showID(1)
showID("200")
showID(123)

// 13 - interface
interface Point{
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X ${obj.x} ${obj.y} ${obj.z}`)
}

const coordOBJ:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordOBJ)

// 14 - interface x type alias
// unica diferença que o Interface da pra ser alterado no decorrer do codigo o alias não!

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name:"Danilo", age: 25}

console.log(somePerson.name)

type personType = {
    name: string
}

/*
type personType = {
    age: number
}
*/

// 15 - literal types