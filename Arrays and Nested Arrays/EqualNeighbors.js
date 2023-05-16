function equalNeighbors(matrix) {

    let counter = 0;

    // check rows
    for (let iRow = 0; iRow < matrix.length; iRow++) {
        for (let iCol = 0; iCol < matrix[iRow].length - 1; iCol++) {
            if(matrix[iRow][iCol] === matrix[iRow][iCol + 1]) {
                counter++;
            };
           // console.log(matrix[iRow][iCol]);
        }
    }

    // check columns
    const rowSize = matrix[0].length;

    for (let iCol = 0; iCol < rowSize; iCol++) {
        for (let iRow = 0; iRow < matrix.length - 1; iRow++) {
            if(matrix[iRow][iCol] === matrix[iRow + 1][iCol]){
                counter++
            };
           // console.log(matrix[iRow][iCol]);
        }
    }

    console.log(counter);
}

equalNeighbors([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']])