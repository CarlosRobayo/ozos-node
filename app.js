var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const port = process.env.PORT || 8000  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});


app.post('/historia', function (req, res) {
    if (req.body.fechaIni == 120516) {
        res.sendFile(__dirname + '/public/views/historia.html');
    } else {
        res.sendFile(__dirname + '/public/views/404.html');
    }
});

app.listen(port);