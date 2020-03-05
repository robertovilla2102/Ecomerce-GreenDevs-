const { User, Producto } = require("./models/index");

User.bulkCreate([
  {
    userName: "Admin Master",
    userEmail: "master@master.com",
    imgProfile:
      "https://www.interecotec.com/wp-content/uploads/2017/02/person-icon.png",
    password: "contraseña",
    birthDay: "15/2/90",
    address: " Lodetumama 555",
    isAdmin: true
  },
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
    name: "Agave",
    price: 50,
    imgProfile:
      "/imagenes/Productos/1.png",
    stock: 30,
    description: "El Agave americana o pita es originario de México. Esta planta crece a modo de roseta que florecen una vez en su vida (con un tallo de 8 m de altura flor, después de 30 a 40 años) muriendo después. Esto sucede después de que produzca un montón de plantas jóvenes en su base y en lo alto de la flor después de la floración.Necesita un lugar calido. No necesita riego salvo para evitar que las hojas se sequen cuando se cultiva en maceta. Existen variedades verdes y variegadas.",
    disponibilidad: true
  },
  {
    name: "Planta del viento",
    price: 30,
    imgProfile:
      "/imagenes/Productos/2.png",
    stock: 10,
    description: "Una familia de suaves hojas carnosas y perennes que se encuentran en las laderas de las Islas Canarias, Norte de África y el Mediterráneo. Produce rosetas de hojas en la parte superior de los tallos, las flores se produce a partir de los centros de estas rosetas desde la primavera hasta el verano, floreciendo en colores amarillos.",
    disponibilidad: true
  },
  {
    name: "Cabeza negra",
    price: 100,
    imgProfile:
      "/imagenes/Productos/3.png",
    stock: 5,
    description: "El género Aeonium pertenece a la familia de las Crasuláceas y lo forman unas 40 especies procedentes de la Islas Canarias, Etiopía y la península arábica.Este Eonio es la variedad Schwarzkopf (cabeza negra en alemán) del Aeonium arboreum. Es una planta crasa puede llegar a 1 metro de alto y tiene grandes rosetas de hojas al final del tallo que son de color negro o, en climas cálidos como el mediterráneo, de color púrpura. Producen pequeñas y abundantes flores amarillas en inflorescencias cónicas. Florecen de invierno a inicios de la primavera.",
    disponibilidad: true
  },
  {
    name: "Aeonio",
    price: 5,
    imgProfile:
      "/imagenes/Productos/4.png",
    stock: 1,
    description: "Es uno de los bejeques más interesantes por sus grandes rosetas de hasta 30 cm de diámetro y su porte arbustivo. Las hojas son carnosas, de forma espatulada con una acusada punta, de color verde claro y presentan el borde finamente dentado y de color rojizo. Las flores tienen forma de estrella, surgen en inflorescencias por encima de las hojas y pueden ser de color blanco o rosa. Las rosetas que florecen suelen morir tras la floración pero la planta tiende a ramificarse y producir más rosetas.",
    disponibilidad: true
  },
  {
    name: "Maguey de monte",
    price: 300,
    imgProfile:
      "/imagenes/Productos/5.png",
    stock: 25,
    description: "El género Agave se incluye en la familia de las Amarilidaceae y lo componen unas 350 especies de plantas suculentas originarias de México, Centroamérica y el Suroeste de los Estados Unidos de América. Son agaves de porte compacto que alcanzan los 90 cm de diámetro y más de 4 metros de altura cuando florecen. ",
    disponibilidad: true
  },
  {
    name: "Góngaro Canario",
    price: 250,
    imgProfile:
      "/imagenes/Productos/6.png",
    stock: 1,
    description: "Es una planta suculenta de porte arbustivo ramificado y más bien compacto con rosetas de hasta 25 cm de diámetro. Presenta carnosas hojas de color verde vivo, con pelillos glandulares, que se ponen rojizas con el sol directo. Las flores aperecen en inflorescencias de unos 40 cm de altura y son de color amarillo. Florecen desde finales de invierno a principios de primavera.",
    disponibilidad: true
  },
  {
    name: "Madreperla",
    price: 80,
    imgProfile:
      "/imagenes/Productos/7.png",
    stock: 15,
    description: "Unas 12 especies de plantas suculentas originarias de México forman el género Graptopetalum, dentro de la familia de las Crasuláceas. Las principales especies son: Graptopetalum paraguayense, Graptopetalum amethystinum, Graptopetalum bellum, Graptopetalum pentandrum. Se trata de plantas crasas de porte casi rastrero (postrado) con hojas gruesas espátulo-abovadas que forman rosetas; suelen ser de color gris o verde grisáceo. Las flores se presentan en panículas y son blancas y con forma de estrella. Florecen en primavera.",
    disponibilidad: true
  },
  {
    name: "Gasteria",
    price: 33,
    imgProfile:
      "/imagenes/Productos/8.png",
    stock: 10,
    description: "El género Gasteria pertenece a la familia de las Xanthorrhoeaceae y lo forman unas 80 especies de plantas suculentas nativas de Sudáfrica. Son pequeñas plantas suculentas de crecimiento lento que no suelen superar los 20-25 cm de altura. Sus decorativas hojas son de color verde oscuro con manchas claras que se disponen en dos filas, una sobre otra. Las flores aparecen en tallos florales por encima de la planta pero no son interesantes desde el punto de vista ornamental. Florecen en primavera.",
    disponibilidad: true
  },
  {
    name: "Planta Viva",
    price: 33,
    imgProfile:
      "/imagenes/Productos/9.png",
    stock: 10,
    description: "El Argyroderma testiculare, también conocido como planta viva, es una planta suculenta del género Argyroderma que comprende más de 50 especies. Esta hermosa planta crasa es originaria de la costa de Namaqualand, en el suroeste de Sudáfrica y se reproduce activamente mientras que sus flores de color púrpura le dan mucho carácter.",
    disponibilidad: true
  },
  {
    name: "Cactus Barril",
    price: 150,
    imgProfile:
      "/imagenes/Productos/10.png",
    stock: 10,
    description: "El ferocactus latispinus es un hermoso miembro de la familia de las cactáceas y comúnmente se lo llama cactus barril. Su origen es mexicano. Su tallo aplanado a esférico tiene un diámetro de hasta 45 cm y 35 cm de alto. Desde finales del otoño a principios del invierno, proporciona brillantes flores de color púrpura de hasta 6 cm de alto y 3 cm de ancho. Continúa leyendo para saber cuáles son sus cuidados.",
    disponibilidad: true
  },
  {
    name: "San Pedro",
    price: 33,
    imgProfile:
      "/imagenes/Productos/11.png",
    stock: 10,
    description: "San Pedro o Wachuma es el pachanoi Echinopsis y Trichocereus, un cactus originario de los Andes, este cactus se utiliza aún hoy en día ritualmente por los indígenas de Perú, Bolivia, Ecuador, Colombia, Venezuela y Brasil, para lograr una relación más estrecha con los dioses – es este extracto de cactus de mescalina, el ingrediente activo del mezcal, expansor de la conciencia utilizado por los nativos.",
    disponibilidad: true
  },
  {
    name: "Cactus Erizo",
    price: 33,
    imgProfile:
      "/imagenes/Productos/12.png",
    stock: 10,
    description: "Conocido como cactus erizo o asiento de suegra, es originario del centro de México. Aunque esta planta suculenta es una de las más cultivadas, está considerada como especie en peligro de extinción en su hábitat. Es una planta de desierto, por cual necesita mucho sol y no sobrevive a las heladas.",
    disponibilidad: true
  },
  {
    name: "La chumbrera",
    price: 33,
    imgProfile:
      "/imagenes/Productos/13.png",
    stock: 10,
    description: "Esta planta arbustiva de la familia Cactaceae es originaria de América, aunque también se encuentran en regiones del Mediterráneo y de África. La chumbera es un cactus en forma de matorral, que puede llegar a alcanzar los 4 metros tanto de altura como de ancho. Crece muy rápido y produce segmentos planos, de color verde azulado. Como la mayoría de variedades de este género, carece de hojas y presenta dos clases de espinas. Algunas son duras y largas y, las otras, finas y con pelos.",
    disponibilidad: true
  },
  {
    name: "Cactus de Navidad",
    price: 33,
    imgProfile:
      "/imagenes/Productos/14.png",
    stock: 10,
    description: "Originario de Brasil, es una de las especies más comunes y se lo conoce como cactus navideño. Es una planta perenne, de hojas planas y muy carnosas. Sus flores pueden variar entre los colores blanco, rosa, rojo o púrpura. Sus tallos son colgantes y tienen muchas ramificaciones. No tiene espinas pero sí tienen un contorno dentado. Esta suculenta se desarrolla en zonas de sombra. Si tiene poca luz y el ambiente es fresco, su floración es más espectacular. Crece muy bien en un suelo con mezcla de arena y turba y requiere agua sin que se encharque. Se multiplica por esquejes, injertos o semillas.",
    disponibilidad: true
  },
  {
    name: "Cactus de flores rosas",
    price: 33,
    imgProfile:
      "/imagenes/Productos/15.png",
    stock: 10,
    description: "El Mammillaria fraileana es un cactus originario de México. Su particular apariencia la convierten en una planta de gran interés ornamental, perfecta para decoración de jardines y espacios interiores. Se trata de una especie perenne y carnosa (acumula agua y nutrientes en sus hojas/tallo). Tiene una forma cilíndrica, con tonalidad púrpura tirando a rojizo y por lo general, forma pequeños cojines.",
    disponibilidad: true
  },
  {
    name: "Cola de burro",
    price: 33,
    imgProfile:
      "/imagenes/Productos/16.png",
    stock: 10,
    description: "El Sedum morganianum es uno de los Sedum más bonitos. Son plantas suculentas de hoja perenne originarias del sur de México. Esta especie está relacionada con Sedum Burrito, pero el follaje difiere en la forma. Se ha especulado que quizás el Sedum «burrito» sea un híbrido natural de Sedum morganianum «burrito».",
    disponibilidad: true
  },
  {
    name: "Flor",
    price: 33,
    imgProfile:
      "/imagenes/Productos/17.png",
    stock: 10,
    description: "Esta es una hermosa planta",
    disponibilidad: true
  },
  {
    name: "Planta Rosario",
    price: 33,
    imgProfile:
      "/imagenes/Productos/18.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Cactus Llano",
    price: 700,
    imgProfile:
      "/imagenes/Productos/19.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Cactus chico",
    price: 500,
    imgProfile:
      "/imagenes/Productos/20.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Arce Japonés",
    price: 900,
    imgProfile:
      "/imagenes/Productos/29.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Arce Tridente",
    price: 1900,
    imgProfile:
      "/imagenes/Productos/30.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Granado",
    price: 800,
    imgProfile:
      "/imagenes/Productos/21.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Bonsai de Jacarandá",
    price: 3800,
    imgProfile:
      "/imagenes/Productos/22.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Olmo Chino",
    price: 600,
    imgProfile:
      "/imagenes/Productos/23.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Zelkova Japonesa",
    price: 3460,
    imgProfile:
      "/imagenes/Productos/24.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Haya Europea",
    price: 1590,
    imgProfile:
      "/imagenes/Productos/25.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Haya Japonesa",
    price: 6900,
    imgProfile:
      "/imagenes/Productos/26.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Goshin",
    price: 9000,
    imgProfile:
      "/imagenes/Productos/27.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  },
  {
    name: "Bonsai Pequeño",
    price: 700,
    imgProfile:
      "/imagenes/Productos/28.png",
    stock: 10,
    description: "Como muchas especies de senecios, el Senecio Rowleyanus forma tallos colgantes muy largos, desarrollando un número de pequeñas hojas redondas del tamaño de una perla. Esta suculenta sudafricana puede crecer hasta un metro de largo si recibe un cuidado adecuado. Estas especies prosperan con mucha luz solar, pero debes evitar exponerlas al sol directo de la tarde ya que las hojas pueden quemarse. A las plantas más jóvenes les gusta un riego más frecuente en comparación con una planta de Collar de Perlas madura. De todos modos, riégalos cuando el suelo esté totalmente seco.",
    disponibilidad: true
  }
]);
