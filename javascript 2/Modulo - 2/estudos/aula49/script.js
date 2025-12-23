function somar (a, b) {
    return a + b
}

// Quando se usa os PARÊNTESES na frente da FUNCÃO significa que a VARIÁVEL recebe o RESULTADO de somar()
// operacao = somar() <- Recebe o resultado de SOMAR
// operacao = somar <- Significa que OPERACAO é IGUAL a FUNCÃO SOMAR
let operacao = somar             
console.log(operacao(4, 5));   
// Operacao RECEBE a FUNÇÃO SOMAR então executa a FUNÇÃO SOMAR()


// FUNÇÃO ANÔNIMA não pode existir sem estar DENTRO de uma VARIÁVEL
operacao = function (a, b) { 

// A VARIÁVEL RECEBE e GUARDA o VALOR da FUNÇÃO
    return a - b
}

console.log(operacao(4, 5));
// A VARIÁVEL (OPERACAO) recebeu (somar) depois recebeu a FUNÇÃO ANÔNIMA


//----------------------------------------------------------------

olaMundo()

function olaMundo() {
    console.log('Olá, Mundo!');     
}

const oiMundo = function () {        // Primeiro criar a FUNÇÃO
    console.log('Oi, Mundo!');
}

oiMundo()  // Para chamar a FUNÇÃO ANÔNIMA precisa primeiro CRIAR ela