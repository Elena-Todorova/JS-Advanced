function sumFirstLast(input) {
    
    let inputNum = input.map((x) => Number(x));
    let result = inputNum.shift() + inputNum.pop();
    console.log(result);
}

sumFirstLast(['20', '30', '40'])