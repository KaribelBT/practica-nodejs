const calculator = require("./calculator.js");
const fs = require('fs');
let results = [
    `\n2 + 5 = ${calculator.sumar(2,5)}`,
    `\n11 - 8 = ${calculator.restar(11,8)}`,
    `\n8 x 5 = ${calculator.multiplicar(8,5)}`,
    `\n20 / 2 = ${calculator.dividir(20,2)}`
]

fs.writeFile('log.txt', 'Calculator Results:', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
    results.map(r =>{
        fs.appendFile('log.txt', r, 'utf8',
        function(err) { 
            if (err) throw err;
            console.log("Data is appended to file successfully.")
        });
    })
});