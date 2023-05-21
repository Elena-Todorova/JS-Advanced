function calorieObject(input) {

    let table = {};
    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let calorie = Number(input[i + 1]);

        table[name] = calorie;

    }

    console.log(table);

}

calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52'])