const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const saleModel = require("../../../models/salesModel");

describe("lista uma venda referida pelo id",() =>{
  describe("Caso não exista o id não seja valido", () => {

    const execute = [ ];

    before(()=>{
      Sinon.stub(connection,'execute')
      .resolves([execute])
    });

    after(()=>{
      connection.execute.restore();
    });
    it("retorna um indefinido caso id não for existente", async () => {
    const result = await saleModel.getById(999);
    expect(result).to.be.empty;

  })
  it("retorna um indefinido caso numero 0",async () => {
    const result = await saleModel.getById(0);
    expect(result).to.be.empty;
  })
  it("retorna um indefinido caso numero 0",async () => {
    const result = await saleModel.getById(-1);
    expect(result).to.be.empty;
  })
  })

  describe("Caso exista o ID enviado", () => {
    const execute = [ {
      date: "2021-09-09T04:54:29.000Z",
      productid: 1,
      quantity: 10
    }];

    before(()=>{
      Sinon.stub(connection,'execute')
      .resolves([execute])
    });

    after(()=>{
      connection.execute.restore();
    });

    it("retorna um objeto", async () => {
    const [result] = await saleModel.getById(1);
    expect(result).to.be.an('object');

  })

  it("o objeto não esta vazio",async () => {
    const result = await saleModel.getById(1);
    expect(result).to.be.not.empty;
  })


  it("Os objetos contem os atributos: date, productId, quantity",async () => {
    const [result] = await saleModel.getById(1);
    expect(result).to.be.includes.all.keys('date','productid','quantity');
  })

  })

});

