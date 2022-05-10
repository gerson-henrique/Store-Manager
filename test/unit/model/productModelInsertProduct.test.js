const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const productModel = require("../../../models/productModel.js");

describe("Insira um produto no BD",() =>{


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
  
  describe("Caso dados estejam validados", () => {

    it("retorna um objeto", async () => {
    const result = await productModel.insertProduct('Capacete do Magineto',10);
    expect(result).to.be.an('object');

  })

  it("o objeto não esta vazio",async () => {
    const result = await productModel.insertProduct('Capacete do Magineto',10);
    expect(result).to.be.not.empty;
  })


  it("Os objetos contem os atributos: id,name, quantity",async () => {
    const result = await productModel.insertProduct('Capacete do Magineto',10);
    expect(result).to.be.includes.all.keys('id','name','quantity');
  })

  })

});

