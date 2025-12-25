function register(element) {
    const username = element.children.username.value
    // element é o ELEMENTO que está vindo como parâmetro
    // .children é os filhos do elemento
    // .username é o (ID) do INPUT
    // .value pega o valor do INPUT

    const password = element.children.password.value
    // element é o ELEMENTO que está vindo como parâmetro
    // .children é os filhos do elemento
    // .password é o (ID) do INPUT
    // .value pega o valor do INPUT

    const passwordConfirmation = element.children.passwordConfirmation.value
    // element é o ELEMENTO que está vindo como parâmetro
    // .children é os filhos do elemento
    // .passwordConfirmation é o (ID) do INPUT
    // .value pega o valor do INPUT

    console.log(username, password, passwordConfirmation);

    if (password === passwordConfirmation) {
        alert('usuário ' + username + ' registrado!')
    } else {
        alert('As senhas não conferem!')
    }
}