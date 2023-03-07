const  arr = new Array()

const arr2 = new Array(true, "Wagner", 33, new Array(2,4,10))

arr[0] = "Wagner"
arr[1] = 40

console.log(arr)
//get last number of array
console.log(arr2[3][arr2[3].length -1])

const arr3 = ["novo array 3", 40, [3, 6, 9], true]

arr3[4] = 'a'
arr3[arr3.length] = 'b'
arr3.push(' push')

let n = 6;

console.log(arr3)
console.log(arr3[2])
console.log(arr3[n])