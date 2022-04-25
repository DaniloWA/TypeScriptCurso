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