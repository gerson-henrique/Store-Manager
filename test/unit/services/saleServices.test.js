const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const saleServices = require("../../../services/saleServices");
const saleModel = require('../../../models/salesModel')

describe("testa as funções de Service",() =>{


  
  describe("Testa as função getAll ", () => {
    before(()=>{
      Sinon.stub(saleModel,'getAll')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      saleModel.getAll.restore();
    });

    it("getAll", async () => {
    const [result] = await saleServices.getAll();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função addSale ", () => {
    before(()=>{
      Sinon.stub(saleModel,'addSale')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      saleModel.addSale.restore();
    });

    it("addSale", async () => {
    const [result] = await saleServices.addSale();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função updateSale ", () => {
    before(()=>{
      Sinon.stub(saleModel,'updateSale')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      saleModel.updateSale.restore();
    });

    it("updateSale", async () => {
    const [result] = await saleServices.updateSale();
    expect(result).to.be.an('object');
    })

  })

});


