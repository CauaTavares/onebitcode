let menu = '5'

do {
    menu = prompt('Escolha uma alternativa:\n1)\n2)\n3)\n4)\n5) Encerrar')

    switch (menu) {
        case '1':
            alert('Opção 1 selecionada')
            break
        case '2':
            alert('Opção 2 selecionada')
            break
        case '3':
            alert('Opção 3 selecionada')
            break
        case '4':
            alert('Opção 4 selecionada')
            break
        case '5':
            alert('Você escolheu encerrar.')
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }
} while (menu != '5')