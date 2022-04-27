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