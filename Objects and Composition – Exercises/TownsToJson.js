function textToJson(input) {

    let result = [];
    let names = input.shift();
    names = names.slice(2,-2);
    let [Town, Latitude, Longitude] = names.split(' | ');

    for (const el of input) {
        let row = el.slice(2,-2);
        let [town, a, b] = row.split(' | ');
        let latitude = Number(a).toFixed(2);
        let longitude = Number(b).toFixed(2);
        let object = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        };
       
        result.push(object);
    }

    return JSON.stringify(result)
}

console.log(textToJson(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']))