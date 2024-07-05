const Product = require("../models/product.model");

async function getProducts(req, res, next) {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));
}

async function getProduct(req, res, next) {
    Product.findOne({ _id: req.params.id})
        .then(product => res.status(200).json(product))
        .catch(error => res.status(400).json({ error }));
}

async function postProduct(req, res, next) {
    delete req.body._id;
    const product = new Product(req.body);

    product.save()
        .then((product) => res.status(201).json(product))
        .catch(error => res.status(400).json({ error }));
}

async function putProduct(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
        .then(response => {
            if (response.modifiedCount === 1) {
                res.status(200).json({message: "Le produit a bien été modifié."});
            } else {
                res.status(400).json({message: "Le produit n'a pas été modifié."});
            }
        })
        .catch(error => res.status(400).json({ error }));
}

async function deleteProduct(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Le produit a bien été supprimé.'}))
        .catch(error => res.status(400).json({ error }));
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
};