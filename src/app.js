const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.route');

const app = express();

// Use the CORS middleware
app.use(cors());
app.use(express.json());

// default route
app.get('/', (req, res) => {
    res.json({'message': 'ok'});
})

app.use('/api/products', productRouter);

module.exports = app;