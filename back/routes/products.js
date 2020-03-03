const express = require('express')
const routes = express.Router()

//importando Models
const Product = require('../models/ProductoModel')

routes.get('/productos', (req, res, next) => {
    Product.findAll()
        .then(productos => {
            res.status(200).send(productos)
        })
        .catch(next)
})

routes.get('/productos/:id', (req, res, next) => {
    Product.findByPk(req.params.id)
        .then(producto => {
            res.status(200).send(producto)
        })
        .catch(next)
})