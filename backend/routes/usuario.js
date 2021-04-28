//Importamos express
let express = require ("express");
//Importamos el controlador de categoria
let Usuario = require("../controllers/usuario");
//API
let api = express.Router();
api.post("/registrarUsuario", Usuario.registrarUsuario);
api.post("/login", Usuario.login);
//Exportar modulo
module.exports = api;