const Carrito = require("./CarritoModel");
const Category = require("./CategoryModel");
const Compras = require("./ComprasModel");
const Producto = require("./ProductoModel");
const User = require("./UserModel");
const Valoraciones = require("./ValoracionesModel");

//La valoracion pertenece a un usuario
Valoraciones.belongsTo(User);
//La valoracion pertenece a un  usuario
Valoraciones.belongsTo(Producto);
//Un producto tiene MUCHAS categorias
Producto.hasMany(Category);
User.hasMany(Carrito);
Producto.hasMany(Carrito);

Carrito.belongsTo(Compras);

module.exports = { Carrito, Category, Compras, Producto, User, Valoraciones };
