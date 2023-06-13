const Joi = require('joi');

// Esquema de validación para el registro de usuario
exports.registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).required(),
});
