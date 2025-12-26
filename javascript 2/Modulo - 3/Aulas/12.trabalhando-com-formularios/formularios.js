const form = document.getElementById('orderForm')         // Serve para pegar pelo (ID) o form

// .addEventListener serve para adicionar um evento no formulário
// 'submit' é o evento do botão
form.addEventListener('submit', function (ev) {
    ev.preventDefault() // Serve para evitar que atualize a página 

    const name = document.querySelector("input[name='name']").value                     
    // Para selecionar o elemento com querySelector é igual no CSS (passa a TAG e dentro de colchetes [name=''] o nome)
    const address = document.querySelector("input[name='address']").value               
    // Para selecionar o elemento com querySelector é igual no CSS (passa a TAG e dentro de colchetes [name=''] o nome)
    const breadType = document.querySelector("select[name='breadType']").value          
    // Para selecionar o elemento com querySelector é igual no CSS (passa a TAG e dentro de colchetes [name=''] o nome)
    const main = document.querySelector("input[name='main']").value                     
    // Para selecionar o elemento com querySelector é igual no CSS (passa a TAG e dentro de colchetes [name=''] o nome)
    const observations = document.querySelector("textarea[name='observations']").value  
    // Para selecionar o elemento com querySelector é igual no CSS (passa a TAG e dentro de colchetes [name=''] o nome)

    // COMO ENVIAR SOMENTE OS VALORES SELECIONADOS DO CHECKBOX
    // 1. Criar uma VARIÁVEL que vai guardar os valores
    // 2. Pegar o CHECKBOX com querySelectorAll igual no CSS 
    // 3. :checked para pegar os INPUTS que estão marcados
    // 4. .forEach para percorrer por todo o CHECKBOX
    // 5. Passar uma FUNÇÃO com o PARÂMETRO item 
    // 6. Para cada um dos item vai juntar com o PARÂMETRO.value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += ' - ' + item.value + '\n'
    })

    console.log({       
        name,
        address,
        breadType,
        main,
        salad,
        observations
    });

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations
    )

})