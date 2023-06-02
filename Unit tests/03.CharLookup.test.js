const chai = require('chai');
const expect = chai.expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

describe("Test valid string or index", function(){
    it("Test is not a string", function(){
        expect(lookupChar(3, 0)).to.be.undefined;
    });
    it("Test index is a floating number", function(){
        expect(lookupChar('a', 1.1)).to.be.undefined;
    });
    it("Test valid", function(){
        expect(lookupChar('a', 0)).to.equal('a');
    });
    it("Test index is bigger", function(){
        expect(lookupChar('a', 1)).to.equal("Incorrect index");
    });
    it("Test index is negative", function(){
        expect(lookupChar('a', -1)).to.equal("Incorrect index");
    });
})
