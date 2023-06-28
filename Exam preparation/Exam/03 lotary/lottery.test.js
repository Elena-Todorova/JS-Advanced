const expect = require('chai').expect;
const lottery = require('./Lottery')


describe('lottery tests', function () {
    describe('buyLotteryTicket', function () {
        it('test input is correct', function () {
            let price = '20';
            let count = '30';
            let buy = "true";

            let result1Func = () => lottery.buyLotteryTicket(price, 50, true); 
            let result2Func = () => lottery.buyLotteryTicket(40, count, true);
            let result3Func = () => lottery.buyLotteryTicket(40, 50, buy);

            expect(result1Func).to.throw(Error, 'Invalid input');
            expect(result2Func).to.throw(Error, 'Invalid input');
            expect(result3Func).to.throw(Error, 'Invalid input');
        });
        it('test if buy is false', function () {
            let buy = false;

            let result1Func = () => lottery.buyLotteryTicket(30, 50, buy); 
        
            expect(result1Func).to.throw(Error, 'Unable to buy lottery ticket!');
        });
        it('test the calculation with correct input', function(){
            let price = 10;
            let count = 2;
            let buy = true;

            let result1 = lottery.buyLotteryTicket(price, count, true);

            expect(result1).to.equal(`You bought ${count} tickets for ${price*count}$.`)

        });

    });
    describe('checkTicket', function () {
        it('test input is correct', function () {
            let ticketNum = '20';
            let luckyNum = '30';

            let result1Func = () => lottery.checkTicket(ticketNum, [5,6,7,12,44,4]); 
            let result2Func = () => lottery.checkTicket([5,6,7,12,44,4], luckyNum);
            let result3Func = () => lottery.checkTicket(40, 50);

            expect(result1Func).to.throw(Error, 'Invalid input');
            expect(result2Func).to.throw(Error, 'Invalid input');
            expect(result3Func).to.throw(Error, 'Invalid input');
        });
        it('test the compare of tickets', function(){
            let ticketNum = [5, 6, 7, 12, 44, 4];
            let luckyNum = [5, 6, 7, 12, 44, 4];
            let ticketNum2 = [5, 6, 7, 33, 3, 54];
            let luckyNum2 = [5, 6, 7, 12, 44, 4];

            let result1 = lottery.checkTicket(ticketNum, luckyNum);
            let result2 = lottery.checkTicket(ticketNum2, luckyNum2);

            expect(result1).to.equal("You win the JACKPOT!!!");
            expect(result2).to.equal("Congratulations you win, check your reward!")

        });

        describe('secondChance', function () {
            it('test input is correct', function () {
                let ticketID = '20';
                let secondChanceWinningIDs = '30';
    
                let result1Func = () => lottery.secondChance(ticketID, [5,6,7,12,44,4]); 
                let result2Func = () => lottery.secondChance(43, secondChanceWinningIDs);
                
                expect(result1Func).to.throw(Error, 'Invalid input');
                expect(result2Func).to.throw(Error, 'Invalid input');
            });
            it('test the second chance', function(){
                let ticketID = 5;
                let ticketID2 = 30;
                let secondChanceWinningIDs = [5,6,7,12,44,4];
    
                let result1 = lottery.secondChance(ticketID, secondChanceWinningIDs);
                let result2 = lottery.secondChance(ticketID2, secondChanceWinningIDs);
    
                expect(result1).to.equal("You win our second chance prize!");
                expect(result2).to.equal("Sorry, your ticket didn't win!")
    
            });
        });

});
})

