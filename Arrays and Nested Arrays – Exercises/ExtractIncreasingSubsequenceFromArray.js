function extractSub(input) {

//    let result = [first];
//    let first = input.shift();
//  
//    
//    for (const el of input) {
//        if(el >= first) {
//            first = el;
//            result.push(el)
//        }
//    }
//
//    return result;
//}
// solution with reduce
let biggest = input[0];
return input.reduce((acc, el) => {
    if(biggest <= el){
        acc.push(el);
        biggest = el;
    }
    return acc
}, [])

}


console.log(extractSub([1,

    3,
    
    8,
    
    4, 
    10, 12, 3, 2, 24]))