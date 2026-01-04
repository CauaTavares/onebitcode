function addContact() {
  const contactSection = document.getElementById('contacts-list')       // Serve para guardar na VARIÁVEL pelo ID da section

  const h3 = document.createElement('h3')                               // Serve para criar um ELEMENTO no HTML pelo JS
  h3.innerText = "Contato"                                              // Serve para modificar por dentro o (H3)

  const ul = document.createElement('ul')                               // Serve para criar um ELEMENTO no HTML pelo JS

  const nameLi = document.createElement('li')                           // Serve para criar um ELEMENTO no HTML pelo JS
  nameLi.innerText = "Nome: "                                           // Serve para modificar por dentro o LI
  const nameInput = document.createElement('input')                     // Serve para criar um ELEMENTO no HTML pelo JS
  nameInput.type = 'text'                                               // Serve para adicionar um TIPO no INPUT
  nameInput.name = 'fullname'                                           // Serve para adicionar um NAME no INPUT
  nameLi.appendChild(nameInput)                                         // Serve para IMPRIMIR na tela o ELEMENTO criado
  ul.appendChild(nameLi)                                                // Adicionar o INPUT na LISTA(nameLi) e a LISTA no UL
  ul.appendChild(document.createElement('br'))                          // Serve para criar um ELEMENTO de quebra de linha


  const phoneLi = document.createElement('li')                          // Serve para criar um ELEMENTO no HTML pelo JS 
  phoneLi.innerText = "Telefone: "                                      // Serve para modificar por dentro do LI
  const phoneInput = document.createElement('input')                    // Serve para criar um ELEMENTO no HTML pelo JS
  phoneInput.type = 'text'                                              // Serve para adicionar um TIPO no INPUT
  phoneInput.name = 'phone'                                             // Serve para adicionar um NAME no INPUT
  phoneLi.appendChild(phoneInput)                                       // Serve para IMPRIMIR na tela o ELEMENTO criado
  ul.appendChild(phoneLi)                                               // Adicionar o INPUT na LISTA(phoneLi) e a LISTA no UL 
  ul.appendChild(document.createElement('br'))                          // Serve para criar um ELEMENTO de quebra de linha


  const addressLi = document.createElement('li')                        // Serve para criar um ELEMENTO no HTML pelo JS 
  addressLi.innerHTML = '<label for="address">Endereço: </label>'       // Serve para modificar por dentro um LI
  const addressInput = document.createElement('input')                  // Serve para criar um ELEMENTO no HTML pelo JS
  addressInput.type = 'text'                                            // Serve para adicionar um TIPO no INPUT
  addressInput.name = 'address'                                         // Serve para adicionar um NAME no INPUT
  addressInput.id = 'address'                                           // Serve para adicionar um ID no INPUT
  addressLi.appendChild(addressInput)                                   // Serve para IMPRIMIR na tela o ELEMENTO criado
  ul.appendChild(addressLi)                                             // Adicionar o INPUT na LISTA(adressLi) e a LISTA no UL
  ul.appendChild(document.createElement('br'))                          // Serve para criar um ELEMENTO de quebra de linha

  contactSection.append(h3, ul)                                         // Serve para ADICIONAR varios ELEMENTOS de uma só vez
}


function removeContact() {                                              
  const contactSection = document.getElementById('contacts-list')       // Serve para pegar a SECTION do HTML pelo ID

  const titles = document.getElementsByTagName('h3')                    // Serve para a VARIÁVEL pegar TODOS os h3
  const contacts = document.getElementsByTagName('ul')                  // Serve para a VARIÁVEL pegar os ul

  contactSection.removeChild(titles[titles.length - 1])                 // Serve para remover os ELEMENTOS. Qual elemento? (title na posição [comprimento - 1])
  contactSection.removeChild(contacts[contacts.length - 1])             // Serve para remover os ELEMENTOS. Qual elemento? (title na posição [comprimento - 1])
}