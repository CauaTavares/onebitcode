let arr = ['caua', 'breno', 'tavares']
let menu = '3'
let posicao = ''
let lista = ''

do {

    let paciente = ''
    for (let i = 0; i < arr.length; i++) {
        paciente += (i + 1) + 'º - ' + arr[i] + '\n'

        // posicao = arr[i]
        // lista += i + 'º ' + posicao
    }

    menu = prompt(`${paciente} \nEscolha uma opção \n1) Novo paciente \n2) Consultar paciente \n3) Sair`)
    
    switch (menu) {
        case '1':
            arr.push(prompt('Informe o nome do novo paciente:'))
            break

        case '2':
            let removerPaciente = arr.shift()
            alert(`Paciente ${removerPaciente} removido!`)
            break
            
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }
} while (menu != '3')