function fruit(fruit, kg, price) {

    let weight = kg / 1000;
    let money = weight * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80)