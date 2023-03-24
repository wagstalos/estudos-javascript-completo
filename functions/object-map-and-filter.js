const produto = {
  nome: "caneta",
  qtd: 10,
  items: [
    { nome: "Caneta", id: 01, estoque: true },
    { nome: "lapis", id: 02, estoque: true },
    { nome: "caderno", id: 03, estoque: false },
  ],
};

produtos = [...produto.items];

//return name
let nomeProduto = produtos.map((data) => {
  return {
    item_name: data.nome,
  };
});

console.log(nomeProduto)

//filter in estoque
let filter = produtos.filter(d => 
    d.estoque == true
)

console.log(filter);
