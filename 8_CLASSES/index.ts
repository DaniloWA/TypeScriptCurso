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


