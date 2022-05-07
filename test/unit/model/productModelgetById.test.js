const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection.js");
const salesModel = require("../../../models/salesModel.js");

describe("O QUE TEM AQUI ??", async () =>{
 const response = await salesModel.getById(1)
 console.log(response)
 it(()=>{
   expect(response).to.be(2)
 })
})