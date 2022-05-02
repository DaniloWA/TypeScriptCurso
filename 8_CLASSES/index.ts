// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const danilo = new User()

danilo.name = "Danilo"
// danilo.job = "Programmer" só pode por prioridades que já existem na classe no molde

// 2 - CONSTRUCTOR
class NewUser {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("João", 22)

console.log(joao)

// const pedro = new NewUser("Pedro", "22")

// 3 - campo readonly

class Car {
    name
    readonly wheels = 4

    constructor(name: string){
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)
console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

// fusca.wheels = 5 readyonly

// 4 - herança e super

class Machine {
    name

    constructor(name:string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - métodos

class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimy = new Dwarf("Jimmy") 

console.log(jimy.name)

jimy.greeting()

console.log(jimy)

// 6 - this 
class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetais(){
        console.log(`Caminhão do modelo: ${this.model} , que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetais()
scania.showDetais()

// 7 getters(get) ler as propriedades"

class Person {
    name
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return this.name + " " + this.surname
    }
}

const danilod = new Person("Danilo", "Oliveira")

console.log(danilod)

// chamar como se fosse uma propriedade sem as () no final do metado
console.log(danilod.fullName)

// 8 - seters (set)

class Coords {
    x!: number
    y!: number
    
    set fillx(x:number){
        if(x === 0) {
            return
        }

        this.x = x

        console.log("X inserido com sucesso!")
    }

    set filly(y:number){
        if(y === 0) {
            return
        }

        this.y = y

        console.log("y inserido com sucesso!")
    }
    
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 0

// 9  implements herança interface classe bemm parecida com extends/ padronizar alguns metodos evitando repetição

interface showTile {
    itemTitle(): string
}

class blogPost implements showTile {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return`O titulo do post é: ${this.title}`
    }
}

const myPost = new blogPost("Hello world")

console.log(myPost.itemTitle())

class TestingInterface implements showTile {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return`O titulo é: ${this.title}`
    }
}

// 10 Override
// É uma tecnica utilizada para substituir um método de uma classe que herdamos algo
// criar com o mesmo nome subistitui o metado

class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
    showName(){

    }
}

class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa")
    }
}

const myObject = new Nova()

myObject.someMethod()

// 11 - public é o padrão default! ja vem publico!

class C {
   public x: number = 10
}

class D extends C {

}


const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

// 12 - protected
// pode ser utilizado apenas em subclasses. Uma propriedade só pode ser acessada por um método

class E {
    protected x: number = 10

    protected protectedMethod() {
        console.log("Esse metodo é protegido!")
    }
}

class F extends E {
    showX(){
        console.log("X: " + this.x)
    }

    showProtectedMethodo(){
        this.protectedMethod()
    }
}

const fInstance = new F()

fInstance.showX()
// console.log(fInstance.x) no metodo protect apenas da pra acessar propriedades por metodos 


// fInstance.protectedMethod() como as propiedads os metodos tambem só podem ser acessado por metodos.
fInstance.showProtectedMethodo()


// 13 - private propiedades e objetos ´so podem ser acessados na classe que os definiu! e ainda precisam de metodos para serem acessados!

class PrivateClass {
    private name = "Private"

    showName(){
        return this.name
    }

    private privateMethod() {
        console.log("Método privado!")
    }

    showPrivateMethod(){
        return this.privateMethod()
    }
}

const pObj = new PrivateClass()

//console.log(pObj.name) privado apenas da pra acessar com metodos da propria classe!

console.log(pObj.showName())

//console.log(pObj.privateMethod()) privado apenas da pra acessar com metodos da propria classe!

console.log(pObj.showPrivateMethod())


class TestingPrivate extends PrivateClass{
    MyMethod() {
        // this.privateMethod()  só pode acessar com a propria classe que criou 
    }
}



// 14 - static members
// Faz com que o acesso ou a utilização não dependam de objetos, Podemos utilizalos a partir da própria classe 

class StaticMembers {
    static prop = "Teste static"

    static staticMethod(){
        console.log("Este é um método estático")
    }
}

// console.log(StaticMembers.prop) sem o static ela não é acessível fora do objeto 
StaticMembers.prop


// 15 - generic class
class Item<T, U>{
    first
    second

    constructor(first: T, second:U){
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }
}

const newItem = new Item("Caixa", "Surpresa")

console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.first)

const secondItem = new Item(12, true)

console.log(secondItem)
console.log(secondItem.showFirst)
console.log(typeof secondItem.first)


// 16 - Parameters properties
// É um recurso para definir a privacidade , nome e tipo das propriedades no constructor

class ParametersProperties {
    constructor(public name: string, private qty: number, private price: number){
        this.name = name
        this.qty = qty
        this.price = price 
    }

    get showQty(){
        return `Qty total: ${this.qty}`
    }
    get showPrice(){
        return `Qty total: ${this.price}`
    }
}

const newShirt = new ParametersProperties("Camisa", 5, 19.00)

console.log(newShirt.name)
//console.log(newShirt.price) da erro porque price é privado.

console.log(newShirt.showPrice)
console.log(newShirt.showQty)


// 17 - class expressions
// É um recurso para criar uma classe anônima, encapsular a classe em uma variavel

const myClass = class<T> {
    name
    
    constructor(name: T){
        this.name = name
    }
}

const pessoa = new myClass("jONES")

console.log(pessoa)

console.log(pessoa.name)


// 18 - Abstract class
// é um recurso para servir como model de outra classe! Todos os métodos dela devem ser impementados nas classes que a herdam. um Molde de classes!

abstract class AbstractClass {
    abstract showName(): void
}

//const newObj = new AbstractClass(); não é possivel criar instancias de uma classe abstrata apenas extender 

class AbstractExample extends AbstractClass {
    name:string

    constructor(name: string){
        super() // Super porque ela faz um herança é obrigatorio
        this.name = name
    }

    showName(): void { // é obrigado a criar os mesmos metodos da classe abstract
        console.log(`O nome é ${this.name}`)
    }
}

const newAbstractObject = new AbstractExample("Josias")

newAbstractObject.showName()

// 19 - Relações entre classes

class Dog {
    name!: string // o ! define a propiedade como opicional! 
}

class Cat {
    name!: string // o ! define a propiedade como opicional! 
}


const doguinho: Dog = new Cat() // não reclama porque valida as partes internas não o nome da identidade mas não é costume. e nem boa pratica

console.log(doguinho) // fica com a instancia de Cat apesar de ter sido tipado como Dog.