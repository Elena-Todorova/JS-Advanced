function townPopulation(input) {

    let town = {};

    for (const el of input) {
        let [townName, townPopulation] = el.split(' <-> ');
        if(town.hasOwnProperty(townName)){
            town[townName] += Number(townPopulation);
        } else{
            town[townName] = Number(townPopulation);
        }
        
    }

    for (const townName in town) {
            console.log(`${townName} : ${town[townName]}`); 
    }
    
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)