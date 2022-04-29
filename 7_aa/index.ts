// 1 - generics
function showDate<T>(argumento: T): string{
    return `O dado é: ${argumento}`
}

//console.log(showDate(5))
//console.log(showDate("testando generic"))
//console.log(showDate(true))
//console.log(showDate(["teste", ""]))


// 2 - GENERICS CONSTRAINT