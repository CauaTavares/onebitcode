// Variáveis globais úteis
const boardRegions = document.querySelectorAll('#gameBoard span')   // Serve para seleciona as regiões do tabuleiro
let vBoard = []                                                     // ARRAY vazio
let turnPlayer = ''                                                 // VARIÁVEL vazia

// Função para mostrar o nome do jogador da vez:

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer)               // A VARIÁVEL vazia (turnPlayer) vai receber sempre o valor digitado do primeiro e segundo INPUT
  document.getElementById('turnPlayer').innerText = playerInput.value   // Serve para mostrar na tela o nome que o USÚARIO digitou nos INPUTS
}

function initializeGame() {
  // Inicializa as variáveis globais 
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]                                   // ARRAY BIDIMENSIONAL
  turnPlayer = 'player1'                                                                // A VARIÁVEL (turnPlayer) recebe a string 'player1'

  // Ajusta o título da página (caso seja necessário)
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'      // Serve para selecionar o TÍTULO da página
  updateTitle()  
  
  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) {                                             // Serve para percorrer por todos os SPANS
    element.classList.remove('win')                                                     // Serve para remover a classe (win)
    element.innerText = ''                                                              // Serve para remover qualquer TEXTO do tabuleiro (X ou O)
    element.classList.add('cursor-pointer')                                             // Serve para adicionar o (cursor pointer)
    element.addEventListener('click', handleBoardClick)                                 // Serve para adicionar o EVENTO de clique na função (handleBoardClick)
  })
}
// Verifica se existem três regiões iguais em sequência e devolve as regiões
function getWinRegions() {
  const winRegions = []
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}
// Desabilita uma região do tabuleiro para que não seja mais clicável
function disableRegion(element) {
  element.classList.remove('cursor-pointer')                    // Serve para remover o cursor-pointer
  element.removeEventListener('click', handleBoardClick)        // Serve para remover o evento de click (evitando o usúario clicar varias vezes no mesmo lugar)
}
// Pinta as regiões onde o jogador venceu e mostra seu nome na tela
function handleWin(regions) {
  regions.forEach(function (region) {
    document.querySelector('[data-region="' + region + '"]').classList.add('win')
  })
  const playerName = document.getElementById(turnPlayer).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!'
}

function handleBoardClick(ev) {

  // Obtém os índices da região clicada
  const span = ev.currentTarget
  const region = span.dataset.region // N.N               // Serve para pegar cada atributo do SPAN
  const rowColumnPair = region.split('.') // ["N", "N"]   // Serve para colocar em ARRAY cada elemento tirando o (ponto)
  const row = rowColumnPair[0]                            // Serve para pegar o ÍNDICE na posição (0)
  const column = rowColumnPair[1]                         // Serve para pegar o ÍNDICE na posição (1)

  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === 'player1') {                         // Se for a vez do PLAYER1 faça isso:
    span.innerText = 'X'                                  // Imprime o (X) no site
    vBoard[row][column] = 'X'                             // Imprime o (X) no console
  } else {
    span.innerText = 'O'                                  // Imprime o (O) no site
    vBoard[row][column] = 'O'                             // Imprime o (O) no console
  }

  // Limpa o console e exibe nosso tabuleiro virtual
  console.clear()
  console.table(vBoard)

  // Desabilita a região clicada
  disableRegion(span)

  // Verifica se alguém venceu
  const winRegions = getWinRegions()
  if (winRegions.length > 0) {
    handleWin(winRegions)
  } else if (vBoard.flat().includes('')) {
    turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
    updateTitle()
  } else {
    document.querySelector('h2').innerHTML = 'Empate!'
  }
}

// Adiciona o evento no botão que inicia o jogo
document.getElementById('start').addEventListener('click', initializeGame)