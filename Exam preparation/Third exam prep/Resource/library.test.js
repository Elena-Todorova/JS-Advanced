const expect = require('chai').expect;
const library = require('./library');

describe('test library', function () {
    //calcPriceOfBook
    describe('test price of book calculation', function () {
        it('test input', function () {
            let nameOfBook = 20;
            let year = '2000';
            let year2 = 15.6;

            let result1Func = () => library.calcPriceOfBook(nameOfBook, 30);
            let result2Func = () => library.calcPriceOfBook('Alice', year);
            let result3Func = () => library.calcPriceOfBook('Alice', year2);

            expect(result1Func).to.throw(Error, 'Invalid input');
            expect(result2Func).to.throw(Error, 'Invalid input');
            expect(result3Func).to.throw(Error, 'Invalid input');
        });
        it('test if the price and discount are correctly calculated', function () {
            let nameOfBook = 'Alice';
            let year = 2000;
            let year2 = 1980;
            let year3 = 1950;
            let price = 20;
            let total = 10;

            let result1 = library.calcPriceOfBook(nameOfBook, year);
            let result2 = library.calcPriceOfBook(nameOfBook, year2);
            let result3 = library.calcPriceOfBook(nameOfBook, year3);

            expect(result1).to.equal(`Price of ${nameOfBook} is ${price.toFixed(2)}`);
            expect(result2).to.equal(`Price of ${nameOfBook} is ${total.toFixed(2)}`);
            expect(result3).to.equal(`Price of ${nameOfBook} is ${total.toFixed(2)}`);
        });
    });

    describe('test if there is the desire book', function () {
        it('test if array is empty', function () {
            let bookArr = [];
            let desireBook = 'Alice';
            
            let result1Func = () => library.findBook(bookArr, desireBook);
            
            expect(result1Func).to.throw(Error, "No books currently available");
           
        });
        it('test arrange books to the shelves', function () {
            let bookArr = ['Alice', 'Beauty', 'The little prince'];
            let desireBook = 'Alice';
            let desireBook2 = 'Cindarela';

            let result1 = library.findBook(bookArr, desireBook);
            let result2 = library.findBook(bookArr, desireBook2);
            
            expect(result1).to.equal("We found the book you want.");
            expect(result2).to.equal( "The book you are looking for is not here!");
            
        });
    });

    describe('arrange books to the shelves', function () {
        it('test input', function () {
            let countBooks = 20.5;
            let countBooks2 = '2000';

            let result1Func = () => library.arrangeTheBooks(countBooks);
            let result2Func = () => library.arrangeTheBooks(countBooks2);

            expect(result1Func).to.throw(Error, 'Invalid input');
            expect(result2Func).to.throw(Error, 'Invalid input');
        });
        it('test arrange books to the shelves', function () {
            let countBooks = 50;
            let countBooks2 = 40;
            let countBooks3 = 30;

            let result1 = library.arrangeTheBooks(countBooks);
            let result2 = library.arrangeTheBooks(countBooks2);
            let result3 = library.arrangeTheBooks(countBooks3);

            expect(result1).to.equal("Insufficient space, more shelves need to be purchased.");
            expect(result2).to.equal( "Great job, the books are arranged.");
            expect(result3).to.equal( "Great job, the books are arranged.");
        });
    });
})