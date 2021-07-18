const form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let divCard = document.getElementById('divCard')
    let textoCad = document.getElementById('textoCad')

    let carregando = `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif">`

    let pronto = `<p>Pronto! Seu email foi cadastrado com sucesso.</p>`

    content.innerHTML = carregando

    setTimeout(() => {
        divCard.innerHTML = null
        textoCad.innerHTML = pronto

    }, 1800);
})