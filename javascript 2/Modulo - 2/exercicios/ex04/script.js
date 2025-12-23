let nome = window.prompt('Informe seu nome:')
let cidades = ''
let quantidade = 0

let jaVisitou = window.prompt('Já visitou alguma cidade? (sim/nao)')

while (jaVisitou === 'sim') {
    let cidade = window.prompt('Informe o nome da cidade: ')
    
    cidades += cidade + "\n"
    quantidade++

    jaVisitou = window.prompt('Já visitou alguma outra? (sim/nao)')
}

window.alert(`Parabéns ${nome} você já visitou ${quantidade} cidades ${cidades}`)
