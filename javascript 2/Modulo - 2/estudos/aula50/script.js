function calcular(a, b, operacao) {                 // OPERACAO Não está chamando uma FUNÇÃO ela É A FUNÇÃO EM SI
    console.log('Realizando uma operação.');
    const resultado = operacao(a, b) // somar(3, 5)
    return resultado
}
// Existe a FUNÇÃO (CALCULAR) e dentro dela tem uma outra FUNÇÃO que veio como parâmetro que é (OPERACAO)
// (CALCULAR é uma HIGH-ORDER FUNCTION)


function somar(x, y) {                          // somar() <- Vai retornar o RESULTADO
    console.log('Realizando uma soma.');        // somar <- Vai retornar a FUNÇÃO
    return x + y
}

console.log(calcular(3, 5, somar));             // Log está chamando o (CALCULAR que tem PARÂMETROS) (OPERACAO) vai receber (SOMAR) 

console.log(calcular(8, 4, function (x, y) {    // FUNÇÃO ANÔNIMA 
    console.log('Realizando uma operação.');
    return x - y
})) 

//------------------------------------------------------------------------

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    });
}

const lista = ['Maça', 'Banana', 'Laranja', 'Limão']

// for (let i = 0; i < lista.length; i++) {
//     exibirElemento(lista[i], i, lista)
// }

lista.forEach(exibirElemento)    // Maneira mais simples de fazer 

//-------------------------------------------------------------------------

lista.forEach(function (elemento, indice, array) {// SEMPRE nessa ordem
    console.log({
        elemento,
        indice,     // Não errar a ordem
        array
    });
})
