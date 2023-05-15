function sumOfNum(one, two) {
    
    let num1 = Number(one);
    let num2 = Number(two);

    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i
        
    }

    console.log(result);
}

sumOfNum('1', '5')
sumOfNum('-8', '20')