function inventory(input) {

    let register = [];

    for (const hero of input) {
        let heroList = {};
        let[name, level, items] = hero.split(' / ')
        heroList.name = name;
        heroList.level = Number(level);
        heroList.items = items? items.split(', ') : [];
        register.push(heroList)
    }

    let result = JSON.stringify(register)

    return result
    
}

console.log(inventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']))