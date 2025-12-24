let vagas = []
let objeto = {}

function listarVagas() {                                            // Cria a FUNÇÃO (listarVagas)
    let mensagem = '\n'                                             // Cria a VARIÁVEL que vai receber o RESULTADO
    vagas.forEach(function (elemento, indice) {                     // Percorre todo o elemento (não precisa usar o for)
        mensagem += `${indice + 1}: ${elemento.nomeVaga} \n`        // Sempre que o RESULTADO estiver dentro de uma repetição usar (+=)
    })
    return mensagem     // Sempre que for exibir uma mensagem de uma FUNÇÃO usar o (RETURN)
}

function criarNovaVaga() {
    const vaga = {}

    vaga.nomeVaga = prompt('Informe o nome da vaga:')
    vaga.descricao = prompt('Informe uma breve descricão da vaga:')
    vaga.dataLimite = prompt('Informe a data limite:')
    vaga.nomeCandidatos = []
    vaga.numeroCandidatos = vagas.length + 1


    let confirmar = confirm('Deseja confirmar?')

    if (confirmar) {
        vagas.push(vaga)
    }
    console.log(vagas);
    return
}

function visualizarVaga() {
    let msg = ''
    let numeroVaga = prompt(`Informe qual vaga gostaria de visualizar:\n ${listarVagas()}`)
    numeroVaga = Number(numeroVaga) - 1   // Converte para número e ajusta o índice

    // const vagaEscolhida = vagas[numeroVaga]

    const vagaEscolhida = vagas.find(function (elemento, indice) {
        return indice === numeroVaga
    })

    msg = `NOME: ${vagaEscolhida.nomeVaga}`

    return msg
}

function inscreverCandidado() {
    let nome = prompt('Informe o nome do candidato:')
    let indice = prompt(`Informe qual vaga gostaria de inscrever o candidato:\n ${listarVagas()}`)
    indice = Number(indice) - 1

    let confirmacao = confirm(`
        Nome do candidato: ${nome}\n
        Deseja confirmar?
        `)

    if (confirmacao) {
        vagas[indice].nomeCandidatos.push({ nome })
    }
}

function excluirVaga() {
    let indice = prompt("Informe qual vaga gostaria de remover")
    indice = Number(indice) - 1

    const elementoRemovido = vagas.splice(indice, 1) 
    let mensagem = `A vaga ${elementoRemovido[0].nomeVaga} foi removida!`
    
    
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
                resultado = inscreverCandidado()
                break
            case '5':
                resultado = excluirVaga()
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