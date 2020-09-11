function solve(input) {
    class Fruit
    {
        constructor(name, litres)
        {
            this.name = name;
            this.litres = litres;
        }
    }

    class FruitPrint
    {
        constructor(name, bottles)
        {
            this.name = name;
            this.bottles = bottles;
        }
    }
    let printArray = new Array();
    let array = new Array();

    for (const el of input) {
        let [name,litre] = el.split(' => ');
        let fruit = new Fruit(name,Number(litre));
        let current = array.find((element)=> element.name === name);
        if (current === undefined) {
            array.push(fruit);            
        } else {
            current.litres += +litre;
        }
        current = array.find((element)=> element.name === name);
        let currentPrint = printArray.find((element)=> element.name === name);
        if (currentPrint === undefined && current.litres >= 1000) {
            printArray.push(new FruitPrint(name, 0));            
        } 
    }
    for (const el of printArray) {
        current = array.find((element)=> element.name === el.name);
        el.bottles = Math.round(current.litres/1000);
        console.log(`${el.name} => ${el.bottles}`)
    }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

);