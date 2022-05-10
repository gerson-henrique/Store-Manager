const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const saleModel = require("../../../models/salesModel");

describe("Insira uma venda no BD",() =>{


  const execute =   [  {
    "id": 1,
    "date": 3
  }]

  before(()=>{
    Sinon.stub(connection,'execute')
    .resolves([execute])
  });

  after(()=>{
    connection.execute.restore();
  });
  
  describe("Caso dados estejam validados", () => {

    it("retorna um objeto", async () => {
    const result = await saleModel.updateSale(  [
      {
        "productId": 1,
        "quantity": 3
      }
    ]);
    expect(result).to.be.an('object');

  })

  it("o objeto não esta vazio",async () => {
    const result = await saleModel.updateSale(  [
      {
        "productId": 1,
        "quantity": 3
      }
    ]);
    expect(result).to.be.not.empty;
  })


  it("Os objetos contem os atributos: id,name, quantity",async () => {
    const result = await saleModel.updateSale(  [
      {
        "productId": 1,
        "quantity": 3
      }
    ]);
    expect(result).to.be.includes.all.keys(["itemUpdated","saleId"]);
  })

  })

});

