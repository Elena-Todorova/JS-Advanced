function cooking(num, p1, p2, p3, p4, p5) {

    let number = Number(num);
    let arr = [p1, p2, p3, p4, p5];

    for (const el of arr) {
        switch (el) {
            case 'chop': number = number/2;  break;
            case 'dice': number = Math.sqrt(number);  break;
            case 'spice': number = number + 1;  break;
            case 'bake': number = number * 3;  break;
            case 'fillet': number = number * 0.8;  break;
        
        }
        console.log(number);
    }
    
}

cooking('9', 'dice', 'spice', 'chop', 'bake',

'fillet')