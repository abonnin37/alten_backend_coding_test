const express = require('express');
const cors = require('cors');
const mongoose = require('./mongoose');
const Product = require('./models/product')

const app = express();

// Use the CORS middleware
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));
});

app.get('/api/products/:id', (req, res, next) => {
    Product.findOne({ _id: req.params.id})
        .then(product => res.status(200).json(product))
        .catch(error => res.status(400).json({ error }));
});

app.post('/api/products', (req, res, next) => {
    delete req.body._id;
    const product = new Product(req.body);

    product.save()
        .then((product) => res.status(201).json(product))
        .catch(error => res.status(400).json({ error }));
});

app.put('/api/products/:id', (req, res, next) => {
    console.log(req.body);
    Product.updateOne({ _id: req.params.id }, req.body)
        .then(response => {
            if (response.modifiedCount === 1) {
                res.status(200).json({message: "Le produit a bien été modifié."});
            } else {
                res.status(400).json({message: "Le produit n'a pas été modifié."});
            }
        })
        .catch(error => res.status(400).json({ error }));
});

app.delete('/api/products/:id', (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Le produit a bien été supprimé.'}))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;