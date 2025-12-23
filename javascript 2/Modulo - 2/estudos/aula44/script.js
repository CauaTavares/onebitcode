let pokemon = 'Charmander'          // SE a VARIÁVEL é criada FORA de RAMIFICAÇÃO 

function evoluir() {
    pokemon = 'Chameleon'           // E modificada DENTRO de uma RAMIFICAÇÃO 
}

console.log(pokemon);               // FUNCIONA normal
evoluir()
console.log(pokemon);               // FUNCIONA normal

//-----------------------------------

function criarAnimal() {
    let animal = 'Gato'             // SE a VARIÁVEL é criada DENTRO de uma RAMIFICAÇÃO
}

criarAnimal()
console.log(animal);                // E chamada FORA da RAMIFICAÇÃO NÃO FUNCIONA

//----------------------------------

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = 'Aprovado'
    } else {
        var aprovado = false
        let situacao = 'Reprovado'
    }

    console.log(nota);
    console.log(aprovado);
    console.log(situacao);
}

avaliarNota(83)
avaliarNota(49)





