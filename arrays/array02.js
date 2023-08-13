let arr = [4, 5, 10, 20, 35, 4, 5]

console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(5));
console.log(arr.includes(5));

//retorna elemento do array maior q 10
console.log(arr.find(function(el){
    return el > 10
}));