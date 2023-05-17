function printEl(input, num) {

    let first = input.slice(0,1).toString();
    
    let filtered = input.filter((x, i) => i % num == 0 && i !== 0);
   filtered.unshift(first)


    console.log(filtered);
}

printEl(['5',

'20',

'31',

'4',

'20'],

2)

printEl(['dsa', 'asd', 'test', 'tset'], 2)
printEl(['1', '2', '3', '4', '5'], 6)