const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const productModel = require("../../../models/productModel.js");

describe("Testa a Disponibilidade de um nome",() =>{
  
  describe("Caso name já esteja ultilizado", () => {
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

    it("retorna false", async () => {
    const result = await productModel.nameDisponibility('lançador de teia do homem aranha');
    expect(result).to.be.equal(false);

  })

})

  describe("Caso name não esteja ultilizado", () => {
    const execute = [];

    before(()=>{
      Sinon.stub(connection,'execute')
      .resolves([execute])
    });

    after(()=>{
      connection.execute.restore();
    });

    it("retorna true", async () => {
    const result = await productModel.nameDisponibility('lançador de teia do homem aranha');
    expect(result).to.be.equal(true);

  })

  })

  

});

