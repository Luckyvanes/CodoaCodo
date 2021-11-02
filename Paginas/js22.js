window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const name = document.getElementById('name')
    const mail = document.getElementById('mail')
    const autor = document.getElementById('autor')
    const msg = document.getElementById('msg')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        const nameValor = name.value.trim()
        const mailValor = mail.value.trim()
        const autorValor = autor.value.trim()
        const msgValor = msg.value.trim();
     
        if(!nameValor){
            validaFalla(name, 'Campo vacío')
        }else{
            validaOk(name)
        }

        if(!mailValor){
            validaFalla(mail, 'Campo vacío')            
        }else if(!validaEmail(mailValor)) {
            validaFalla(mail, 'El e-mail no es válido')
        }else {
            validaOk(mail)
        }
         if(!autorValor){
            validaFalla(autor, 'Campo vacío')
        }else{
            validaOk(autor)
        }

        if(!msgValor){
            validaFalla(msg, 'Campo vacío')
        }else{
            validaOk(msg)
        }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})