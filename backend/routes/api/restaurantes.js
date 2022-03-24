const router = require('express').Router();
const { checkToken } = require('../../middlewares');
const restauranteModel = require('../../models/restaurante.model');

// Ruta para recuperar todos los restaurantes
router.get('/', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const total = req.query.total || 5;
    const result = await restauranteModel.getAll(parseInt(page), parseInt(total));
    res.json(result);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

// Ruta para ver las reservas que hay.
router.get('/reservas/disponibles/:idRestaurante/:fecha', async (req, res) => {
  try {
    const result = await restauranteModel.checkDisponibilidad(req.params.idRestaurante, req.params.fecha);
    res.json(result);
  } catch (err) {
    res.json({ Error: 'No se ha introducido ninguna fecha' });
  }
})

// Ruta para recuperar un restaurante
router.get('/:idRestaurante', async (req, res) => {
  try {
    const result = await restauranteModel.getById(req.params.idRestaurante)
    res.json(result);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

// Ruta para hacer una reserva
router.post('/reserva/:barId/:clienteId', checkToken, async (req, res) => {
  try {
    if (req.body.comensales > 0 && req.body.fecha != "" && req.body.hora != "") {
      const result = await restauranteModel.createReserva(req.params.barId, req.params.clienteId, req.body);
      res.json(result)
    } else {
      res.json({ Error: "Error en uno o más parámetros" })
    }

  } catch (err) {
    res.json({ Error: 'La reserva no se ha realizado correctamente' })
  }
})

// Ruta para modificar una reserva
router.put('/modificar/:idReserva', checkToken, async (req, res) => {
  try {
    const result = await restauranteModel.changeReserva(req.params.idReserva, req.body);
    if (result.affectedRows === 1) {
      res.json({ Success: 'Reserva modificada con éxito' })
    } else {
      res.json({ Error: 'No se ha podido modificar la reserva' });
    }

  } catch (err) {
    res.json({ Error: err.message })
  }
})

// Ruta para eliminar una reserva
router.delete('/eliminar/:idReserva', checkToken, async (req, res) => {
  try {
    const result = await restauranteModel.deleteReserva(req.params.idReserva);
    res.json({ Success: 'Reserva eliminada' });
  } catch (err) {
    res.json({ Error: 'No se ha podido eliminar la reserva' })
  }

})



module.exports = router;