const arr = [
    '1º nivel',
    ['2º nivel', 42, true],
    [
       ['3º nivel, 1º item', 'Olá, mundo!']
       ['3º nivel, 2º item', 'oi, mundo!']

    ]
]

console.log(arr);           // Chama o ARRAY como um todo
console.log(arr[0]);        // Chama o NIVEL 1
console.log(arr[1]);        // Chama o NIVEL 2 como um todo
console.log(arr[1][0]);     // Chama o NIVEL 2 e o VALOR 0 que está dentro dele(2º nivel)
console.log(arr[1][1]);     // Chama o NIVEL 2 e o VALOR 1 que está dentro dele(42)
console.log(arr[2]);        // Chama o NIVEL 3 como um todo
console.log(arr[2][1]);     // Chama o NIVEL 3 e o VALOR 1 dentro dele(2º item)
console.log(arr[2][1][1]);  // Chama o NIVEL 3 e o VALOR 1 dentro dele e o ITEM 1 dentro dele('oi, mundo!')


const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

// console.table(matriz);

// matriz.push(['nova linha'])     // Vai criar um novo ARRAY em baixo de tudo
// matriz[0].push('Nova coluna')   // Vai para atrás do 'c4'

// console.table(matriz)



for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log('posição: (' + i + ', ' + j + ') Valor: ' + elemento );
    }
}