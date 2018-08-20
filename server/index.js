//definiendo requerimientos
var express       = require('express');
var bodyParser    = require('body-parser');
var http 		  = require('http');
var path 		  = require('path');
var Routing       = require ('./routing.js');
var mongoose	  = require('mongoose');
//var operaciones   = require('./primerUser.js');

//construyendo el server
var port 		  = process.env.PORT || 3000;
var app     	  = express();
var Server 		  = http.createServer(app);

//configurando la app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', Routing); //acá establezco el path base
app.use(express.static('client'));


//conectandome a la BD
var url = "mongodb://localhost:27017/agenda";
mongoose.connect(url,{ useNewUrlParser: true });
console.log('conectado a la base de datos')

//creación del primer usuario:
//operaciones.primerUsuario();

//ejecutamos listen en el server y comprobamos que funciona:
Server.listen(port, function(){
	console.log(new Date() + ' => start server :' + port);
})

