function sameNum(input) {
    
    let numString = input.toString();
    let sum = 0;
    let isSame = true;
    let firstNum = Number(numString[0]);

    for (let i = 0; i < numString.length; i++) {
        let currentDigit = Number(numString[i]);
       sum += currentDigit;
       if(currentDigit !== firstNum){
        isSame = false;
       }
        
    }

    console.log(isSame);
    console.log(sum);
}

sameNum(12331)