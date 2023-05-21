function store(input) {

    let obj = {}

    for (const product of input) {
        let [name, price] = product.split(' : ');
        obj[name] = price;
    }

    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    let firstLetter = " "

    for (const el of sorted) {
        let letter = el.slice(0,1);
        if (firstLetter === letter) {
            console.log(`  ${el}: ${obj[el]}`);
        } else {
            firstLetter = letter;
            console.log(firstLetter);
            console.log(`  ${el}: ${obj[el]}`);
        }
        
    }


}

store(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])