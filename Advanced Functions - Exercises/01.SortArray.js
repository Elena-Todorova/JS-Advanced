function sort(input, type){

    let obj = {
        asc: (a,b)=> a - b,
        desc: (a,b)=> b - a,
    }

    let result = input.sort(obj[type]);
    return result;

}

sort([14, 7, 17, 6, 8], 'asc')
sort([14, 7, 17, 6, 8], 'desc')