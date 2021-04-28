let Producto = require("../models/producto");

const registrarProducto = (req, res) => {
    let params = req.body;
    let producto = new Producto();
    producto.nombre = params.nombre;
    producto.descripcion = params.descripcion;
    producto.precio = params.precio;
    producto.save((err, saveProducto) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor hijo." })
      } else {
        if (saveProducto) {
          res.status(200).send({ producto: saveProducto });
        } else {
          res.status(401).send({ mensaje: "No se pudo registrar el producto." });
        }
      }
    });
  }

//Buscar
const buscarProducto = (req, res) => {
    let id = req.params["id"];
    Producto.findById({ _id: id }, (err, datosProducto) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor" });
      } else {
        if (datosProducto) {
          res.status(200).send({ producto: datosProducto });
        } else {
          res.status(401).send({ mensaje: "El producto no existe" });
        }
      }
    });
  };

// Listar Productos

  const listaProductos = (req, res) => {
    let nombre = req.params["nombre"];
    Producto.find({ nombre: new RegExp(nombre, "i") }, (err, datosProducto) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor" });
      } else {
        if (datosProducto) {
          res.status(200).send({ producto: datosProducto });
        } else {
          res.status(401).send({ mensaje: "No hay coincidencias entre los prodductos" });
        }
      }
    });
  };

//Editar Producto
const editarProducto = (req, res)=>{
    let id = req.params["id"];
    let params = req.body;
    Producto.findByIdAndUpdate({_id: id},{nombre: params.nombre, descripcion: params.descripcion, precio: params.precio},(err, datosProducto) => {
        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor hijo" });
          } else {
            if (datosProducto) {
              res.status(200).send({ Producto: datosProducto });
            } else {
              res.status(401).send({ mensaje: "No se pudo editar el producto." });
            }
          }
    });
}

//Elimiinar Producto
const eliminarProducto = (req, res) =>{
    let id = req.params["id"];
    Producto.findByIdAndDelete({_id: id},(err, datosProducto) => {
        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor hijo" });
          } else {
            if (datosProducto) {
              res.status(200).send({ Producto: datosProducto });
            } else {
              res.status(401).send({ mensaje: "No se pudo eliminar el producto" });
            }
        }
    }
    );
};


module.exports = {
    registrarProducto,
    buscarProducto,
    listaProductos,
    editarProducto,
    eliminarProducto,
};
