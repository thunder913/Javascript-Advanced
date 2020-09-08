function fruit(fruit, grams, pricePerKilo) {
    let fruitKilograms = grams/1000;
    let moneyNeeded = fruitKilograms*pricePerKilo;

    console.log('I need $' + moneyNeeded.toFixed(2) + ' to buy ' + fruitKilograms.toFixed(2) + ' kilograms ' + fruit + '.');
}