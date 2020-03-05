const Carrito = require("./CarritoModel");
const Categoria = require("./CategoriaModel");
const Compra = require("./CompraModel");
const Producto = require("./ProductoModel");
const User = require("./UserModel");
const Valoracion = require("./ValoracionModel");

//La valoracion pertenece a un usuario
Valoracion.belongsTo(User);
//La valoracion pertenece a un  usuario
Valoracion.belongsTo(Producto);
//Un producto tiene MUCHAS categorias
Producto.belongsTo(Categoria);
User.hasMany(Carrito);

Producto.hasMany(Carrito)
Carrito.belongsTo(Producto)

Carrito.belongsTo(Compra);

module.exports = { Carrito, Categoria, Compra, Producto, User, Valoracion };
