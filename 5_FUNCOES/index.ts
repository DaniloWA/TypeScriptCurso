// 1 - void
function withoutReturn():void{
    console.log("Está função não tem retorno!")
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string){

    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Danilo")
preGreeting(greeting, "Joao")

// 3 - Generic functions
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2,true]))
console.log(firstElement(["dada",2,{1:2}]))
//console.log(firstElement("oi")) erro de tipagem

function mergeObjects<U, T>(obj1: U, obj2: T){
    return{
        ...obj1,
        ...obj2
    }
}
const newObject = mergeObjects({name:" Danilo"}, {age: 30, job:"Programmer"})

console.log(newObject)

// 4 - Constraints
function biggestNumber<T extends number | string>(a: T,b:T):T{
    let biggest: T
    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("35","3"))
//console.log(biggestNumber("!",true)) erro de tipagem dois tipos diferentes por usar só um generic entende que tem que ser do mesmo tipo teria que usar dois generics pra ter dois tipos diferentes 

// 5 - especificar tipo de argumento
function mergeArray<T>(arr1: T[],arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArray([1,2,3], [2,5,7]))
console.log(mergeArray<number | string>([1,2,3], ["teste","ds7"]))

// 6 - paramentros opcionais
function moderGreeting(name: string, greet?: string){
    if(greet)
        return `Olá ${greet} ${name}, tudo bem ?`
    if(!greet)
     return `Olá ${name}, tudo bem ?`
}       

console.log(moderGreeting("Danilo"))
console.log(moderGreeting("Danilo","Senhor"))

// 7 - paramentros default
function somaDefault(n: number, m = 10){
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15,20))

// 8 - unknown
function doSomething(x: unknown){
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number") {
        console.log("x é um número")
    }
}

doSomething([1, 2, 3])
doSomething(5)

// 9 - never
function showErrorMessage(msg: string): never{
    throw new Error(msg)
}


// showErrorMessage("Algum erro")

// 10 Rest operator
function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5))
console.log(sumAll(5,352,3231))
// console.log(sumAll("1,131,3,4,5") erro tipagem

// 11 Destruction como parametro

function showProdctDetails({name, price}: {name: string, price: number}):string{
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProdctDetails(shirt))
// console.log(showProdctDetails([1,2]))
// console.log(showProdctDetails({name: "teste", age:30}))