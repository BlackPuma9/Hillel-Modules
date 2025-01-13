const fs = require('fs');

fs.readFile('./readme.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Unable to read the file due to', err);
        return;
    }

    console.log('Readme.txt content next:', data);
})

fs.writeFile('./result.txt', 'Pasting Yuliia into result.txt', (err) => {
    if (err) {
        console.error('Unable to write the file due to', err);
        return;
    }
    console.log('File written successfully!');
})

const dirPath ='./testFolder'

if (!fs.existsSync(dirPath)){
    fs.mkdir(dirPath, (err) => {
        if (err) {
            console.error('Unable to mkdir the testFolder', err);
        }
    })
} else {
    console.log('Directory already exist!')
}
