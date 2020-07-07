const fs = require('fs');

fs.readFile('newfile.txt', function read(err, data) {
    if (err) {
        throw err;
    } 
    fs.writeFile('newfile.txt', data.toString('utf8').toUpperCase(), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
});