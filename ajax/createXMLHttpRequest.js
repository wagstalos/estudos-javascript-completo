
function createXMLHttpRequest(method, url, cb, data = null) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.send(data);

  xhr.onreadystatechange = verificaAjax;

  function verificaAjax() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        console.log("Resposta: ", typeof xhr.responseText);
        const json = JSON.parse(xhr.responseText);

        if (typeof cb === "function") {
          cb(json);
        }

        let createName = document.getElementById("name");
        createName.innerText += `${json[0].nome}`;
      } else if (typeof cb === "function") {
        //alert(`Erro: ${xhr.status}`);
        cb({
          status: xhr.status,
          message: "erro de conexão",
          obj:xhr.statusText
        });
      }
    }
  }
}
