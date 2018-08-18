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

Router.get('/cargar_eventos',function(req,res){ // funciona --- se deberia filtrar eventos x user
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

Router.post('/agregar_evento',function(req,res){ // funciona, habria que agregar el userID
	console.log('creando evento');
	//console.log(req);
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

Router.post('/eliminar_evento:id',function(req,res){ // funciona
	var ide = req.params.id; // tambien funciona si me traigo el req.body.id
    Evento.remove({eventId: ide}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("evento eliminado")
    })
})

Router.post('/actulizar_evento:id',function(req,res){ // funciona
	console.log (req.params.id+' '+req.body.start_d+' '+req.body.end_d)
	Evento.update({eventId:req.params.id},{$set:{start:req.body.start_d, end:req.body.end_d}},{multi:true})
    .then((docs)=>{
      if(docs) {
        res.send("se actualizo el evento....")
        console.log(docs)
      } else {
        console.log("no existe el evento")
      }
	 }).catch((err)=>{
	     console.log("hubo un error")
	})
})


//exporto
module.exports=Router