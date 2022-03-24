const router = require('express').Router();

const restaurantesApiRouter = require('./api/restaurantes');
const clientesApiRouter = require('./api/clientes');

router.use('/restaurantes', restaurantesApiRouter);
router.use('/clientes', clientesApiRouter);

module.exports = router;