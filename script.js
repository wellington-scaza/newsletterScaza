document.getElementById("cadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
      "nome": document.getElementById("nome").value,
      "celular": document.getElementById("celular").value,
      "email": document.getElementById("email").value,
      "observacao": "",
      "tags": [],
      "origem": 12,
      "etapa": 50
    });
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://apisistema.eduqtecnologia.com.br//inscricao-online/interesse?dominio=scaza", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        document.getElementById("cadastro").reset();
    })
    .catch(error => console.error('Erro:', error));
});
