const chai = require('chai')

var should    = require("chai").should(),
  expect      = require("chai").expect;

const main = require('../src/calculator')

// call a function of calculator
main.calculator.saySomething();

describe("calculator", function() {
  //tests will be written inside this function
  describe("add", function() {
      it('should be a function', function () {
        expect(main.calculator.add).to.be.a('function')
      })

      it('should add two numbers together', function () {
        expect(main.calculator.add(2,2)).to.equal(4)
      })
  });

  describe('#multiply', function () {
    it('should be a function', function () {
      expect(main.calculator.multiply).to.be.a('function')
    })

    it('should multiply two numbers together', function () {
      expect(main.calculator.multiply(5,2)).to.equal(10)
    })
  });

  describe('#divide', function () {
    it('should be a function', function () {
      expect(main.calculator.divide).to.be.a('function')
    })

    it('should divide two numbers together', function () {
      expect(main.calculator.divide(10,2)).to.equal(5)
    })
  })

});
