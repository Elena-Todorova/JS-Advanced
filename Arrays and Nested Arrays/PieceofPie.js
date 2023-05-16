function pies(input, first, last) {
    
    const firstIndex = input.indexOf(first);
    const lastIndex = input.indexOf(last);

    return input.slice(firstIndex, lastIndex + 1)

}

console.log(pies(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'))