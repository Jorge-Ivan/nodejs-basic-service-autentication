const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar al usuario por nombre de usuario en la base de datos
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Nombre de usuario incorrecto' });
    }

    // Verificar la contraseña del usuario
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generar el token de acceso
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ message: 'Error en el inicio de sesión' });
  }
};
