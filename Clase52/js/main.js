const btnTransf = document.querySelector('#btn-transf');
const btnExit = document.querySelector('#btn-exit');
const userCalled = document.querySelector('#userCalled');
const typeAhorro = document.querySelector('#typeAhorro');
const typeCorriente = document.querySelector('#typeCorriente');
const typeProyecto = document.querySelector('#typeProyecto');
const balanceAhorro = document.querySelector('#balanceAhorro');
const balanceCorriente = document.querySelector('#balanceCorriente');
const balanceProyecto = document.querySelector('#balanceProyecto');
const cbuAhorro = document.querySelector('#cbuAhorro');
const cbuCorriente = document.querySelector('#cbuCorriente');
const cbuProyecto = document.querySelector('#cbuProyecto');

//boton que devuelve al index
btnExit.addEventListener('click', () => {
    localStorage.removeItem('user');
    location.href = "./index.html";
});

//boton lleva a transfer
btnTransf.addEventListener('click', () =>{
    location.href = "./transfer.html";
});

window.onload = function() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    userCalled.innerHTML = user.username;
    typeAhorro.innerHTML = user.accounts[0].type;
    balanceAhorro.innerHTML = user.accounts[0].balance;
    cbuAhorro.innerHTML = user.accounts[0].cbu;
    typeCorriente.innerHTML = user.accounts[1].type;
    balanceCorriente.innerHTML = user.accounts[1].balance;
    cbuCorriente.innerHTML = user.accounts[1].cbu;
    typeProyecto.innerHTML = user.accounts[2].type;
    balanceProyecto.innerHTML = user.accounts[2].balance;
    cbuProyecto.innerHTML = user.accounts[2].cbu;
};