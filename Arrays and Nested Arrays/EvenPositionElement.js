function evenPosition(input) {

    let result = "";
    
    for (i = 0; i < input.length; i++) {
        if(i % 2 == 0) {
            result += input[i] + " "
        }
    }
    console.log(result);
}

evenPosition(['5', '10'])


