const express=require ("express");
const router=new express.Router();
const models=require("../models/CarritoModel");
const Carrito=models.CarritoModel;

router.get('/', function (req, res, next) {
  Carrito.findAll()
  .then(productos => res.json(productos))
  .catch(next);
});

router.post('/add', function (req, res, next) {
  Carrito.create(req.body)
  .then(productos => res.json(productos))
  .catch(next);
});

router.put('/edit/:id', function (req, res, next) {
  Carrito.update(
    {cantidad:req.body.cantidad},
    {where:
      {id:req.params.id}
    }
  )
  .then(res.status(200).send())
  .catch(next);
});

router.delete('/delete/:id') function (req,res,next){
  Carrito.destroy(
    {where:{id:req.params.id}}
  )
  .then(res.status(200).send())
}


module.exports=router;
