function sumar(n1, n2) {
    return (parseInt(n1) + parseInt(n2));
}

function restar(n1, n2) {
    return (parseInt(n1) - parseInt(n2));
}
    
function multiplicar(n1, n2) {
    return (parseInt(n1) * parseInt(n2));
}

function dividir(n1, n2) {
    return (parseInt(n1) / parseInt(n2));
}

module.exports = { //lo que crea la libreria
    sumar,
    restar,
    multiplicar,
    dividir
}