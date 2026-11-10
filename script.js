const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzx2Gun0qOZrl9JoLzf86oYcUXC0kFXCIk3AEt9uPvgXkDPY38TvIsaUnw_jgCi9LU/exec";

const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")

form.addEventListener("submit", function(evento){
    evento.preventDefault() // impede que a página atualize
   
    aviso.textContent = "Enviando...";

    fetch(URL_PLANILHA,{
        method:"POST",
        mode: "no-cors",
        body: new FormData(form)
    })

    .then(function(){
        aviso.textContent = "Enviado com sucesso!";
        form.reset()
    })
    .catch(function(){
        aviso.textContent = "Erro ao enviar. Tente de novo";
    })

})