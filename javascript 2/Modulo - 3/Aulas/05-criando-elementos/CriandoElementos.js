function addInput() {
    const ul = document.getElementById('inputs')                // Serve para guadar na VARIÁVEL o valor do INPUT pelo (id)

    const newLi = document.createElement('li')                  // 1. Usar (createElement) para informar qual elemento gostaria de criar
    newLi.className = 'list-item'                               // 2. Usar (.className) para adicionar uma CLASSE no LI
    newLi.innerText = 'Novo input: '                            // 2. Usar (.innerText) para MODIFICAR o que o ELEMENTO vai receber

    const newInput = document.createElement('input')            // 1. Usar (createElement) para informar qual elemento gostaria de criar
    newInput.type = 'text'                                      // 2. Usar (.type) para modificar o TIPO do INPUT
    newInput.name = 'input'                                     // 2. Usar (.name) para adicionar um NAME no INPUT

    newLi.appendChild(newInput)                                 // 3. Usar (appendChild) para imprimir o elemento criado pelo JS no HTML
    ul.appendChild(newLi)                                       // 3. Usar (appendChild) para imprimir o elemento criado pelo JS no HTML
}

