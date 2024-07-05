const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bonninak:NRF8fNz0mnoz3pjW@cluster0.mya7t4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;