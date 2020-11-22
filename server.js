const express = require('express');
const app = express();
const server = require('http').createServer(app);
const options = { /* ... */ }; //Not-so-Soon
const io = require('socket.io')(server, options); //Soon
//const gameport = process.env.PORT || 4004;



app.use('/style', express.static(__dirname + '/public/style'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/dist', express.static(__dirname + '/public/dist'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(8081, function() { // Listens to port 8081
    console.log(`http://localhost:${server.address().port}`);
});