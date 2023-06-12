const expect = require('chai').expect;
const bookSelection = require('./bookSelection')


describe('bookSelection tests', function () {
    describe('is genre sutable', function () {
        it('test for genre Thriller and Horror with age 12 and more', function () {
            //arrange
            let genre1 = 'Thriller';
            let genre2 = 'Horror';
            let age1 = 12;
            let age2 = 13;

            //act
            let result1 = bookSelection.isGenreSuitable(genre1, age1);
            let result2 = bookSelection.isGenreSuitable(genre2, age1);
            let result3 = bookSelection.isGenreSuitable(genre1, age2);
            let result4 = bookSelection.isGenreSuitable(genre2, age2);

            //assert
            expect(result1).to.equal(`Books with ${genre1} genre are not suitable for kids at ${age1} age`);
            expect(result2).to.equal(`Books with ${genre2} genre are not suitable for kids at ${age1} age`);
            expect(result3).to.equal('Those books are suitable');
            expect(result4).to.equal('Those books are suitable');
        });

        it('test for another genre, should return books are suitable in all cases', function () {
            //arrange
            let genre1 = 'Comedy';
            let genre2 = 'Science-fiction';
            let age1 = 12;
            let age2 = 13;

            //act
            let result1 = bookSelection.isGenreSuitable(genre1, age1);
            let result2 = bookSelection.isGenreSuitable(genre2, age1);
            let result3 = bookSelection.isGenreSuitable(genre1, age2);
            let result4 = bookSelection.isGenreSuitable(genre2, age2);

            //assert
            expect(result1).to.equal('Those books are suitable');
            expect(result2).to.equal('Those books are suitable');
            expect(result3).to.equal('Those books are suitable');
            expect(result4).to.equal('Those books are suitable');
        });
    });
    describe('is it affordable', function () {
        it('test input is number, should throw error', function () {
            let price = '20';
            let budget = '30';

            let result1Func = () => bookSelection.isItAffordable(price, 50); //we use this structure, when we have error
            let result2Func = () => bookSelection.isItAffordable(40, budget);

            expect(result1Func).to.throw(Error, 'Invalid input');
            expect(result2Func).to.throw(Error, 'Invalid input');
        });
        it('test budget bigger than price, should return message with difference', function () {
            let price = 20;
            let budget = 30;
            let price2 = 20.5;
            let budget2 = 30.5;

            let result1 = bookSelection.isItAffordable(price, budget);
            let result2 = bookSelection.isItAffordable(price2, budget2);

            expect(result1).to.equal(`Book bought. You have ${budget - price}$ left`);
            expect(result2).to.equal(`Book bought. You have ${budget2 - price2}$ left`);
        });

        it('test budget less than price, should return message', function () {
            let price = 20;
            let budget = 10;
            let price2 = 20.5;
            let budget2 = 10.5;

            let result1 = bookSelection.isItAffordable(price, budget);
            let result2 = bookSelection.isItAffordable(price2, budget2);

            expect(result1).to.equal("You don't have enough money");
            expect(result2).to.equal("You don't have enough money");
        });
        
    });

    describe('sutable titles', function () {
        it('test for valid input, should throw error', function () {
            let arr = 'string';
            let genre = 20;
            let validArr = [{title: "The Da Vinci Code", genre: 
            "Thriller"}, {title: "Alice", genre: 
            "Fantasy"}];

            let resul1Fun = () => bookSelection.suitableTitles(arr, "test");
            let resul2Fun = () => bookSelection.suitableTitles(validArr, genre);

            expect(resul1Fun).to.throw(Error, 'Invalid input');
            expect(resul2Fun).to.throw(Error, 'Invalid input');
        });
        it('test with correct input, should return array', function () {
            let genre = "Fantasy";
            let validArr = [{title: "The Da Vinci Code", genre: 
            "Thriller"}, {title: "Alice", genre: 
            "Fantasy"}, {title: "Fantasy", genre: 
            "Comedy"} ];
            let expectedResult = validArr.filter(x => x.genre === genre).map(x => x.title);

            let resul1 = bookSelection.suitableTitles(validArr, genre);
            let resul2 = bookSelection.suitableTitles([], genre);

            expect(resul1).to.deep.equal(expectedResult);
            expect(resul2).to.deep.equal([]);
        });
    });

})
