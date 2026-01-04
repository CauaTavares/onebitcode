//------------------------------------------(FUNÇÃO PARA CRIAR ELEMENTO)---------------------------------------------------

function createLabel(text, htmlFor) {
    const label = document.createElement('label')   // Serve para criar um LABEL no HTML pelo JS
    label.htmlFor = htmlFor                         // Serve para a VARIÁVEL (LABEL) receber o PARÂMETRO da FUNÇÃO
    label.innerText = text                          // Serve para a VARIÁVEL (LABEL) receber o PARÂMETRO da FUNÇÃO
    return label                                    // RETURN Serve para usar a VARIÁVEL fora da FUNÇÃO*
}

function createInput(id, value, name, type = 'text', placeholder = '') {

    const input = document.createElement('input')       // Serve para criar um INPUT no HTML pelo JS
    input.id = id                                       // Serve para a VARIÁVEL (ID) receber o VALOR do PARÂMETRO 
    input.value = value                                 // Serve para a VARIÁVEL (VALUE) receber o VALOR do PARÂMETRO
    input.name = name                                   // Serve para a VARIÁVEL (NAME) receber o VALOR do PARÂMETRO
    input.type = type                                   // Serve para a VARIÁVEL (TYPE) receber o VALOR do PARÂMETRO
    input.placeholder = placeholder                     // Serve para a VARIÁVEL (PLACEHOLDER) receber o VALOR do PARÂMETRO
    return input                                        // RETURN Serve para usar a VARIÁVEL fora da FUNÇÃO*
}

//------------------------------------------(ADICIONAR ELEMENTO)---------------------------------------------------

const addTechBtn = document.getElementById('addTechBtn')            // Serve para pegar o ID do BOTÃO
const form = document.getElementById('devForm')                     // Serve para pegar o ID do FORMULÁRIO
const developers = []                                               // ARRAY vazia
let inputRows = 0                                                   // VARIÁVEL vazia

addTechBtn.addEventListener('click', function (ev) {                    // Serve para ADICIONAR um EVENTO no BOTÃO
    const stackInputs = document.getElementById('stackInputs')          // Serve para pegar pelo ID o (UL)

    //------------------------------------------(CRIAR ELEMENTO (LI))---------------------------------------------------

    const newRow = document.createElement('li')                         // Serve para CRIAR um (LI) no HTML pelo JS
    const rowIndex = inputRows                                          // Serve para (rowIndex) receber um novo número toda vez que repetir 
    inputRows++                                                         // Serve para ADICIONAR mais 1 na VARIÁVEL vazia
    newRow.id = 'inputRow-' + rowIndex                                  // Serve para que cada ID criado vai receber um ID diferente
    newRow.className = 'inputRow'                                       // Serve para adicionar uma CLASSE no INPUT

    //------------------------------------------(CRIAR ELEMENTO COM FUNÇÃO (LABEL) - (INPUT))---------------------------------------------------

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)          // Serve para chamar a FUNÇÃO de criar LABEL e adicionar VALOR nos PARÂMETROS da FUNÇÃO
    const techNameInput = createInput('techName-' + rowIndex, null, 'techname')  // Serve para chamar a FUNÇÃO de criar INPUT e adicionar VALOR nos PARÂMETROS da FUNÇÃO

    const expLabel = createLabel('Experiencia: ')                                       // Serve para criar uma LABEL e passa VALOR no PARÂMETRO

    const id1 = 'expRadio-' + rowIndex + '.1'                                           // Serve para criar um ID diferente para cada LABEL
    const expRadio1 = createInput(id1, '0.2 anos', 'techExp-' + rowIndex, 'radio')      // Serve para criar um INPUT e passar os VALORES para o PARÂMETRO da FUNÇÃO
    const expLabel1 = createLabel('0-2 anos', id1)                                      // Serve para criar um LABEL e passar os VALORES para o PARÂMETRO da FUNÇÃO

    const id2 = 'expRadio-' + rowIndex + '.2'                                           // Serve para criar um ID diferente para cada LABEL
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')      // Serve para criar um INPUT e passar os VALORES para o PARÂMETRO da FUNÇÃO
    const expLabel2 = createLabel('3-5 anos', id2)                                      // Serve para criar um LABEL e passar os VALORES para o PARÂMETRO da FUNÇÃO

    const id3 = 'expRadio-' + rowIndex + '.3'                                           // Serve para criar um ID diferente para cada LABEL
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')       // Serve para criar um INPUT e passar os VALORES para o PARÂMETRO da FUNÇÃO
    const expLabel3 = createLabel('5+ anos', id3)                                       // Serve para criar um LABEL e passar os VALORES para o PARÂMETRO da FUNÇÃO

    //------------------------------------------(COMO CRIAR UM BOTÃO NO HTML PELO JS)---------------------------------------------------

    const removeRowBtn = document.createElement('button')           // Serve para criar o elemento BOTÃO no HTML pelo JS
    removeRowBtn.type = 'button'                                    // Serve para adicionar o TIPO (BUTTON) no BOTÃO e não o (SUBMIT)
    removeRowBtn.innerText = 'Remover'                              // Serve para modificar o TEXTO do BOTÃO
    removeRowBtn.addEventListener('click', function () {            // Serve para criar um evento de 'click' e uma FUNÇÃO anonima no BOTÃO
        stackInputs.removeChild(newRow)                             // Serve para remover a VARIÁVEL (newRow) o LI
    })

    //------------------------------------------------------------------------------------------------------------------------------------

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
        // Serve para adicionar o LABEL e o INPUT na LI 
    )

    stackInputs.appendChild(newRow)         // Serve para adicionar a (LI) no (UL)
})

form.addEventListener('submit', function (ev) {             // Serve para adicionar um EVENTO de 'SUBMIT' e uma FUNÇÃO que recebe (evento) como PARÂMETRO
    ev.preventDefault()                                     // Serve para evitar que ATUALIZE a página

    const fullNameInput = document.getElementById('fullname')   // Serve para guardar na VARIÁVEL o VALOR do INPUT
    const inputRows = document.querySelectorAll('.inputRow')    // Serve para guardar na VARIÁVEL O VALOR do INPUT

    let technologies = []                                       // ARRAY vazia
    inputRows.forEach(function (row) {                          // Serve para ele percorrer por todos os elementos (FUNÇÃO anonima com PARÂMETRO (row))
        // #rowId input[name="techName"]
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value         // Serve para selecionar pelo (ID) e pegar o VALOR
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value     // Serve para selecionar pelo (ID) e pegar o VALOR
        technologies.push({ name: techName, exp: techExp })                                             // .push no OBJETO que vai ter (name que recebe [techName]) e (exp que recebe [techExp])
    })

    const newDev = { fullname: fullNameInput.value, technologies: technologies }    // OBJETO com as propriedades (fullname) e (tecnologies)
    developers.push(newDev)                                                         // Serve para GUARDAR no ARRAY a VARIÁVEL (NEWDEV)
    alert('Dev cadastrado com sucesso!')                                            

    fullNameInput.value = ''                // Serve para pegar o valor o INPUT e deixar ele "LIMPO"
    inputRows.forEach(function (row) {      // 
        row.remove()                        // Serve para remover a linha
    })

    console.log(developers);        // Mostra o ARRAY

})
