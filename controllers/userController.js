const User = require('../models/User');
const jwt = require('jsonwebtoken');
const userValidator = require('../validators/userValidator');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    // Validar los datos recibidos utilizando el esquema de validación
    const { error } = userValidator.registerSchema.validate(req.body);

    if (error) {
        console.error('Error en el registro:', error);
        return res.status(400).json({ message: 'Datos de usuario no válidos' });
    }

    const { username, password } = req.body;

    // Verificar si el username ya existe en la base de datos
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
        return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    // Crear el hash de la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario en la base de datos
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error en el registro:', error);
    return res.status(500).json({ message: 'Error al registrar al usuario' });
  }
};

exports.welcome = async (req, res) => {
    try {
        // Verificar el token de sesión del usuario
        const token = req.headers.authorization.split(' ')[1]; // Obtener el token del encabezado Authorization
        const { id, iat, exp } = jwt.verify(token, process.env.JWT_SECRET);
        console.info('token de sesión:', { id, iat, exp });

        const existingUser = await User.findOne({ where: { id } });

        // Obtener el nombre de usuario del usuario relacionado
        const username = existingUser.username;

        // Si el token es válido, devolver un mensaje de bienvenida con el nombre de usuario
        return res.status(200).json({ message: `¡Bienvenido, ${username}! Has verificado correctamente el token de sesión.` });
    } catch (error) {
      console.error('Error al verificar el token de sesión:', error);
      return res.status(401).json({ message: 'Error de permisos. Token de sesión inválido.' });
    }
  };
  