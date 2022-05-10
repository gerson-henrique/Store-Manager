const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const saleModel = require("../../../models/salesModel");

describe("lista todos as vendas do DB",() =>{
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
    const result = await saleModel.getAll();
    expect(result).to.be.an('array');

  })
  it("O array esta vazio",async () => {
    const result = await saleModel.getAll();
    expect(result).to.be.empty;
  })
  })

  describe("Caso exista produtos cadastrados", () => {
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
    })

    it("retorna um array", async () => {
    const result = await saleModel.getAll();
    expect(result).to.be.an('array');

  })

  it("O array não esta vazio",async () => {
    const result = await saleModel.getAll();
    expect(result).to.be.not.empty;
  })

  it("O array possui objetos",async () => {
    const [result] = await saleModel.getAll();
    expect(result).to.be.an('object');
  })

  it("Os objetos contem os atributos  :id,name, quantity",async () => {
    const [result] = await saleModel.getAll();
    expect(result).to.be.includes.all.keys('id','name','quantity');
  })

  })

});

