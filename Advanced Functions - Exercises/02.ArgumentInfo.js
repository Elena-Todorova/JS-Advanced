function arg(...args) {

    const obj = {};
    
    args.forEach((ar) => {
        const typeOfAr = typeof ar
        console.log(`${typeOfAr}: ${ar}`);

        obj[typeOfAr] = obj[typeOfAr] ? obj[typeOfAr] += 1 : obj[typeOfAr] = 1;
    })

    let sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    sorted.forEach(([key, value] )=> {
        console.log(`${key} = ${value}`);
        
    });
    }



arg('cat', 42, function () { console.log('Hello world!'); }, 'most', 12)