(function () {
    
    const txtEmail = document.getElementById('txtEmail')
    const btn = document.getElementById('btn')
    const msgfeedback = document.getElementById('newsletterFeedback')
    
    function cadastrarEmail(){  
        let email = txtEmail.value
        msgfeedback.innerHTML = `email ${email} cadastrado com suceso`
    }

    btn.addEventListener('click', cadastrarEmail)

})()
