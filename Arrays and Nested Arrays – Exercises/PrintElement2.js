function printEl(input, num) {

    let result = [];
    
    for (let index = 0; index < input.length; index+= num) {
        result.push(input[index])
        
    }

    return result;
}

printEl(['5',

'20',

'31',

'4',

'20'],

2)

printEl(['dsa', 'asd', 'test', 'tset'], 2)
printEl(['1', '2', '3', '4', '5'], 6)