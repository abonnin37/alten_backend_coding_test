const User = require("../models/user.model");

async function getUser(req, res, next) {
    User.findOne({ _id: req.params.id})
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
}

async function postUser(req, res, next) {
    delete req.body._id;
    const user = new User(req.body);

    user.save()
        .then((product) => res.status(201).json(product))
        .catch(error => res.status(400).json({ error }));
}

async function putUser(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
        .then(response => {
            if (response.modifiedCount === 1) {
                res.status(200).json({message: "L'utilisateur a bien été modifié."});
            } else {
                res.status(400).json({message: "L'utilisateur n'a pas été modifié."});
            }
        })
        .catch(error => res.status(400).json({ error }));
}

async function deleteUser(req, res, next) {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'L\'utilisateur a bien été supprimé.'}))
        .catch(error => res.status(400).json({ error }));
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
};