const { User, Producto } = require("./models/index");

User.bulkCreate([
  {
    userName: "Juan",
    userEmail: "lalal@masdasdas.com",
    imgProfile:
      "https://www.interecotec.com/wp-content/uploads/2017/02/person-icon.png",
    password: "contraseña",
    birthDay: "15/2/90",
    address: " Lodetumama 555",
    isAdmin: false
  },
  {
    userName: "Pedro",
    userEmail: "lalaaaal@maasdasdas.com",
    imgProfile:
      "https://www.interecotec.com/wp-content/uploads/2017/02/person-icon.png",
    password: "contraseña",
    birthDay: "15/2/90",
    address: " Lodetumama 555",
    isAdmin: false
  },
  {
    userName: "Celes",
    userEmail: "lalaaal@masdaaaasdas.com",
    imgProfile:
      "https://www.interecotec.com/wp-content/uploads/2017/02/person-icon.png",
    password: "contraseña",
    birthDay: "15/2/90",
    address: " Lodetumama 555",
    isAdmin: false
  },
  {
    userName: "German",
    userEmail: "lalsssal@masdasssdas.com",
    imgProfile:
      "https://www.interecotec.com/wp-content/uploads/2017/02/person-icon.png",
    password: "contraseña",
    birthDay: "15/2/90",
    address: " Lodetumama 555",
    isAdmin: false
  },
  {
    userName: "Luz",
    userEmail: "lalaaaaal@masdasdas.com",
    imgProfile:
      "https://www.interecotec.com/wp-content/uploads/2017/02/person-icon.png",
    password: "contraseña",
    birthDay: "15/2/90",
    address: " Lodetumama 555",
    isAdmin: false
  },
  {
    userName: "Rober",
    userEmail: "lalqqqqal@masdasdas.com",
    imgProfile:
      "https://www.interecotec.com/wp-content/uploads/2017/02/person-icon.png",
    password: "contraseña",
    birthDay: "15/2/90",
    address: " Lodetumama 555",
    isAdmin: false
  }
]);

Producto.bulkCreate([
  {
    name: "Potus",
    price: 50,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 30,
    description: "Esta es una hermosa planta",
    disponibilidad: true
  },
  {
    name: "Helecho",
    price: 30,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 10,
    description: "Esta es una hermosa planta, uoooouooo",
    disponibilidad: true
  },
  {
    name: "Ficus",
    price: 100,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 5,
    description: "Esta es una hermosa planta, pero medio vieja",
    disponibilidad: true
  },
  {
    name: "Enredadera",
    price: 5,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 1,
    description: "Esta es una hermosa planta",
    disponibilidad: true
  },
  {
    name: "Palmera",
    price: 300,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 25,
    description: "Esta es una es un bello arbol",
    disponibilidad: true
  },
  {
    name: "Sauce",
    price: 5000,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 1,
    description: "Esta es un Arbol gigante",
    disponibilidad: true
  },
  {
    name: "Pasto",
    price: 10,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 15,
    description: "Esta es una hermosa planta",
    disponibilidad: true
  },
  {
    name: "Flor",
    price: 33,
    imgProfile:
      "https://i.pinimg.com/236x/4d/ff/35/4dff35e33ad72356f163a01d185f10cc.jpg",
    stock: 10,
    description: "Esta es una hermosa planta",
    disponibilidad: true
  }
]);
