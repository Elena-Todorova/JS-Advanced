const chai = require('chai');
const expect = chai.expect;


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
    return undefined;
    }
    if (string.length % 2 === 0) {
    return "even";
    }
    return "odd";
   }
  
   describe("Test for odd or even strinh length", function () {
    it("Test for undefind", function () {
        expect(isOddOrEven(1)).to.equal(undefined);
    });
    it("Test for even", function () {
        expect(isOddOrEven("1234")).to.equal("even");
    });
    it("Test for odd", function () {
        expect(isOddOrEven("123")).to.equal("odd");
    });
   })