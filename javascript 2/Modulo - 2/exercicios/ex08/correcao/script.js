const imoveis = []  // Declara um ARRAY vazio
let opcao = ''      // Declara um ARRAY vazio

do {

    opcao = prompt(
        'Bem-vindo(a) ao Cadastro de Imóveis!\n' +
        'Total de Imóveis: ' + imoveis.length +                                 // Serve para exibir o TAMANHO do ARRAY
        '\n\nEscolha uma opção: \n1. Novo imóvel\n2. Listar imóveis\n3. Sair'
    )

    switch (opcao) {
        case '1':
            const imovel = {}   // Declara um ARRAY vazio

            imovel.proprietario = prompt('Informe o nome do proprietário:')     // Para modificar um OBJETO é só usar (.UMA VARIÁVEL)
            imovel.quartos = prompt('Informe a quantidade de quartos')          // Para modificar um OBJETO é só usar (.UMA VARIÁVEL)
            imovel.banheiro = prompt('Informe a quantidade de banheiros')       // Para modificar um OBJETO é só usar (.UMA VARIÁVEL)
            imovel.garagem = prompt('Possui garagem? (Sim/Não)')                // Para modificar um OBJETO é só usar (.UMA VARIÁVEL)

            const confirmacao = confirm(                                        // Serve para exibir um CONFIRME para o usuário
                'Salvar este imóvel?\n' +
                '\nProprietário: ' + imovel.proprietario +                      // Para exibir o VALOR de um OBJETO é só usar (OBJETO.VARIÁVEL)
                '\nQuartos: ' + imovel.quartos +                                // Para exibir o VALOR de um OBJETO é só usar (OBJETO.VARIÁVEL)
                '\nBanheiros: ' + imovel.banheiro +                             // Para exibir o VALOR de um OBJETO é só usar (OBJETO.VARIÁVEL)
                '\nPossui garagem? ' + imovel.garagem                           // Para exibir o VALOR de um OBJETO é só usar (OBJETO.VARIÁVEL)
            )

            if (confirmacao) {                                                  // Confirmação(confirm) retorna TRUE ou FALSE SE for TRUE faça isso:
                imoveis.push(imovel)                                            // Serve para colocar o OBJETO dentro do ARRAY
                alert('Imóvel salvo com sucesso!')
            } else {
                alert('Voltando ao menu')
            }

            break
        case '2':

            for (let i = 0; i < imoveis.length; i++) {                          // Serve para PERCORRER todos os VALORES do ARRAY 
                alert(
                    'imovel ' + (i + 1) +                                       // Serve para SOMAR (i + 1) para NÃO começar em 0
                    '\nProprietário: ' + imoveis[i].proprietario +              // Para exibir o VALOR de um ARRAY é só usar (ARRAY[ÍNDICE].VARIÁVEL)
                    '\nQuartos: ' + imoveis[i].quartos +                        // Para exibir o VALOR de um ARRAY é só usar (ARRAY[ÍNDICE].VARIÁVEL)
                    '\nBanheiros: ' + imoveis[i].banheiro +                     // Para exibir o VALOR de um ARRAY é só usar (ARRAY[ÍNDICE].VARIÁVEL)
                    '\nPossui garagem? ' + imoveis[i].garagem                   // Para exibir o VALOR de um ARRAY é só usar (ARRAY[ÍNDICE].VARIÁVEL)
                )
            }

            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')

    }
} while (opcao !== '3')