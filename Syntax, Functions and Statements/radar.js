function solve([speed, area]) {
    let maxSpeed = 0;
    switch (area) {
        case 'residential':
            maxSpeed = 20;   
            break;
        case 'city':
            maxSpeed = 50;
            break;
        
        case 'interstate':
            maxSpeed = 90;
            break;
        case 'motorway':
            maxSpeed = 130;
            break;
    }
    if(speed <= Number(maxSpeed))
    {
    }
    else if (speed <= Number(maxSpeed) +20) {
        return 'speeding';
    }else if (speed <= Number(maxSpeed) + 40) {
        return 'excessive speeding';
    }else
    {
        return 'reckless driving';
    }
}

console.log(solve([120, 'interstate']));