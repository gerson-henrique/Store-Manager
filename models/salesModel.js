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

module.exports = { 
  getAll,
  getById };