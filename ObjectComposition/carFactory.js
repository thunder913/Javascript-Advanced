function solve(car)
{
    class Engine
    {
        constructor(power, volume)
        {
            this.power = power;
            this.volume = volume;
        }
    }
    const engines = [new Engine(90,1800), new Engine(120,2400), new Engine(200,3500)];
    let engine = '';
    for (let i = 0; i < engines.length; i++) {
        if (engines[i].power >= car.power) {
            engine = engines[i];
            break;
        }
    }

    if (car.wheelsize % 2 === 0) {
        car.wheelsize -= +1;
    }

    let carToReturn = 
    {
        model: car.model,
        engine:
        {
            power:engine.power,
            volume: engine.volume
        },
        carriage: 
        {
            type: car.carriage,
            color: car.color
        },
        wheels: [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    };

    return carToReturn;
}


console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

));