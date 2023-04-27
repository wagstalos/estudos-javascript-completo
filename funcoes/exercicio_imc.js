const btn = document.querySelector("button");
const getWeight = document.getElementById("n1");
const getHeight = document.getElementById("n2");
//console.log(getWeight);

function calcularIMC(peso, altura) {
  if (peso === undefined || altura === undefined) {
    throw Error("Need two parameters: weight and height");
  }

  return peso / (altura * altura);
}

function classificaIMC(imc) {
  if (imc <= 16.9) {
    return "Abaixo do peso";
  } else if (imc <= 18.4) {
    return "Normal";
  } else if (imc <= 24.9) {
    return "Acima do peso";
  } else if (imc <= 34.9) {
    return "Obesidade 1";
  } else if (imc <= 40) {
    return "Obesidade 2";
  } else {
    return "Obesidade 3";
  }
}


btn.addEventListener("click", () => {
    console.log(getWeight.value, getHeight.value);
    let imc = calcularIMC(getWeight.value, getHeight.value);
    console.log(classificaIMC(imc));
    console.table(`seu imc é ${imc.toFixed(0)}`);
    document.getElementById("resultado").innerHTML = `Seu IMC é: ${imc.toFixed(0)}`;
    document.getElementById("resultadoText").innerHTML = ` ${classificaIMC(imc)}`;

    var porcentagem  =  imc * 100 / 50;


    console.log(porcentagem);
    let elemento = document.getElementById("pointer");

    if(porcentagem < 100){
        elemento.style.left = `${porcentagem.toFixed(0)}%`;
    }else{
        elemento.style.left = `100%`;
    }

});

