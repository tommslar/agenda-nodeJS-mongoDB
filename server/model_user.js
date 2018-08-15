var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var UserSchema= new Schema({
	idUser: {type:Number, require:true, unique: true},
	nombre: {type:String, require:true},
	email: {type:String, require:true},
	contrasenna: {type:String, require:true},
	estado: {type:String, require:true, enum:['Activo', 'Inactivo']}
});
var UserModel= mongoose.model('Usuario', UserSchema);

module.exports= UserModel;