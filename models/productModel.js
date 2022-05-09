const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM `StoreManager`.products');
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [product] = await connection.execute(query, [id]);
  return product[0];
};

const insertProduct = async (name, quantity) => {
  const queryI = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?,?)';
  const queryII = 'SELECT * FROM StoreManager.products WHERE name=?';
  await connection.execute(queryI, [name, quantity]);
  const [product] = await connection.execute(queryII, [name]);
  return product[0];
};

const nameDisponibility = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name=?';
  const response = await connection.execute(query, [name]);
  console.log(response[0]);
  if (response[0].length === 0) return true;
  return false;
};

module.exports = { 
  nameDisponibility,
  getAll,
  getById,
  insertProduct,
 };