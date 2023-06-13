const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

// Ruta para el registro de usuario sin verificación
router.post('/register', userController.register);

// Ruta para la bienvenida del usuario con verificación de token
router.get('/welcome', verifyToken, userController.welcome);

module.exports = router;
