const { expect } = require("chai");
const sinon = require("sinon");
const productControllers = require("../../../controllers/productControllers");
const productServices = require('../../../services/productServices')

describe("testa as funções de Controller",() =>{
       describe('getAll Response 200', () => {
         const response = {};
         const request = {};
    
         before(() => {
           request.body = {};
    
           response.status = sinon.stub()
             .returns(response);
           response.json = sinon.stub()
             .returns();
    
         sinon.stub(productServices, 'getAll')
         .resolves(false);
         });
    
       after(() => {
        productServices.getAll.restore();
       });
    
         it('é chamado o status com o código 200', async () => {
           await productControllers.getAll(request, response);
    
           expect(response.status.calledWith(200)).to.be.equal(true);
         });
    
      });

      describe('setProduct Response 201', () => {
        const response = {};
        const request = {};
   
        before(() => {
          request.body = {};
   
          response.status = sinon.stub()
            .returns(response);
          response.json = sinon.stub()
            .returns();
   
        sinon.stub(productServices, 'insertProduct')
        .resolves(false);
        });
   
      after(() => {
       productServices.insertProduct.restore();
      });
   
        it('é chamado o status com o código 201', async () => {
          await productControllers.setProduct(request, response);
   
          expect(response.status.calledWith(201)).to.be.equal(true);
        });
   
     });

     describe('attProduct Response 200', () => {
      const response = {};
      const request = {};
 
      before(() => {
        request.body = {};
        request.params = {};
 
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
 
      sinon.stub(productServices, 'updateProduct')
      .resolves(false);
      });
 
    after(() => {
     productServices.updateProduct.restore();
    });
 
      it('é chamado o status com o código 200', async () => {
        await productControllers.attProduct(request, response);
 
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
 
   });


});


