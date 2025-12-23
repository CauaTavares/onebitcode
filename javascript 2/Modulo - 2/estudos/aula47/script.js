let pessoa = {
    nome: 'caua',
    idade: 26,
    dizerOla() {
        console.log('Olá, mundo! Meu nome é ' + this.nome); // para chamar a VARIÁVEL de um OBJETO precisa colocar THIS.VARIÁVEL
    }
}

console.log(pessoa);

pessoa.dizerOla()       // O OBJETO "PESSOA" está chamando a FUNÇÃO "dizerOla()"
