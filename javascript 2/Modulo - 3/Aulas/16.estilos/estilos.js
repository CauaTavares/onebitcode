function useLightTheme() {
    document.body.style.color = '#212529'                       // Serve para acessar a ÁRVORE DOM e mudar a cor da letra
    document.body.style.backgroundColor = '#f1f5f9'             // Serve para acessar a ÁRVORE DOM e mudar a cor de fundo
}

function useDarkTheme() {
    document.body.style.color = '#f1f5f9'                       // Serve para acessar a ÁRVORE DOM e mudar a cor da letra
    document.body.style.backgroundColor = '#212529'             // Serve para acessar a ÁRVORE DOM e mudar a cor de fundo
}

function switchTheme() {
    document.body.classList.toggle('is-ligth')                      // (toggle) Serve para alternar (se o elemento TIVER a classe ele REMOVE) SE NÃO (ele ADICIONA) 
    document.body.classList.toggle('is-dark')                       // (toggle) Serve para alternar (se o elemento TIVER a classe ele REMOVE) SE NÃO (ele ADICIONA)
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)    // Serve para pegar o BOTÃO e passar um EVENTO de 'click' nele
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)      // Serve para pegar o BOTÃO e passar um EVENTO de 'click' nele
document.getElementById('switchBtn').addEventListener('click', switchTheme)     // Serve para pegat o BOTÃO e passar um EVENTO de 'click' nele