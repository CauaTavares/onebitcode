let dinheiro = parseFloat(prompt('Informe a quantia de dinheiro inicial:'))
let menu = '3'

do {
    menu = prompt('Você possui ' + dinheiro + ' de dinheiro' + '\nEscolha uma alternativa:\n1) Adicionar \n2) Sacar \n3) Sair')

    switch (menu) {
        case '1':
            // let adicionar = parseFloat(prompt('Informe quanto quer adicionar:'))
            // dinheiro += adicionar

            dinheiro += parseFloat( prompt('Informe quanto quer adicionar') )
            break
        case '2':
            // let subtrair = parseFloat(prompt('Informe quanto que sacar:'))
            // dinheiro -= subtrair

            dinheiro -= prompt('Informe quanto de dinheiro quer remover')
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }

} while (menu != '3')
    // MENU é diferente de 3? Sim ele é (1, 2) então a condição é VERDADE então ele repete

    // SE (MENU) receber 3 ele NÃO é diferente de 3 então a condição se torna FALSA ele ENCERRA

