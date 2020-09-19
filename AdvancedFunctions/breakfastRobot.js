function solution()
{
    let microElements = 
     [{name:'protein', count: 0},
      {name:'carbohydrate', count: 0},
      {name:'fat', count: 0},
      {name:'flavour',count: 0}];
    

    let recipes = [
        {name: 'apple', ingredients:
            [
            {name: 'carbohydrate', quantity: 1},
            {name: 'flavour', quantity: 2}]
        },
        {name: 'lemonade', ingredients:
            [{name: 'carbohydrate', quantity: 10},
            {name: 'flavour', quantity: 20}]
        },
        {name: 'burger', ingredients:[
            {name: 'carbohydrate', quantity: 5},
            {name: 'fat', quantity: 7},
            {name: 'flavour', quantity: 3}
        ]},
        {name: 'eggs',ingredients:[
            {name: 'protein', quantity: 5},
            {name: 'fat', quantity: 1},
            {name: 'flavour', quantity: 1}
        ]},
        {name: 'turkey', ingredients:[
            {name: 'protein', quantity: 10},
            {name: 'carbohydrate', quantity: 10},
            {name: 'fat', quantity: 10},
            {name: 'flavour', quantity: 10}
        ]}
        ]
    

    function restock(element, quantity)
    {
        switch (element) {
        case 'protein':
            microElements.find(x=>x.name === 'protein').count += Number(quantity);    
        break;
        case 'carbohydrate':
            microElements.find(x=>x.name === 'carbohydrate').count += Number(quantity);  
        break;
        case 'fat':
            microElements.find(x=>x.name === 'fat').count += Number(quantity);  
        break;
        case 'flavour':
            microElements.find(x=>x.name === 'flavour').count += Number(quantity);  
        break;
    }
    return 'Success';
    }

    function prepare(recipe, quantity)
    {
        let productsRequired = recipes.find(x=>x.name === recipe.toLowerCase());
        for (const product of productsRequired.ingredients) {
            let quantityNeeded = product.quantity * quantity;
            let element = microElements.find(x=>x.name === product.name);
            if (element.count - quantityNeeded < 0) {
                return `Error: not enough ${product.name} in stock`;
                return;
            }
        }

        for (const product of productsRequired.ingredients) {
            let quantityNeeded = product.quantity * quantity;
            microElements.find(x=>x.name === product.name).count -= Number(quantityNeeded);
        }
        return 'Success';
    }

    function report()
    {
        return `protein=${microElements.find(x=>x.name === 'protein').count} carbohydrate=${microElements.find(x=>x.name === 'carbohydrate').count} fat=${microElements.find(x=>x.name === 'fat').count} flavour=${microElements.find(x=>x.name === 'flavour').count}`;
    }

    function manager(items)
    {
        items = items.split(' ');
        let operation = items[0];
        switch (operation) {
            case 'restock':
                return restock(items[1], items[2]);
            case 'prepare':
                return prepare(items[1],items[2]);
            case 'report':
                return report();
        }
    }

    return manager;
}

let manager = solution();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));