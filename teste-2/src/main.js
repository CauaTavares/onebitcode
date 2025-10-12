import './scss/styles.scss'

import { Dropdown, Modal, Carousel, Button, } from 'bootstrap'

document.getElementById('newPostBtnInput').addEventListener('click', () => {
    const modalElement = document.getElementById('postModal')
    const postModal = new Modal(modalElement)
    postModal.show()
    setTimeout(() => {
        document.getElementById('writePostInput').focus()
    }, 500)
})

// document.getElementById('themeSwitcher').addEventListener('click', () => {
//     const htmlElement = document.querySelector('html')
//     if (htmlElement.dataset.bsTheme === 'dark') {
//         htmlElement.dataset.bsTheme = 'light'
//     } else {
//         htmlElement.dataset.bsTheme = 'dark'
//     }
// })

// 1️ Acessa o documento HTML inteiro
// O objeto "document" representa toda a página carregada no navegador.
document
    // 2️ Procura o elemento com o ID "themeSwitcher"
    // É o botão que o usuário vai clicar para trocar o tema.
    .getElementById('themeSwitcher')

    // 3️ Adiciona um "ouvinte" de evento (listener)
    // Quando o botão for clicado, o código dentro da função será executado.
    .addEventListener('click', () => {

        // 4️ Pega o elemento <html> do documento
        // É nele que está o atributo data-bs-theme, usado pelo Bootstrap.
        const htmlElement = document.querySelector('html')

        // 5️ Verifica o valor atual do atributo data-bs-theme
        // "dataset" é um objeto que armazena todos os atributos data-* do elemento.
        if (htmlElement.dataset.bsTheme === 'dark') {

            // 6️ Se o tema atual for escuro, muda para claro
            htmlElement.dataset.bsTheme = 'light'
        } else {

            // 7️ Caso contrário (se estiver claro), muda para escuro
            htmlElement.dataset.bsTheme = 'dark'
        }
    })