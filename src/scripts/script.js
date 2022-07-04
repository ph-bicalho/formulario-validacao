const nomeErro= document.getElementById('nome-erro')
const emailErro= document.getElementById('email-erro')
const telefoneErro= document.getElementById('telefone-erro')
const mensagemErro = document.getElementById('mensagem-erro')

const nomeInput =document.getElementById('nome')
const emailInput =document.getElementById('email')
const telefoneInput =document.getElementById('telefone')
const mensagemInput = document.getElementById('mensagem')
const todosInputs = [nomeInput, emailInput, telefoneInput, mensagemInput]

const enviarBtn = document.getElementById('enviar')


    // detectando se os inputs estão vazios, 
// se estiver colocar borda vermelha e adicinando a mensagem de errro

enviarBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if (nomeInput.value == ''){
        nomeErro.style.display = 'block'
        nomeInput.style.borderColor = 'red'
    }else{
        nomeInput.style.borderColor= 'lightGreen'
        nomeErro.style.display = 'none'
    }
    if (emailInput.value == ''){
        emailErro.style.display = 'block'
        emailInput.style.borderColor = 'red'
    }else{
        emailInput.style.borderColor= 'lightGreen'
        emailErro.style.display = 'none'
    }
    if (telefoneInput.value == ''){
        telefoneErro.style.display = 'block'
        telefone.style.borderColor = 'red'
    }else{
        telefoneInput.style.borderColor= 'lightGreen'
        telefoneErro.style.display = 'none'
    }
    if (mensagemInput.value == ''){
        mensagemErro.style.display = 'block'
        mensagem.style.borderColor = 'red'
    }else{
        mensagemInput.style.borderColor= 'lightGreen'
        mensagemErro.style.display = 'none'
    }

    if (nomeInput.value != '' && emailInput.value != '' && telefoneInput.value != '' && mensagemInput.value != '' ){
        alert('mensagem enviada!')
        
    } 
})
    
    // colocando bordas verdes quando o input é mudado

nomeInput.addEventListener('change', () => {
    
    if (nomeInput.value > ''){
        nomeInput.classList.add('border-verde')
    }else{
        nomeInput.classList.remove('border-verde')
    }
})
emailInput.addEventListener('change', () => {
    
    if (emailInput.value > ''){
        emailInput.classList.add('border-verde')
    }else{
        emailInput.classList.remove('border-verde')
    }
});

telefoneInput.addEventListener('change', () => {
    
    if (telefoneInput.value > ''){
        telefoneInput.classList.add('border-verde')
    }else{
        telefoneInput.classList.remove('border-verde')
    }
})
mensagemInput.addEventListener('change', () => {
    
    if (mensagemInput.value > ''){
        mensagemInput.classList.add('border-verde')
    }else{
        mensagemInput.classList.remove('border-verde')
    }
})

