function aggregate(input) {
    
    let sum = 0;
    let inverseValue = 0;
    let concatenate = "";

    for (i = 0; i < input.length; i++) {
        sum += input[i];
        inverseValue += 1/input[i];
        concatenate += input[i].toString();
    }

    console.log(sum);
    console.log(inverseValue);
    console.log(concatenate);
}

aggregate([1, 2, 3])
aggregate([2, 4, 8, 16])