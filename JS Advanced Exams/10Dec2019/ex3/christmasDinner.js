class ChristmasDinner{
    constructor(budget){
        this.money = budget;
    }
    dishes = [];
    products = [];
    guests = {};
    
    set money(value){
        if (value<0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = Number(value);
    }

    shopping([product, price]){
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        } 
        this.budget -= price;
        this.products.push(product);
        return `You have successfully bought ${product}!`;
    }

    recipes(recipe){
        let name = recipe.recipeName;
        let products = recipe.productsList;

        for (const item of products) {
            if (!this.products.includes(item)) {
                throw new Error('We do not have this product');
            }
        }

        let dish = {recipeName: name, productsList: products};
        this.dishes.push(dish)
        return `${name} has been successfully cooked!`;
    }

    inviteGuests(name, dish){
        if (this.dishes.find(x=>x.recipeName === dish) === undefined) {
            throw new Error('We do not have this dish');
        }else if (this.guests.hasOwnProperty(name)) {
            throw new Error(`This guest has already been invited`);
        }
        this.guests[`${name}`] = dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance(){
        const names = Object.keys(this.guests);
        let result = [];
        for(let name of names){
            const dish = this.guests[name];
            const products = this.dishes.find(obj => obj.recipeName === dish);
            result.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(911);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
console.log(dinner.shopping(['Honey', 10]));

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
