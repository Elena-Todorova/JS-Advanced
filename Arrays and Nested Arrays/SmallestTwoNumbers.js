function smallestTwoNum(input) {
    
    let sorted = input.sort((a,b) => a-b);

    console.log(sorted.splice(0,2).join(' '));
}

smallestTwoNum([30, 15, 50, 5])