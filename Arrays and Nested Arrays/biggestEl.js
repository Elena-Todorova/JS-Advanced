function biggest(matrix) {
    let max = Number.MIN_SAFE_INTEGER;

   for (const row of matrix) {
     for (const col of row) {
       if(col > max) {
        max = col
       }
     }
   }

    console.log(max);
}

biggest([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])