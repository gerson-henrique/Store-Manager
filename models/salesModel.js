const connection = require('./connection');

// const serialize = (data) => ({
// saleId: data.sale_id,
// productId: data.product_id,
// quantity: data.quantity });

const getAll = async () => {
  const query = `SELECT SP.sale_id as saleId,
  SP.product_id as productId,
  sales.date,
  SP.quantity 
  FROM StoreManager.sales_products as SP
  JOIN StoreManager.sales as sales
  on sales.id =  SP.sale_id
   ORDER BY sale_id ASC, product_Id ASC;`;
  const [sales] = await connection.execute(query);
  // return sales.map(serialize);
  return sales;
};

const getById = async (id) => {
  const query = `SELECT 
  SP.product_id as productId,
  sales.date,
  SP.quantity 
  FROM StoreManager.sales_products as SP
  JOIN StoreManager.sales as sales
  on sales.id =  SP.sale_id
  WHERE sales.id = ?;`;
  const [sale] = await connection.execute(query, [id]);
  console.log(typeof (sale));
  return sale;
};

const addSale = async (body) => {
  const corpo = await body;
  console.log(corpo);
  const queryI = 'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP)';
  const queryII = 'SELECT * FROM StoreManager.sales';
  const queryIII = `INSERT INTO StoreManager.sales_products
   (sale_id,product_id, quantity) VALUES (?,?,?)`;
  const queryIV = 'SELECT * FROM StoreManager.sales_products';
  await connection.execute(queryI);
  const [product] = await connection.execute(queryII);
  const { id } = product[product.length - 1];
  corpo.forEach(async (sale) => {
    await connection.execute(queryIII, [id, sale.productId, sale.quantity]);
   });
   return {
     id,
     itemsSold: corpo,
   };
};

const nameDisponibility = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name=?';
  const response = await connection.execute(query, [name]);
  console.log(response[0]);
  if (response[0].length === 0) return true;
  return false;
};

const updateProduct = async (id, name, quantity) => {
  const queryI = 'UPDATE StoreManager.products SET name=?, quantity=? WHERE id=?';
  const queryII = 'SELECT * FROM StoreManager.products WHERE id=?';
  await connection.execute(queryI, [name, quantity, id]);
  const [product] = await connection.execute(queryII, [id]);
  return product[0];
};

const idCheck = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?';
  const response = await connection.execute(query, [id]);
  if (response[0].length === 0) return false;
  return true;
};

const deleteProduct = async (id) => {
  const queryII = 'DELETE from StoreManager.products WHERE id=?';
  const queryI = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [product] = await connection.execute(queryI, [id]);
  await connection.execute(queryII, [id]);
  return product[0];
};

module.exports = { 
  getAll,
  getById,
  deleteProduct,
  idCheck,
  updateProduct,
  nameDisponibility,
  addSale,
};