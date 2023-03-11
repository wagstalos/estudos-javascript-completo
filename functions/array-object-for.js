const pessoas = [
  { nome: "João", idade: 34 },
  { nome: "maria", idade: 2 },
  { nome: "Neusa", idade: 33 },
];

// for(let i=0; i < pessoas.length; i ++){
//   console.log(`Meu nome é ${pessoas[i].nome} e tenho ${pessoas[i].idade}`);
// }

pessoas.forEach(updtStudents);

function updtStudents(item, index, arr) {
  arr[index] = "Hello " + item.nome;
}

console.log(pessoas);
