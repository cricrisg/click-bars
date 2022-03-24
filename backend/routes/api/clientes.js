const router = require('express').Router();
const clienteModel = require('../../models/cliente.model');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../helpers');
const { checkToken } = require('../../middlewares');


router.get('/miperfil', checkToken, async (req, res) => {
  try {
    res.json(req.user);

  } catch (err) {
    res.json({ Error: 'usuario no encontrado' })
  }

});

// ruta para ver las reservas de un cliente
router.get('/miperfil/misreservas', checkToken, async (req, res) => {
  try {
    const result = await clienteModel.getReservasById(req.user.id);
    res.json(result);

  } catch (err) {
    res.json({ Error: 'usuario no encontrado' })
  }

});


// Ruta para registrarse
router.post('/registro', async (req, res) => {
  try {
    // Encriptamos la contraseña
    req.body.password = bcrypt.hashSync(req.body.password);
    // Llamamos a la función register
    const result = await clienteModel.register(req.body);
    // Miramos si se ha afectado a alguna fila en la BD o no
    if (result.affectedRows === 1) {
      res.json({ Success: 'Usuario registrado' })
    } else {
      res.json({ Error: 'Error al registrar el usuario' })
    }
  } catch (error) {
    res.json({ Error: error.message })
  }
});

// Ruta para el login
router.post('/login', async (req, res) => {
  try {
    // Comprobmos si existe el email
    const cliente = await clienteModel.getByEmail(req.body.email);

    if (!cliente) {

      return res.json({ Error: 'error en usuario y/o contraseña' });
    }
    // Comprobamos si las contraseñas son iguales
    const password = bcrypt.compareSync(req.body.password, cliente.password);
    if (!password) {
      return res.json({ Error: 'error en usuario y/o contraseña' });
    }

    res.json({ Success: 'Login correcto', token: createToken(cliente) });

  } catch (err) {
    res.json({ Error: 'Error al entrar' })
  }


});

module.exports = router;