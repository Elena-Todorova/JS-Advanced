function rotate(arr, n) {
    
    for (let i = 0; i < n; i++) {
       let element = arr.pop();
        arr.unshift(element);
        
    }

    return arr.join(' ');
}
console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15))