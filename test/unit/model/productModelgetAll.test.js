const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const productModel = require("../../../models/productModel.js");
const salesModel = require("../../../models/salesModel.js");
describe("lista todos os produtos no DB",() =>{
  describe("Caso não exista produtos cadastrados", () => {

    const resultExecute = [[]];
    before(()=>{
      Sinon.stub(connection,'execute')
      .resolves(resultExecute)
    })

    after(()=>{
      connection.execute.restore();
    })
    
    it("retorna um array", async () => {
    const result = await productModel.getAll();
    expect(result).to.be.an('array');

  })
  it("O array esta vazio",async () => {
    const result = await productModel.getAll();
    expect(result).to.be.empty;
  })
  })
});

