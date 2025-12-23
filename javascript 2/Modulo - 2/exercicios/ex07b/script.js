let arr = ['ouro']
let menu = '3'
let lista = arr

do {

    menu = prompt(`o baralho possui ${lista.length} cartas \n\nEscolha uma opção: \n1) Adicionar uma carta \n2) Puxar uma carta \n3) Sair`)

    switch (menu) {
        case '1':
            arr.unshift(prompt('Informe qual carta gostaria de adicionar'))

            // let novaCarta = prompt('Qual é a carta?')
            // arr.push(novaCarta)

            break
        case '2':
            let removerCarta = arr.shift()
            
            if (!removerCarta) {
                alert('Não há nenhuma carta no baralho!')
            } else {
                alert(`A carta ${removerCarta} foi removida`)
            }

            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }


} while (menu != '3')