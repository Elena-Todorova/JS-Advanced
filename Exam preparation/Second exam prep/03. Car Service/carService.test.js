const expect = require('chai').expect;
const carService = require('./03. Car Service')

describe('carService tests', function () {
    describe('is it expensive', function () {
        it('if issue is Engine or Transmission', function () {
            //arrange
            let issue1 = 'Engine';
            let issue2 = 'Transmission';
            let issue3 = 'Spead';
            

            //act
            let result1 = carService.isItExpensive(issue1);
            let result2 = carService.isItExpensive(issue2);
            let result3 = carService.isItExpensive(issue3);
           

            //assert
            expect(result1).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(result2).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(result3).to.equal('The overall price will be a bit cheaper');
        });
    });
    describe('discount', function (){
        it('test if the type of input is a number', function () {
            //arrange
            let parts = '5';
            let price = '100';

            //act
            let result1Func = () => carService.discount(parts, 30);
            let result2Func = () => carService.discount(50, price);
            let result3Func = () => carService.discount(parts, price);

            //assert
            expect(result1Func).to.throw(Error, 'Invalid input');
            expect(result2Func).to.throw(Error, 'Invalid input');
            expect(result3Func).to.throw(Error, 'Invalid input');
          
        });
        it('test if number of parts if below or equal to 2', function () {
            //arrange
            let parts = 2;
            let price = 10;

            //act
            let result1 = carService.discount(parts, price);

            //assert
            expect(result1).to.equal("You cannot apply a discount");
            
        });
        it('test if the sum is calculated correctly', function () {
            //arrange
            let parts = 3;
            let parts2 = 10;
            let price = 10;
            let discount1 = (15 / 100) * price;
            let discount2 = (30 / 100) * price;

            //act
            let result1 = carService.discount(parts, price);
            let result2 = carService.discount(parts2, price);

            //assert
            expect(result1).to.equal(`Discount applied! You saved ${discount1}$`);
            expect(result2).to.equal(`Discount applied! You saved ${discount2}$`);
            
        });
    });
    describe('parts to buy', function (){
        it('test if the type of input is an array', function () {
            //arrange
            let partsCatalog = 5;
            let neededParts = 10;

            //act
            let result1Func = () => carService.partsToBuy(partsCatalog, ['oil', 'filter']);
            let result2Func = () => carService.partsToBuy([{ part: "blowoff valve", price: 145}], neededParts);
            let result3Func = () => carService.partsToBuy(5, 10);

            //assert
            expect(result1Func).to.throw(Error, 'Invalid input');
            expect(result2Func).to.throw(Error, 'Invalid input');
            expect(result3Func).to.throw(Error, 'Invalid input');
          
        });
        it('test total sum functionality of sells', function () {
            //arrange
            let partsCatalog = [{ part: "blowoff valve", price: 145}, { part: "oil", price: 100}];
            let neededParts = ['oil', 'filter'];

            //act
            let result1 = carService.partsToBuy(partsCatalog, neededParts);
            let result2 = carService.partsToBuy([], neededParts);

            //assert
            expect(result1).to.equal(100);
            expect(result2).to.equal(0);
            
        });

    });
});