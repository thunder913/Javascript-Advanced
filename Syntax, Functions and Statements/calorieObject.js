function solve(...params) {

    let paramsArray = params.toString().split(/[ ,]+/);
    let printing = '{ '
    for (let i = 0; i < paramsArray.length; i++) {
        let element = paramsArray[i];
        if (i%2===0) {
            printing += element; 
        }else if(i === paramsArray.length-1)
        {
            printing += `: ${element} }`
        }else
        {
            printing += `: ${element}, `
        }
    }
    console.log(printing);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);