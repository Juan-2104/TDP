//Importamos mongoose
let mongoose = require ("mongoose");
//Esquemas
let Schema = mongoose.Schema;

//Datos
let usuarioSchema = Schema({
    nombres: String,
    apellidos: String,
    edad: Number,
    correo: String,
    rol: String,
    pass: String,
})
//Exportar
module.exports=mongoose.model("usuario", usuarioSchema);