const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const productModel = require("../../../models/productModel.js");

describe("lista o produto referido pelo id",() =>{
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
    const result = await productModel.getById(999);
    expect(result).to.be.an('undefined');

  })
  it("retorna um indefinido caso numero 0",async () => {
    const result = await productModel.getById(0);
    expect(result).to.be.an('undefined');
  })
  it("retorna um indefinido caso numero 0",async () => {
    const result = await productModel.getById(-1);
    expect(result).to.be.an('undefined');
  })
  })

  describe("Caso exista o ID enviado", () => {
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

    it("retorna um objeto", async () => {
    const result = await productModel.getById(1);
    expect(result).to.be.an('object');

  })

  it("o objeto não esta vazio",async () => {
    const result = await productModel.getById(1);
    expect(result).to.be.not.empty;
  })


  it("Os objetos contem os atributos: id,name, quantity",async () => {
    const result = await productModel.getById(1);
    expect(result).to.be.includes.all.keys('id','name','quantity');
  })

  })

});

