function solve(index)
{
    class Hero
    {
        constructor(name, age, items)
        {
            this.name = name;
            this.level = age;
            this.items = items;
        }
    }

    let heroes = new Array();
    for (const iterator of index) {
        let current = iterator.split(' / ');
        let name = current[0];
        let level = Number(current[1]);
        let itemsArray = current[2] ? current[2].split(', ') : [];
        heroes.push(new Hero(name,level,itemsArray));
    }
    let json = JSON.stringify(heroes);
    console.log(json);
}

solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)