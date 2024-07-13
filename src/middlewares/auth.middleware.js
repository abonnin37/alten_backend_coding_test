const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // Récupération de la chaîne de caractère après le préfix 'Bearer'
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        res.status(401).json({ message : "Vous devez vous identifier." });
    }
};