//. push(), pop(), shift(), unshift(), slice(), splice()
let arr = [1, 3, 5, 7, 9];

let teste = arr.push(11, 15);

console.log(arr);
console.log(teste);

let ultimoitem = arr.pop();
console.log(ultimoitem);

let primeiroitem = arr.shift();
console.log("file: array05.js:13 ~ primeiroitem:", primeiroitem);

teste = arr.unshift(4, 5, 6);
console.log("file: array05.js:16 ~ teste:", teste);

let arr2 = arr.slice(2, 4);
console.log("~ file: array05.js:19 ~ arr2:", arr2);


let arr3 = arr.slice(2)
console.log(arr);
console.log("file: array05.js:23 ~ arr3:", arr3)

