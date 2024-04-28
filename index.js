//instanciando express 
const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

//ou seja, todo comando expresse pode ser acessado pela variável app
const app = express();

app.get('/', (req, res) => {
    res.send('Currículo de Iale Almeida com JavaScript, Node.JS e Express');
})

app.listen(PORT, HOST);