let palavra = prompt('Informe uma palavra para verificar se é um palíndromo')
let palavraInvertida = ''

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
    console.log(palavra[i]);
    
}

if (palavra === palavraInvertida) {
    alert(palavra + " É um palíndromo")
} else {
    alert(
        palavra + ' não é um palíndromo!!\n\n' +
        palavra + " !== " + palavraInvertida)
}