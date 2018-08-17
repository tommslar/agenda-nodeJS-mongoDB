//defino requerimientos
var Router			= require('express').Router();
var User			= require('./model_user.js');
var Evento 			= require('./model_event.js');

//defino rutas con sus acciones

Router.get('/all', function (err, res) { // funciona
	console.log("Leyendo tabla de usuarios......");
  	User.find({})
  	.then((data)=>{
     res.json(data);
	})
	.catch((err)=>{
	  res.json(err);
	})
});

Router.get('/cargar_eventos',function(req,res){ // funciona --- filtrar eventos x user
	console.log("Leyendo tabla de eventos......");
	Evento.find({})
  	.then((data)=>{
     res.json(data);
	})
	.catch((err)=>{
	  res.json(err);
	})
});

Router.post('/login',function(req,res){ // funciona
	console.log('verificando login')
	User.find({email:req.body.user,contrasenna:req.body.pass}, function(err, doc){
		if (err) {
        	res.status(500)
        	res.json(err)
    	}
    	console.log(doc);
    	if(doc!=""){
    		res.send("Validado");
    	}else{
    		res.send("no existe usuario");
    	}
    });
});

Router.post('/agregar_evento',function(req,res){ // funciona, agergar el userID
	console.log('creando evento');
	console.log(req);
	let evento=new Evento({
		eventId: req.body.eventId,
		title:req.body.titulo,
		start:req.body.start,
		end:req.body.end
	})
	evento.save(function(error){
		if(error){
			res.status(500)
			res.json(error)
		}
		res.send("Registro Guardado")
	})
})

Router.post('/eliminar_evento:id',function(req,res){ // a prueba
	var ide = req.params.id; // tambien funciona si me traigo el req.body.id
    Evento.remove({eventId: ide}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

Router.put('/actulizar_evento:id',function(req,res){ // todavia no probado
	var evento = new Evento({
		eventId: req.body.eventId,
		title:req.body.titulo,
		start:req.body.start,
		end:req.body.end
	})
	evento.update(function(error){
		if(error){
			res.status(500)
			res.json(error)
		}
		res.send("Registro Guardado")
	})
})


//exporto
module.exports=Router