function diagonal(matrix) {
    let main = 0;
    let secondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
        secondary += matrix[i][matrix.length - i - 1]
        
    }

    console.log(main, secondary);
    
}

diagonal([[20, 40],
        [10, 60]])
