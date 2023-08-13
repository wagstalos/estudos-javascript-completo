// Função que será chamada como parâmetro
function funcaoSecundaria() {
    console.log("Esta é a função secundária sendo chamada!");
  }
  
  // Função que recebe outra função como parâmetro e a chama
  function funcaoPrincipal(outraFuncao) {
    console.log("Esta é a função principal.");
    outraFuncao(); // Chamando a outra função passada como parâmetro
  }
  
  // Chamando a função principal e passando a função secundária como argumento
  funcaoPrincipal(funcaoSecundaria);
  