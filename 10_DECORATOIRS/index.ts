// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!")
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Executando decorator")
        console.log(target , "  TARGET")
        console.log(propertKey , "  propertKey")
        console.log(descriptor , "  descriptor")
    }
}

class myClass {
    name!: string
    @myDecorator()

    testing(){
        console.log("Terminando execução do método")
    }
}

const myObj = new myClass()

myObj.testing()