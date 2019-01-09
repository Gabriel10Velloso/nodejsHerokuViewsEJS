var express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const cors = require('cors');
const ytdl = require('ytdl-core');
var path = require('path');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))


// Importar Rotas 
var appRoutes = require('./routes/app');
var appDownload = require('./routes/download');


// Rotas
app.use('/', appRoutes);
app.use('/download', appDownload);


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});



// PlayList
// https://github.com/HardTacos/youtube-playlist-dl