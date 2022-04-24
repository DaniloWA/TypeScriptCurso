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