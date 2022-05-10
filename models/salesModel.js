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
  return sale;
};

const addSale = async (body) => {
  const corpo = await body;
  console.log(corpo);
  const queryI = 'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP)';
  const queryII = 'SELECT * FROM StoreManager.sales';
  const queryIII = `INSERT INTO StoreManager.sales_products
   (sale_id,product_id, quantity) VALUES (?,?,?)`;
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

const updateSale = async (body, id) => {
  const corpo = await body;
  const index = await id;
  const queryI = 'DELETE from StoreManager.sales_products WHERE sale_id=?';
  const queryIII = `INSERT INTO StoreManager.sales_products
   (sale_id,product_id, quantity) VALUES (?,?,?)`;
  await connection.execute(queryI, [index]);
  corpo.forEach(async (sale) => {
    await connection.execute(queryIII, [id, sale.productId, sale.quantity]);
   });
   return {
     saleId: id,
     itemUpdated: corpo,
   };
};

const idCheck = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?';
  const response = await connection.execute(query, [id]);
  if (response[0].length === 0) return false;
  return true;
};

module.exports = { 
  getAll,
  getById,
  idCheck,
  updateSale,
  addSale,
};