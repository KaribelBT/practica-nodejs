const btnSend = document.querySelector('#btn-send');
const btnCancel = document.querySelector('#btn-cancel');
const btnClose = document.querySelector('#btn-close');

let isOk = false;

//funcion para enviar datos yc rear usuario
let createUser = async function (user) { 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let result = await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user)
    });
    let resp = await result.json();
    return resp
};

//boton de enviar formulario
btnSend.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let newUser = {
        name,
        lastname,
        email,
        username,
        password
    }
    createUser(newUser)
    .then(response=>{
        let message = '';
        let $modal = $('#errorLogin');
        if(response.error){
            message =  'Faltan datos'
            isOk = false
        }else{
            message =  'Usuario creado satisfactoriamente'
            isOk = true
        }
        $modal.find('#message').text(message);
        $modal.modal('show');
    })
    .catch(error =>{
        console.log(error)
    })
});

//boton de cancelar registro
btnCancel.addEventListener('click', () => {
    location.href = "./index.html";
});

//boton para cerrar y volver al index cuando registro esta ok
btnClose.addEventListener('click', () => {
    if(isOk){
        location.href = "./index.html";
    }
});