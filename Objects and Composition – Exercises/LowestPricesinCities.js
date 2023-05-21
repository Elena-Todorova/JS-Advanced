function lowestPrices(input) {
    
    let object = {};

    for (const el of input) {
        let [town, product, price] = el.split(' | ');
        let priceNum = Number(price);

        if(!object.hasOwnProperty(product)){
            object[product] = {town, priceNum};
        } else{
            if(object[product].priceNum > priceNum) {
            object[product] = {town, priceNum};
            }
        }
        
    }

    for (const key in object) {
        console.log(`${key} -> ${object[key].priceNum} (${object[key].town})`);
    }


}

lowestPrices(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Mexico City | BMW | 99999',
    ' Sofia City | Mitsubishi | 10000',
   'Sofia City | Mercedes | 10000',
   'Mexico City | Audi | 1000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])