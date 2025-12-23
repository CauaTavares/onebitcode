function calcularMedia(a, b) {     // Cria uma FUNÇÃO com o PARÂMETRO(a, b)
    const media = (a + b) / 2      // Cria uma VARIÁVEL que vai receber uma conta
    return media                   // RETURN (VARIÁVEL) Serve para poder usar a VARIÁVEL fora da FUNÇÃO
} 

const resultado = calcularMedia(7, 2) // Guarda na VARIÁVEL o RESULTADO de (calcularMedia 7 e 2 são o VALOR) do parâmetro

console.log(resultado); // Imprime na tela a MÉDIA do VALOR atribuido ao PARÂMETRO

//-------------------------------------------------------------

function criarProduto(nome, preco) {    // Cria uma FUNÇÃO com o PARÂMETRO(nome, preco)

    const produto = {                   // Serve para criar um OBJETO que recebe (nome, preco, estoque)
        nome,                           // É o mesmo que usar: nome: nome
        preco,                          // É o mesmo que usar: preco: preco
        estoque: 1
    }
    return produto               // RETURN (VARIÁVEL) Serve para poder usar a VARIÁVEL fora da função
}

console.log(criarProduto('Notebook Intel Core i3 8GB', 2500 ));

// Imprime na tela o (NOME do Notebook) o (PREÇO) e (ESTOQUE)
// Guarda na VARIÁVEL(notebook) e ATRIBUI os VALORES para os PARÂMETROS

//---------------------------------------------------------------------------

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5));

console.log(areaQuadrada(9));

//-------------------------------------------------------------------------


function ola() {        
    let texto = '...'
    return texto            // Nunca escrever código depois de um RETURN
    texto = 'olá, mundo'    // Nunca escrever código depois de um RETURN
    console.log(texto);     // Nunca escrever código depois de um RETURN
}

console.log(ola());

//------------------------------------------------------------------------

function maiorIdade(idade) {    // SE RETURN estiver dentro de um (IF) PODE existir outros RETURN
    if (idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(maiorIdade(29));
console.log(maiorIdade(13));


