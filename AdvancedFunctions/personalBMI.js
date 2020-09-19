function solve(name,age,weight,height){
    let heightCentimeter = height/100;
    let BMI = Math.round(weight/Math.pow(heightCentimeter, 2));
    let status = '';
    if (BMI < 18.5) {
        status = 'underweight';
    }else if (BMI <25) {
        status = 'normal';
    } else if(BMI < 30){
        status = 'overweight';
    }else
    {
        status = 'obese';
    }

    let person = 
    {
        name: name,
        personalInfo:{
        age: age,
        weight: weight,
        height: height
    },
    BMI: BMI,
    status: status
}
if (BMI > 25) {
    
    person.recommendation = 'admission required';
}

return person;
}

console.log(solve('Honey Boo Boo', 9, 98, 188));