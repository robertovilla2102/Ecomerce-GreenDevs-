const Carrito = require("./CarritoModel");
const Category = require("./CategoryModel");
const Compras = require("./ComprasModel");
const Producto = require("./ProductoModel");
const User = require("./UserModel");
const Valoraciones = require("./ValoracionesModel");

//Una valoracion tiene UN usuario
Valoraciones.belongsToMany(User, { through: "user-valoracion" });
//Un usuario tiene MUCHAS valoraciones
User.belongsToMany(Valoraciones, { through: "user-valoracion" });

//Una valoracion tiene UN producto
Valoraciones.belongsToMany(Producto, { through: "producto-valoracion" });
//Un producto tiene MUCHAS valoraciones
Producto.belongsToMany(Valoraciones, { through: "producto-valoracion" });

//Un producto tiene MUCHAS categorias
Producto.belongsToMany(Category, { through: "producto-categoria" });
//Una categoria tiene MUCHOS productos
Category.belongsToMany(Producto, { through: "producto-categoria" });

User.hasMany(Carrito, { as: "userID" });
Producto.hasMany(Carrito, { as: "productID" });

Carrito.belongsTo(Compras, { as: "carritoID" });

module.exports = { Carrito, Category, Compras, Producto, User, Valoraciones };
