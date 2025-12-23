const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr);

// Adicionar elementos por ultimo
// push
let tamanho = arr.push('Boromir')   
console.log(arr);
console.log(tamanho);

// Adiciona elementos no começo
// unshift
tamanho = arr.unshift('dracarys')
console.log(arr);
console.log(tamanho);

// Remover elementos no final
// pop
const ultimoElemento = arr.pop()
console.log(arr);
console.log(ultimoElemento);

// Remover elementos no começo
// shift
// ultimoElemento = arr.shift()
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um elementos
// includes
const inclui = arr.includes('Gandalf')
console.log(inclui);

// Pesquisar pelo INDÍCE
// indexOf
const indice = arr.indexOf('Gandalf')   // Descobre a posição exata no ARRAY (ex: 4)
console.log(indice);

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr);
console.log(hobbits);

// concat
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade);

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o cinzento')
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os elementos (como percorrer cada um dos ÍNDICES do ARRAY)
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i]
    console.log(elemento + ' se encontra na posição ' + i);
}

