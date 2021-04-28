# TDP
Tienda doña Pepita

Usuario
    nombres: String,
    apellidos: String,
    edad: Number,
    correo: String,
    rol: String,
    pass: String,

Producto
    nombre: String
    descripcion: String
    precio: Number

Stock
    idproducto: { type: Schema.ObjectId, ref: "stock" },
    cantidad: Number,
