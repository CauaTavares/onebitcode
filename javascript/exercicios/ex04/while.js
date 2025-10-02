// VERSÃO DO PROFESSOR

const turista = prompt("Qual seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (sim/nao)")

while (continuar === "sim") {
    let cidade = prompt("Qual cidade?")
    // cidades = cidades + alguma coisa (outra cidade como pede no exercicio)
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (sim/nao)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)
