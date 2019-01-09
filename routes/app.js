// Provar que as rotas existem antes de colocar o código

var express = require('express');

var app = express();



app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensagem: 'Get inicializado com sucesso'
    });

});


module.exports = app;