//---------------------------------------------------------ADICIONAR EVENTO

function register(ev) {
    console.log(ev);
    const sectionElement = ev.currentTarget.parentNode
    // Acessou o evento(ev)
    // Pegou o alvo do evento(Target)
    // Pegou o NÓ pai(parentNode)

    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert('Usuário ' + username + ' registrado!')
    } else {
        alert('As senhas não conferem!')
    }
}
//---------------------------------------------------------ADICIONAR EVENTO

const button = document.getElementById('register-button')   // Serve para pegar o BOTÃO pelo (ID)

button.addEventListener('click', register)  // Passar a função sem () para NÃO pegar os resultados
// Serve para adicionar uma funcionalidade no botão para ele ficar esperando esses EVENTOS acontecerem 

//--------------------------------------------------------REMOVER EVENTO

function removeListener() {
    button.removeEventListener('click', register)   // VARIÁVEL e informar qual evento quer remover
    alert('Evento removido!')
}

//----------------------------------------------------------ADICIONAR EVENTO

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget);
})
