var User= require('./model_user.js');

//función para crear al primer usuario de la base
module.exports.primerUsuario = function (){
  	var primerUser = new User ({
	idUser: 10,
	nombre: 'jos',
	email: 'pruebados@gmail.com',
	contrasenna: '12345',
	estado: 'Activo'
	});
  	primerUser.save();
  	console.log("usuario uno agregado");
}
