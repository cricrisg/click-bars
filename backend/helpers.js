// Funciones para hacer las peticiones a la base de datos.
const jwt = require('jsonwebtoken');


const executeQuery = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  })
};

// Función que devuelve un array con un unico objeto, por eso hay que hacer [0].
const executeQueryOne = (sql, values = [],) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      if (result.length === 0) return resolve(null);
      resolve(result[0]);
    })
  })
};

// Función para crear un token
const createToken = (cliente) => {
  const obj = {
    cliente_id: cliente.id
    // expiracion: dayjs().add(1, 'day').unix()
  }

  return jwt.sign(obj, process.env.secretkey);
}

module.exports = { executeQuery, executeQueryOne, createToken }