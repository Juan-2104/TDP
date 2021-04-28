// Variable de módulos
let express = require ("express");
let bodyParser = require ("body-parser");
let moongose = require ("mongoose");
//varaible puerto
let port = process.env.PORT || 3007;
//Variable de la aplicacion que ejecuta el sv
let app = express();
//Routes
let usuarioRoutes = require("./routes/usuario");
let producto = require("./routes/productos");
let stock = require("./routes/stock");
//Conexión a mongo
moongose.connect(
    "mongodb://localhost:27017/TDP",
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, res)=>{
        if (err) {
            throw err;
        } else {
            console.log("Servidor DB: Corriendo")
            app.listen(port,function(){
                console.log("Servidor backend funcionando en el puerto: "+port);
            });
        }
    }
);
//Codificar URL
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
//Usar la ruta
app.use("/api", usuarioRoutes);
app.use("/api", producto);
app.use("/api", stock);
//Modulo para importar
module.exports = app;
