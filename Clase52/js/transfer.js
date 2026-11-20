const btnConfirm = document.querySelector('#btn-confirm');
const btnBack = document.querySelector('#btn-back');
const btnClose = document.querySelector('#btn-close');

let isOk = false

//rellena options de cta de origen
let origAccount = document.querySelector('#origAccount');
let user = localStorage.getItem('user');
user = JSON.parse(user);
user.accounts.map(a => {
    $('#origAccount').append(`<option value="${a.cbu}">${a.type}</option>`)
})


//funcion para enviar datos y transferir
let transfer = async function (data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let resp = await fetch(`http://localhost:3000/transfer`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    });
    let result = await resp.json()
    return result
}

//boton confirmar transferencia
btnConfirm.addEventListener('click', (e) => {
    e.preventDefault()
    let destAccount = document.querySelector('#destAccount').value;
    let amount = document.querySelector('#amount').value;
    let origAccount = document.querySelector('#origAccount').value;
    let data = {
        origAccount,
        destAccount,
        amount,
        id:user.id
    }
    transfer(data)
        .then(response => {
            let message = '';
            let $modal = $('#modalTransfer');
            if (response.error) {
                isOk = false
                switch (response.error) {
                    case 404:
                        message = 'CBU inválido'
                        break;
                    case 412:
                        message = 'Saldo insuficiente'
                        break;
                    default:
                        message = 'Ocurrió un error inesperado, contacta al helpdesk'
                        break;
                }
            } else {
                user.accounts = response
                localStorage.setItem('user', JSON.stringify(user));
                message = 'Transacción exitosa'
                isOk = true
                // location.href = "./main.html"    
            }
            $modal.find('#message').text(message);
            $modal.modal('show');
        })
})

//boton de cerrar modal cuando transfiere
btnClose.addEventListener('click', () => {
    if (isOk) {
        location.href = "main.html";
    }
})

//boton que devuelve a cuentas
btnBack.addEventListener('click', () => {
    location.href = "main.html";
});