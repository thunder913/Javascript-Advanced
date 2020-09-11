function solve(input)
{
    class Product
    {
        constructor(name, price)
        {
            this.name = name;
            this.price = price;
        }
    }
    let products = new Array();
    for (const el of input) {
        let [name, price] = el.split(' : ');
        products.push(new Product(name, price));
    }

    products.sort(compare);
    let firstLetter = products[0].name[0];
    console.log(firstLetter);
    for (const product of products) {
        if (product.name[0] === firstLetter) {
            console.log('  ' + product.name + ': ' + product.price);
        }else
        {
            firstLetter = product.name[0];
            console.log(firstLetter);
            console.log('  ' + product.name + ': ' + product.price);
        }
    }
    function compare(a,b)
    {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        if (aName > bName) {
            return 1;
        }else if (aName< bName) {
            return -1
        }
        return 0;
    }
}

solve(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

);