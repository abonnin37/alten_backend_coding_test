const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require("../middlewares/auth.middleware");

router.get('/:id', auth, userController.getUser);

router.post('/', auth, userController.postUser);

router.put('/:id', auth, userController.putUser);

router.delete('/:id', auth, userController.deleteUser);

module.exports = router;