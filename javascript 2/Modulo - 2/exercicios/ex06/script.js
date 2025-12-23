let n1 = prompt('Informe um número entre (de 1 e 20) para calcular:')
let res = ''

for (let i = 1; i <= 20; i++) {
    let soma = i * n1
    res += `${i} X ${n1} = ${soma}\n`

}
window.alert(res);
