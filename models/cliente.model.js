const { executeQuery, executeQueryOne } = require('../helpers');

const register = ({ nombre, apellidos, email, password }) => {
  return executeQuery('insert into clientes (nombre, apellidos, email, password) values(?,?,?,?)', [nombre, apellidos, email, password]);
};

const getByEmail = (email) => {
  return executeQueryOne('select * from clientes where email=?', [email]);
}

const getById = (clienteId) => {
  return executeQueryOne('select * from clientes where id=?', [clienteId]);
}

const getReservasById = (clienteId) => {
  return executeQuery(
    'select r.id as reservaId, r.fecha as fechaReserva, r.comensales, r.hora, b.nombre as nombreBar, b.direccion, b.ciudad, c.id, c.nombre from reservas as r inner join bares as b on r.bar_id=b.id inner join clientes as c on r.cliente_id=c.id where c.id=?', [clienteId]);
}



module.exports = { register, getByEmail, getById, getReservasById }