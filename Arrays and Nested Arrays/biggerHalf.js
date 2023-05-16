function biggerHalf(input) {
    
    input.sort((a,b) => a - b);

    let indexLength = Math.floor(input.length / 2);
    let result = input.splice(indexLength);

    return result
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))