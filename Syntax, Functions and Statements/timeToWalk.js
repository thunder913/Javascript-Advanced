function solve(steps, length, speed) {
    let distance = steps*length;
    let breaks = Math.floor(distance/500);
    var time = Math.round(distance/(speed*1000/3600) + (Number(breaks)*60));
    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    
    hours = addZeroIfNeeded(hours);
    minutes = addZeroIfNeeded(minutes);
    seconds = addZeroIfNeeded(seconds);
    console.log(`${hours}:${minutes}:${seconds}`);
    
    function addZeroIfNeeded(number)
    {
        if (number < 10) {
            number = '0' + number;
        }
        return number;
    }
}

solve(2564, 0.70, 5.5);