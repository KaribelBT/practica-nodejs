const coolImages = require("cool-images");
const fs = require("fs");
const moment = require("moment");

let appendFile = () => {
    fs.appendFile('log.txt',`\n${moment().format('YYYY MMMM Do, h:mm:ss a').toString('utf8')}`, function (err) {
        if (err) throw err;
    });
    coolImages.many(600, 800, 10).forEach(image => {
        fs.appendFile('log.txt',`\n${image.toString('utf8')}`, function (err) {
            if (err) throw err;
        });
    });
}

if (fs.existsSync('log.txt')) {
    appendFile()
    console.log('File updated');
}else{
    fs.writeFile('log.txt', 'Links imagenes', function (err) {
        if (err) throw err;
        appendFile()
        console.log('File created');
    });
}