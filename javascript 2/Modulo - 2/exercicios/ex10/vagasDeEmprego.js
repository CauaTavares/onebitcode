let vaga = []
let objeto = {}

function listarVagas() {
    let mensagem = '\n'
    vaga.forEach(function (elemento, indice) {
        mensagem += `${indice + 1}: ${elemento.nomeVaga} \n`
    })
    return mensagem
}

function criarNovaVaga() {
    let nomeVaga = prompt('Informe o nome da vaga:')
    let descricao = prompt('Informe uma breve descricão da vaga:')
    let dataLimite = prompt('Informe a data limite:')
    let candidatos = prompt('Informe os candidatos:')

    let confirmar = confirm('Deseja confirmar?')

    if (confirmar) {
        vaga.push({
            nomeVaga, 
            descricao, 
            dataLimite, 
            candidatos
        })
    }
    console.log(vaga);
    return
}

function visualizarVaga() {
    vaga.forEach(function (elemento, indice) {
        mensagem += `${indice + 1} ${elemento.nomeVaga}\n ${elemento.descricao}\n ${elemento.dataLimite}\n ${elemento.candidatos} `
    })
    console.log(mensagem);
    return mensagem
    
}


function exibirMenu() {
    return prompt('Escolha uma opção: \n1. Listar vagas disponiveis:\n2. Criar uma nova vaga:\n3. Visualizar uma vaga:\n4. Inscrever um candidato em uma vaga:\n5. Excluir uma vaga:\n6. Sair')
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case '1':
                resultado = listarVagas()
                break
            case '2':
                resultado = criarNovaVaga()
                break
            case '3':
                resultado = visualizarVaga()
                break
            case '4':
                alert('opcao quatro')
                break
            case '5':
                alert('opcao cinco')
                break
            case '6':
                alert('Saindo...')
                break
            default:
                alert('Opção inválida!')
        }

        if (resultado) {
            alert(`Resultado: ${resultado}`)
        }
    } while (opcao !== '6')
} 

executar()