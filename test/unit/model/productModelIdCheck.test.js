const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const productModel = require("../../../models/productModel.js");

describe("Testa a Disponibilidade de um id",() =>{
  
  describe("Caso id exista", () => {
    const execute = [ {
      id:1,
      name: 'lançador de teia do homem aranha',
      quantity: 10
    }];

    before(()=>{
      Sinon.stub(connection,'execute')
      .resolves([execute])
    });

    after(()=>{
      connection.execute.restore();
    });

    it("retorna true", async () => {
    const result = await productModel.idCheck(1);
    expect(result).to.be.equal(true);

  })

})

  describe("caso id não seja ultilizado", () => {
    const execute = [];

    before(()=>{
      Sinon.stub(connection,'execute')
      .resolves([execute])
    });

    after(()=>{
      connection.execute.restore();
    });

    it("retorna false", async () => {
    const result = await productModel.idCheck(1);
    expect(result).to.be.equal(false);

  })

  })

  

});

