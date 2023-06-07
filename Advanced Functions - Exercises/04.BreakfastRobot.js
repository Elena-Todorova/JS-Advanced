function solution() {

    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    let receipts = {
    apple: {carbohydrate:1, flavour:2},
    lemonade: {carbohydrate: 10, flavour: 20},
    burger: {carbohydrate: 5, fat: 7 ,flavour:3},
    eggs:{protein: 5, fat: 1, flavour:1},
    turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
};

let getError = (element) => `Error: not enough ${element} in stock`

let commands = {
    restock: (element, quantity) => {
        elements[element] += Number(quantity);
        return 'Success'
    },
    prepare: (recipe, quantity) => { //lemonade 4
        let missingEntry;
        let errorMesq;

        for (let i = 0; i < quantity; i++) {
    
        missingEntry = Object.entries(receipts[recipe]).find(  // x = carbohydrate: 10 , flavour: 20
            (x) => elements[x[0]] < Number(x[1]));
        
            if(missingEntry){
                errorMesq = getError(missingEntry[0]);
                break; 
            }
        Object.entries(receipts[recipe]).forEach((x) => {
            elements[x[0]] -= Number(x[1]);
        })
        
        }

        return errorMesq? errorMesq : 'Success'
    },
    report: () => {
        return Object.keys(elements).reduce((a,b) =>{
            a.push(`${b}=${elements[b]}`);
            return a;
        }, []).join(' ');
    },
}

return function (com) {             // 0       1       2
    const tokens = com.split(' '); // restock flavour 50

    return tokens.length === 1 ? commands[tokens[0]]() : commands[tokens[0]]([tokens[1]],[tokens[2]]);
    
};

}


let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("report")); // Error: not enough carbohydrate in stock