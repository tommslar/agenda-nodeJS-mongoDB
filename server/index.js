//definiendo requerimientos
var express       = require('express');
var bodyParser    = require('body-parser');
var http 		  = require('http');
var path 		  = require('path');
var routing        = require ('./routing.js');
var mongoose	  = require('mongoose');

//construyendo el server
var port 		  = process.env.PORT || 3000;
var app     	  = express();
var Server 		  = http.createServer(app);

//configurando la app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', routing);
app.use(express.static('../client'));

//conectandome a la BD
mongoose.connect("mongodb://localhost/agendaBD");
console.log('conectado a la base de datos')

//ejecutamos listen en el server y comprobamos que funciona:
Server.listen(port, function(){
	console.log(new Date() + ' => start server :' + port);
})

