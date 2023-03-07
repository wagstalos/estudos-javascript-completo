const produto = {
  nome: "caneta",
  qtd: 10,
  comprar(n) {
    console.log(this);
    if (n > this.qtd) {
      return "quantidade não disponível";
    }
    this.qtd -= n;
  },

  teste1: function () {
    console.log(this);
  },
  teste2: () => {
    console.log(this);
  },
};

produto.comprar(3);
console.log(produto);

produto.comprar(11);
console.log(produto);
