function solve(...input)
{
    let array = new Array();
    for (const item of input) {
        let type = typeof(item);
        console.log(`${type}: ${item}`);
        let current = array.find(a=>a.name === type);
        if (current === undefined) {
            array.push({name: type, count: 1});
        }else{
        current.count++;
    }
}
    array.sort((a,b)=>b.count-a.count)
    for (const item of array) {
        console.log(`${item.name} = ${item.count}`)
    }
}

solve({ name: 'bob'}, 3.333, 9.999);