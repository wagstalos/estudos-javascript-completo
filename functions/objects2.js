const pessoa = {
    nome: 'Maria',
    idade: 2,
    email: 'maria.liz@gmail.com'
}

console.log(pessoa);

for(let prop in pessoa){
    console.log(prop);
    console.log(pessoa[prop]);
}