document.querySelectorAll('.js-input').forEach(function(item){
    item.addEventListener('keyup', function(){
        if(this.value){
            this.classList.add('not-empty');
        } else {
            this.classList.remove('not-empty');
        }
    })
})

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }); 

    window.addEventListener('load', function(){
        setTimeout(function(){
            document.querySelector('.loader-content').classList.add('disabledLoader');
        },1500)
    })
})


function validacion(){
    var form = document.querySelector('form');

    if(form.name == null || form.name.value.length == 0 || /^\s+$/.test(form.name.value)){
        alertMSG('Debes completar el campo Nombre');
        return false;
    }

    if(form.lastname == null || form.lastname.value.length == 0 || /^\s+$/.test(lastname.name.value)){
        alertMSG('Debes completar el campo Apellido');
        return false;
    }

    if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(form.email.value)) ) {
        alertMSG('Debes completar el campo Correo eléctronico con un formato de email valido');
        return false;
    }

    if( form.tel == null || !(/^\d{9}$/.test(form.tel.value)) ) {
        alertMSG('Debes completar el campo Télefono con un formato valido');
        return false;
    }

    if(form.message == null || form.message.value.length == 0 || /^\s+$/.test(form.message.value)){
        alertMSG('Debes completar el campo Mensaje');
        return false;
    }

    enviar()
}


function alertMSG(msg){
    var e = document.querySelector('.alert');
    e.classList.add('block');
    e.innerText = msg;
}

function noAlert(){
    var e = document.querySelector('.alert');
    e.classList.remove('alert-danger');
    e.classList.add('alert-success');
    e.classList.add('block');
    e.innerText = "Nos pondremos en contacto lo antes posible, gracias por preferirnos"
}

function enviar(){
    noAlert();
    document.querySelector("form").reset();
}