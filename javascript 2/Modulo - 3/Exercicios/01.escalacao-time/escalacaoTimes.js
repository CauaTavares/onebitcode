function escalarJogador() {
    let posicao = document.getElementById('posicao')                    // Serve para guardar na VARIÁVEL o valor do INPUT
    let nome = document.getElementById('nome')                          // Serve para guardar na VARIÁVEL o valor do INPUT
    let numero = document.getElementById('numero')                      // Serve para guadar na VARIÁVEL o valor do INPUT
    let lista = document.getElementById('lista')                        // Serve para guadar na VARIÁVEL o valor do INPUT

    const confirmacao = confirm(`Gostaria de escalar esse jogador?`)    // Confirmação

    if (confirmacao) {                                                  
        const newli = document.createElement('li')                      // Serve para criar um ELEMENTO
        newli.id = 'jogador-' + numero.value                            // Serve para adicionar texto no ELEMENTO criado
        newli.innerText = `                                             
        Posição do jogador: ${posicao.value}                            
        Nome do jogador: ${nome.value}                                  
        Número da camisa: ${numero.value}                               
        `
        lista.appendChild(newli)                                        // Serve para ADICIONAR na página HTML o ELEMENTO criado 
    }

    posicao.value = ''                                                  // Serve para limpar o INPUT
    nome.value = ''                                                     // Serve para limpar o INPUT
    numero.value = ''                                                   // Serve para limpar o INPUT
}

function removerJogador() { 
    let numero = document.getElementById('numeroCamisa')                        // Serve para guadar na VARIÁVEL o valor do INPUT
    let playerRemove = document.getElementById('jogador-' + numero.value)       // Serve para pegar o ELEMENTO criado pelo ID 

    let confirmacao = confirm('Remover o jogador' + playerRemove.innerText)     // Confirmação

    if (confirmacao) {
        playerRemove.remove()                                                   // Serve para remover o ELEMENTO 
        numeroCamisa.value = ''                                                 // Serve para limpar o INPUT
    }
}