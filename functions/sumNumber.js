
export function sumNumber(){
  let setResult = document.getElementById('result');
  const btn = document.querySelector('button');

  function sum(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let result = Number(n1) + Number(n2);
    
    setResult.textContent = result;
  }

  btn.addEventListener("click", sum)

}

sumNumber()