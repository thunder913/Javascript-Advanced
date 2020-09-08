function solve([x1,y1,x2,y2]) {
    
    if (IsValid(x1,y1)) {
        print(x1,y1,0,0, 'valid');
    }else
    {
        print(x1,y1,0,0, 'invalid');
    }
    
    if (IsValid(x2,y2)) {
        print(x2,y2,0,0, 'valid');
    }else
    {
        print(x2,y2,0,0, 'invalid');
    }

    let distanceX = Math.max(x1,x2) - Math.min(x1,x2);
    let distanceY = Math.max(y1,y2) - Math.min(y1,y2);

    let distanceBetweenPoints = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

    if (Number.isInteger(distanceBetweenPoints)) {
        print(x1,y1,x2,y2, 'valid');
    }else
    {
        print(x1,y1,x2,y2, 'invalid');
    }

    function IsValid(x,y) {
        let distance = Math.sqrt(x * x + y*y);
        if (Number.isInteger(distance)) {
            return true;
        }else
        {
            return false;
        }
    }

    function print(x1,y1,x2,y2, validity) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validity}`);
    }
}

solve([2, 1, 1, 1]);