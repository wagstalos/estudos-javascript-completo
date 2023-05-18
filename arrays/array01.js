const arr = [1, 5, 10, "ola", true]

let onlyNumber = arr.some( function(el) {
    return typeof el === 'number' && el > 20
})

const numbersOnly = arr.filter(itemArr => typeof itemArr === 'number');

console.log(numbersOnly);