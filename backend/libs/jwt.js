//Importar jwt
let jwt = require("jwt-simple");
//clave secreta
let secret = "pepastore";

//Generar TOKEN
exports.createToken = function(usuario){
    let payload = {
        _id: usuario._id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        edad: usuario.edad,
        rol: usuario.rol,
    }
    return jwt.encode(payload, secret);
};