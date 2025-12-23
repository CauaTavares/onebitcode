let valor = window.parseFloat(prompt('Informe um valor em metros:'))
let opcao = window.parseFloat(prompt('Informe qual opção converter: \n1) Milímitro(mm) \n2) centímetro(cm) \n3) decímetro(dm) \n4) decâmetro(dam) \n5) hectômetro(hm) \n6) quilômetro(km)'))

let milimetro = valor * 1000
let centimetro = valor * 100
let decimetro = valor * 10
let decametro = valor / 10
let hectometro = valor / 100
let quilometro = valor / 1000


switch (opcao) {
    case 1:
        alert(`Resultado: ${valor} metros em milímetros são: ${milimetro} mm`)
        break
    case 2: 
        alert(`Resultado: ${valor} metros em centímetros são: ${centimetro} cm`)
        break
    case 3:
        alert(`Resultado: ${valor} metros em decímetros são: ${decimetro} dm`)
        break
    case 4:
        alert(`Resultado: ${valor} metros em decâmetros são: ${decametro} dam`)
        break
    case 5: 
        alert(`Resultado: ${valor} metros em hectômetros são: ${hectometro} hm`)
        break
    case 6:
        alert(`Resultado: ${valor} metros em quilômetros são: ${quilometro} km`)
        break
    default:
        alert('Opção inválida! Finalizando...')
}