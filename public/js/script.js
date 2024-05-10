const formsubmit = (event, action) => {
    event.preventDefault()

    // envia um POST request para a rota /drone/action
    fetch(action, {
        method: 'POST'
    })
        .then(response => response.json())

        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
}