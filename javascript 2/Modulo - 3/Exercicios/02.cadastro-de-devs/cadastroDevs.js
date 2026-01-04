const button = document.getElementById('submit')
// Serve para pegar o BOTÃO pelo (ID)

button.addEventListener('click', novaTecnologia)

function novaTecnologia(ev) {
    ev.preventDefault()

    const form = document.getElementById('formulario')
    const ul = document.createElement('ul')
    

    const lista = document.createElement('li')
    const nomeInput = document.createElement('input')
    lista.innerText = 'Nome: '
    nomeInput.type = 'text'
    nomeInput.name = 'fullname'
    lista.appendChild(nomeInput)   // O (INPUT) está dentro da LISTA (li)
    ul.appendChild(lista)          // A LISTA está dentro do (UL)

    // INPUT RADIO:

    const lista1 = document.createElement('li')
    const inputRadio1 = document.createElement('input')
    lista1.innerText = '0-2 anos'
    inputRadio1.value = '0-2 anos'
    inputRadio1.type = 'radio'
    inputRadio1.name = 'tempo'
    lista1.appendChild(inputRadio1)
    ul.appendChild(lista1)


    const lista2 = document.createElement('li')
    const inputRadio2 = document.createElement('input')
    lista2.innerText = '3-4 anos'
    inputRadio1.value = '3-4 anos'
    inputRadio2.type = 'radio'
    inputRadio2.name = 'tempo'    
    lista2.appendChild(inputRadio2)
    ul.appendChild(lista2)


    const lista3 = document.createElement('li')
    const inputRadio3 = document.createElement('input')
    lista3.innerText = '5+ anos'
    inputRadio1.value = '5+ anos'
    inputRadio3.type = 'radio'
    inputRadio3.name = 'tempo'
    lista3.appendChild(inputRadio3)
    ul.appendChild(lista3)
    
    
    ul.appendChild(document.createElement('br'))
    form.appendChild(ul)
    
    
}


function cadastrar(ev, element) {
    ev.preventDefault()

    const nomeCompleto = element.children.nomeCompleto.value

    console.log(nomeCompleto);

}




function remover() {

    const form = document.getElementById('formulario')

    const tecnologia = document.getElementsByTagName('ul')

    form.removeChild(tecnologia[tecnologia.length - 1])
}

