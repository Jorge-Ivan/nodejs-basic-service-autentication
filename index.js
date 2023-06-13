const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
