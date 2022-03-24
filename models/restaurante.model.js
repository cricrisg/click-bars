// Funciones con las sentencias SQL
const { executeQuery, executeQueryOne } = require('../helpers');

const getAll = (page, total) => {
  return executeQuery('select * from bares limit ? offset ?', [total, (page - 1) * total]);
}

const getById = (idRestaurante) => {
  return executeQueryOne('select * from bares where id=?', [idRestaurante]);
}

const checkDisponibilidad = (idRestaurante, fecha) => {
  return executeQueryOne('Select count(reservas.id) num_reservas, bares.nombre, bares.mesas, reservas.fecha from reservas inner join bares on reservas.bar_id= bares.id where fecha=? and reservas.bar_id=?', [fecha, idRestaurante]);
}

const createReserva = (barId, clienteId, { comensales, fecha, hora }) => {
  return executeQuery('insert into reservas(bar_id, cliente_id, comensales, fecha,hora) values (?, ?, ?, ?,?)', [barId, clienteId, comensales, fecha, hora]);
}

const changeReserva = (idReserva, { comensales, fecha, hora }) => {
  return executeQuery('update reservas set comensales=?, fecha=?, hora=? where id=?', [comensales, fecha, hora, idReserva]);
}

const deleteReserva = (idReserva) => {
  return executeQuery('delete from reservas where id=?', [idReserva]);
}



module.exports = {
  getAll, getById, createReserva, changeReserva, deleteReserva, checkDisponibilidad
}