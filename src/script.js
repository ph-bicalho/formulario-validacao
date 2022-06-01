/* OBJETIVO 1:
    - quando o input tiver conteúdo colocar borda verde OK
    - detectar digitação no input OK
    - mudar border  OK

    OBJETIVO 2
    - Quando for enviado vazio colocar borda vermelha
    - detectar envio
    - se conteúdo for vazio colocar borda vermelho
*/

const inputs = document.querySelectorAll('.formularioInput')
const botaoEnviar= document.querySelector('#enviar');
const formulario= document.querySelector("#formulario-contato")
const inputSolitario = inputs.forEach((input) =>{
    adicionarBorderVerde(input)
})
 function adicionarBorderVerde(input){
    input.addEventListener('change', function(){
        input.style.borderColor="#00C22B"
    })
 }
//pega o input individual 

 botaoEnviar.addEventListener('click', checkForm)

function checkForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var fone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;
    const inputSolitario = document.querySelectorAll(".formularioInput").forEach((input) => {
        input.style.borderColor="#ff0000"
    } )
    //Check input Fields Should not be blanks.
    if (nome == '' || email == '' || fone == '' || mensagem == '') {
        alert('algo errado')
        return false;
    } else {
        //Notifying error fields
        var name = document.getElementById("nome");
        var mail = document.getElementById("email");
        var telefone = document.getElementById("telefone");
        var mensagemp = document.getElementById("mensagem");
        //Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
        if (name.innerHTML == 'Nome' || mail.innerHTML == 'E-mail' || telefone.innerHTML == 'Telefone' || mensagemp.innerHTML == 'Sua Mensagem') {
        
            alert("Por favor, preencha o formul&aacute;rio com informa&ccedil;&otilde;es v&aacute;lidas");
            return false;
        } else {
            //Submit Form When All values are valid.
            document.getElementById("formulario-contato").submit();
        }
    }
}

// botaoEnviar.addEventListener("send", function(){
//     if{inputIndividual}

//se tiver vazio adiciona borda vermelho

  