const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const productServices = require("../../../services/productServices");
const productModel = require('../../../models/productModel')

describe("testa as funções de Service",() =>{


  
  describe("Testa as função getAll ", () => {
    before(()=>{
      Sinon.stub(productModel,'getAll')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      productModel.getAll.restore();
    });

    it("getAll", async () => {
    const [result] = await productServices.getAll();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função getById ", () => {
    before(()=>{
      Sinon.stub(productModel,'getById')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      productModel.getById.restore();
    });

    it("getById", async () => {
    const [result] = await productServices.getById();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função insertProduct ", () => {
    before(()=>{
      Sinon.stub(productModel,'insertProduct')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      productModel.insertProduct.restore();
    });

    it("insertProduct", async () => {
    const [result] = await productServices.insertProduct();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função updateProduct ", () => {
    before(()=>{
      Sinon.stub(productModel,'updateProduct')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      productModel.updateProduct.restore();
    });

    it("updateProduct", async () => {
    const [result] = await productServices.updateProduct();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função deleteProduct ", () => {
    before(()=>{
      Sinon.stub(productModel,'deleteProduct')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      productModel.deleteProduct.restore();
    });

    it("deleteProduct", async () => {
    const [result] = await productServices.deleteProduct();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função idCheck ", () => {
    before(()=>{
      Sinon.stub(productModel,'idCheck')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      productModel.idCheck.restore();
    });

    it("idCheck", async () => {
    const [result] = await productServices.idCheck();
    expect(result).to.be.an('object');
    })

  })

  describe("Testa as função nameDisponibility ", () => {
    before(()=>{
      Sinon.stub(productModel,'nameDisponibility')
      .resolves([{
        id:1,
        name: 'lançador de teia do homem aranha',
        quantity: 10
      }])
    });
  
    after(()=>{
      productModel.nameDisponibility.restore();
    });

    it("nameDisponibility", async () => {
    const [result] = await productServices.nameDisponibility();
    expect(result).to.be.an('object');
    })

  })

});


