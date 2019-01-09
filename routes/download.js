// Provar que as rotas existem antes de colocar o código

var express = require('express');
const ytdl = require('ytdl-core');

var app = express();



app.get('/', (req,res) => {
 res.render('profile')
});




module.exports = app;