function dobro(x) {  // Parâmetro é uma VARIÁVEL que fica disponível dentro da FUNÇÃO mas só é executada na hora que chama a FUNÇÃO
    alert('O dobro de ' + x + ' é ' + (x * 2))
}

// dobro(5)
// dobro()

//-----------------------------------------------------------------

function dizerOla(nome = 'mundo') {
    alert('Olá, ' + nome + "!")
}

// dizerOla('caua')
// dizerOla()

//-----------------------------------------------------------------

function soma(a, b) {
    alert('O resultado da soma é ' + (a + b))
}

// soma(5, 10)

//-----------------------------------------------------------------

function criarUsuario(nome, email, senha, tipo) {
    const usuario = {
        nome,    
        email,  // Mesmo que usar nome: nome
        senha,
        tipo
    }
    console.log(usuario);   
}

//-----------------------------------------------------------------

                        // Maneira ERRADA de se fazer
function novoUsuario(nome, email = 'caua@123', senha, tipo ='admin') {       // quando for declarar um VALOR no PARÂMETRO SEMPRE deixar ele por ÚLTIMO
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario);
}

criarUsuario('caua', 'caua@email.com', '1234')
novoUsuario('caua', 'caua2email.com', '1234')

//-------------------------------------------------------------------------------------

function muitosParametros(nome, telefone, endereço, aniversaio, email, senha) {
    //...
}

function objetoComoParametro(usuario) {
    //...
    usuario.nome
    usuario.email
}

muitosParametros('nome', 'telefone')

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    endereço: '',
    aniversario: ''
}

objetoComoParametro(dadosDoUsuario)
