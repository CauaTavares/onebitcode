//----------------------------------------------TRIÂNGULO
function triangulo() {                                              // Cria a função (triangulo())
    let base = prompt('Informe a base do triângulo:')               
    let altura = prompt('Informe a altura do triângulo:')           
    return base * altura / 2                                        // RETORNA a operação (não precisa guardar o resultado da operação em uma VARIÁVEL)
}

//-------------------------------------------- RETÂNGULO

function retangulo() {                                              // Cria a função (retângulo())
    let base = prompt('Informe a base do retângulo:')
    let altura = prompt('Informe a altura do retângulo:')
    return base * altura                                            // RETORNA a operação (não precisa guardar o resultado da operação em uma VARIÁVEL)
}

//--------------------------------------------- QUADRADO

function quadrado() {                                               // Cria a função (quadrado())
    let lado = prompt('Informe o comprimento do lado do quadrado:')
    return lado * lado                                              // RETORNA a operação (não precisa guardar o resultado da operação em uma VARIÁVEL)
}

//-------------------------------------------TRAPÉZIO

function trapezio() {                                                               // Cria a função (trapezio())
    let baseMenor = parseFloat(prompt('Informe o comprimento da base menor:'))
    let baseMaior = parseFloat(prompt('Informe o comprimento da base maior:'))
    let altura = prompt('Informe a altura do trapézio:')
    return (baseMenor + baseMaior) * altura / 2                                     // RETORNA a operação (não precisa guardar o resultado da operação em uma VARIÁVEL)
}

//-------------------------------------------CÍRCULO

function circulo() {                                               // Cria a função (quadrado())
    let raio = prompt('Informe o raio do círculo')
    return (3.14 * raio * raio)                                    // RETORNA a operação (não precisa guardar o resultado da operação em uma VARIÁVEL)
}


function exibirMenu() {     // Cria a função (exibirMenu())

    return prompt('Escolha uma opção: \n1. Área do triângulo:\n2. Área do retângulo:\n3. Área do quadrado:\n4. Área do trapézio:\n5. Área do círculo:\n6 Encerrar:')
}

function executar() {   // Cria a função (executar())
    let opcao = ''      

    do {
        opcao = exibirMenu()    // Cria a função (exibirMenu())
        let resultado

        switch (opcao) {
            case '1':

                resultado = triangulo()     // Serve para chamar a FUNÇÃO criada
                break
            case '2':

                resultado = retangulo()     // Serve para chamar a FUNÇÃO criada
                break
            case '3':

                resultado = quadrado()      // Serve para chamar a FUNÇÃO criada
                break
            case '4':

                resultado = trapezio()      // Serve para chamar a FUNÇÃO criada
                break
            case '5':

                resultado = circulo()       // Serve para chamar a FUNÇÃO criada
                break
            case '6':
                alert('Encerrando...')
                break
            default:
                alert('Opção inválida!')
        }

        // Se a FUNÇÃO (executar()) for chamada faça isso:
        if (resultado) {                        
            alert('Resultado: ' + resultado)
        }

    } while (opcao !== '6')
}

executar()  // Chama a FUNÇÃO (executar())