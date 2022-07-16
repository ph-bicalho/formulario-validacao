const nomeErro = document.getElementById('nome-erro');
const emailErro = document.getElementById('email-erro');
const telefoneErro = document.getElementById('telefone-erro');
const mensagemErro = document.getElementById('mensagem-erro');

const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('telefone');
const mensagemInput = document.getElementById('mensagem');
const todosInputs = [nomeInput, emailInput, telefoneInput, mensagemInput];

const enviarBtn = document.getElementById('enviar');


    // detectando se os inputs estão vazios, 
// se estiver colocar borda vermelha e adicinando a mensagem de errro

enviarBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (nomeInput.value == ''){
        nomeErro.style.display = 'block'
        nomeInput.classList.add('erro')
    }

    if (emailInput.value == ''){
        emailErro.style.display = 'block'
        emailInput.classList.add('erro')
    }

    if (telefoneInput.value == ''){
        telefoneErro.style.display = 'block'
        telefoneInput.classList.add('erro')
    }

    if (mensagemInput.value == ''){
        mensagemErro.style.display = 'block'
        mensagemInput.classList.add('erro')
    }

    if (nomeInput.value != '' && emailInput.value != '' && telefoneInput.value != '' && mensagemInput.value != '' ){
        alert('mensagem enviada!')
        localStorage.getItem
    };
});
    
    // colocando bordas verdes quando o input é mudado

nomeInput.addEventListener('change', () => {
    
    if (nomeInput.value > ''){
        nomeInput.classList.add('sucesso')
        nomeInput.classList.remove('erro')
        nomeErro.style.display = 'none';
    }else{
        nomeInput.classList.remove('sucesso')
        nomeInput.classList.add('erro')
        
    };

});
emailInput.addEventListener('change', () => {
    
    if (emailInput.value > ''){
        emailInput.classList.add('sucesso')
        emailInput.classList.remove('erro')
        emailErro.style.display = 'none'
    }else{
        emailInput.classList.remove('sucesso')
        emailInput.classList.add('erro')
    
    };

});

telefoneInput.addEventListener('change', () => {
    
    if (telefoneInput.value > ''){
        telefoneInput.classList.add('sucesso')
        telefoneInput.classList.remove('erro')
        telefoneErro.style.display = 'none'
    }else{
        telefoneInput.classList.remove('sucesso')
        telefoneInput.classList.add('erro')
        
    };

});
mensagemInput.addEventListener('change', () => {
    
    if (mensagemInput.value > ''){
        mensagemInput.classList.add('sucesso')
        mensagemInput.classList.remove('erro')
        mensagemErro.style.display = 'none'
    }else{
        mensagemInput.classList.remove('sucesso')
        mensagemInput.classList.add('erro')
        
    };

});