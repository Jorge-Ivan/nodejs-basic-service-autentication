const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    // Obtener el token de la cabecera de autorización
    const token = req.headers.authorization.split(' ')[1];

    // Verificar el token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Pasar el ID de usuario decodificado al siguiente middleware/ruta
    req.userId = decodedToken.id;

    // Continuar con el siguiente middleware/ruta
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error);
    return res.status(401).json({ message: 'Error de autenticación. Token inválido.' });
  }
};

module.exports = verifyToken;
