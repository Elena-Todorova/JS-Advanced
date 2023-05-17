function magicMatric(matrix) {

    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < matrix.length; i++) {
       let currentRow = matrix[i].join('');
       for (let j = 0; j < currentRow.length; j++) {
        sumRows += Number(currentRow[j]);
        sumCols += Number(currentRow[0]);
        
       }
        
    }
    if(sumRows === sumCols){
        console.log('true');
    } else{
        console.log('false');
    }
    
}

magicMatric([[1, 0, 0],
             [0, 0, 1], 
             [0, 1, 0]])