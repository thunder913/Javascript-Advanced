function solve(input) {
    class Model
    {
        constructor(model, carsProduced)
        {
            this.model = model;
            this.carsProduced = carsProduced;
        }
    }
    class Brand
    {
        constructor(brand)
        {
            this.brand= brand;
            this.models = [];

            this.addModel = function(model, carsProduced)
            {
                this.models.push(new Model(model, carsProduced));
            }
        }
    }
    let cars = new Array();
    for (const item of input) {
        let [brand,model,carsProduced] = item.split(' | ');
        let currentBrand = cars.find(x=>x.brand === brand);
        if (!!currentBrand) {
            let currentModel = currentBrand.models.find(x=>x.model === model);
            if (currentModel)
            {
                currentModel.carsProduced += Number(carsProduced);    
            } else {
                currentBrand.addModel(model, Number(carsProduced));
            }
        }else
        {
            cars.push(new Brand(brand));
            cars[cars.length-1].addModel(model, Number(carsProduced));
        }
    }

    for (const brand of cars) {
        console.log(brand.brand);
        for (const model of brand.models) {
            console.log(`###${model.model} -> ${model.carsProduced}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);