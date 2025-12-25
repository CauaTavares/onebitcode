function show() {
    const contactList = document.getElementById('contact-list')         // Serve para guardar na VARIÁVEL pelo (ID) do UL
    console.log(contactList);
}

//--------------------------------------------------------------------------

function show() {
  // Obter vários elementos (HTMLCollection) a partir de um nome de tag

  const liElements = document.getElementsByTagName("li")                // Serve para guardar na VARIÁVEL pelo (Nome da TAG)
  console.log(liElements)
}

//--------------------------------------------------------------------------

function show() {
  // Obter vários elementos (HTMLCollection) a partir de uma classe

  const contactInputs = document.getElementsByClassName("contact-input")        // Serve para guardar na VARIÁVEL pela (CLASSE)
  console.log(contactInputs)
}

//--------------------------------------------------------------------------

function show() {
  // Obter vários elementos (NodeList) a partir do atributo name

  const contact1 = document.getElementsByName("contact1")                       // Serve para guardar na VARIÁVEL pelo (NAME)
  console.log(contact1)
}

//--------------------------------------------------------------------------

function show() {
  // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)  

  const contacts = document.querySelectorAll("#contact-list > li > label")           // Serve para guardar na VARIÁVEL igual (CSS)
  console.log(contacts)
}

//---------------------------------------------------------------------------------------------------

function show() {
  // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)

  const contact = document.querySelector("#contact-list > li > label")               // Serve para guardar na VARIÁVEL igual (CSS)
  console.log(contact)
  console.log(contact.textContent)
}



