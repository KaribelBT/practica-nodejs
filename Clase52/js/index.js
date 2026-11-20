const btnLogin = document.querySelector('#btn-login');
const btnRegister = document.querySelector('#btn-register');
let isOk = false;
let loggedUser = localStorage.user; 

//funcion para enviar datos y login
let login =  async function (data) { 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let resp = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    });
    let result = await resp.json();
    return result
};

//boton loguearse
btnLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let data = {
        username,
        password
    };
    login(data)
    .then(response=>{
        let message = '';
        let $modal = $('#errorlogin');
        if(response.error){
            message = 'Ingresaste algún dato incorrecto'
            isOk = false
        }else{            
            localStorage.setItem('user', JSON.stringify(response));
            location.href = "./main.html";
        }
        $modal.find('#message').text(message);
        $modal.modal('show');
    })
    .catch(error =>{
        console.log(error);
    })
});

//boton abrir pagina de registro
btnRegister.addEventListener('click', () => {
    location.href = "./register.html";
});

