const express = require('express');
const fs = require('fs');
const PORT = 1234;

const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
})


app.get('/apj', function (req, res) {
    fs.readFile('./data.json', function (err, data) {
        var codeAPJ = JSON.parse(data.toString());
        res.json(codeAPJ);
    });
});


app.listen(PORT, () => console.log('Server ready Port 1234'))