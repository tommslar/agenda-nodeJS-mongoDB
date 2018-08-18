var User= require('./model_user.js');

//función para crear al primer usuario de la base
module.exports.primerUsuario = function (){
  	var primerUser = new User ({
	idUser: Math.floor(Math.random() * 1000),
	nombre: 'admin',
	email: 'prueba@gmail.com',
	contrasenna: '12345',
	estado: 'Activo'
	});
  	primerUser.save();
  	console.log("usuario uno agregado");
}
