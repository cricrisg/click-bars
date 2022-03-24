const jwt = require('jsonwebtoken');
const clienteModel = require('./models/cliente.model');

const checkToken = async (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.json({ error: 'Tienes que incluir la cabecera de Authorization' });
  }

  const token = req.headers.authorization;

  let obj;
  try {
    obj = jwt.verify(token, process.env.secretkey);
  } catch (error) {
    res.json({ error: 'El token no es válido' });
  }
  const cliente = await clienteModel.getById(obj.cliente_id);
  req.user = cliente;

  next();

}

module.exports = { checkToken }