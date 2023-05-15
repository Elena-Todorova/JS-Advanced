function largestNum(num1, num2, num3) {
    let result = num3;

    if(num1>num2 && num1>num3){
        result = num1
    } else if(num2>num1 && num2>num3){
        result = num2
    }

    console.log(`The largest number is ${result}.`);
}

largestNum(-5, -3, 1)