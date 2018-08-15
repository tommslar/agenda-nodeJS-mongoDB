//defino requerimientos
var Router			= require('express').Router();
var User			= require('./model_user.js');
var Evento 			= require('./model_event.js');

//defino rutas con sus acciones

Router.get('/all', function (err, res) {
	console.log("Leyendo tabla de usuarios......");
  	User.find({})
  	.then((data)=>{
     res.json(data);
	})
	.catch((err)=>{
	  res.json(err);
	})
});

Router.get('/cargar_eventos',function(req,res){
	console.log("Leyendo tabla de eventos......");
	Evento.find({})
  	.then((data)=>{
     res.json(data);
	})
	.catch((err)=>{
	  res.json(err);
	})
});

Router.post('/login',function(req,res){

});

Router.post('/agregar_evento',function(req,res){

})

Router.post('/eliminar_evento:id',function(req,res){

})

Router.put('/actulizar_evento:id',function(req,res){
	
})


//exporto
module.exports=Router