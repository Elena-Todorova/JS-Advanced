function negPosNum(input) {

    let result = [];

    for (i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            result.unshift(input[i])
        } else {
            result.push(input[i])
        }

    }

    console.log(result.join('\n'));
}

negPosNum([7, -2, 8, 9])