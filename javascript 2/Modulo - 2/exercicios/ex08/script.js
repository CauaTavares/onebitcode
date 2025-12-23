let opcao = ''
let objeto = {}

do {

    opcao = window.prompt(`Imóveis cadastrados: ${JSON.stringify(objeto.length)} \n\nEscolha uma opção: \n1) Salvar um imóvel \n2) Mostrar todos os imóveis \n3) Sair`)

    switch (opcao) {
        case '1':

            objeto.nome = prompt('Informe o nome do proprietário:')
            objeto.quartos = prompt('Informe a quantidade de quartos')
            objeto.banheiro = prompt('Informe a quantidade de banheiros')
            objeto.garagem = prompt('Possui garagem? (sim/não)')
            break
        case '2':

            let resultado = JSON.stringify(objeto)

            alert(resultado)
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }

} while (opcao !== '3')