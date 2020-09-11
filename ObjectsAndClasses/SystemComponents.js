function solve(input) {
    class Component
    {
        constructor(name)
        {
            this.name = name;
            this.subComponents = [];

            this.addSubComponent = function(name) {
                this.subComponents.push(name);
            }
        }
    }

    class System
    {
        constructor(name)
        {
            this.name = name;
            this.components = [];
            this.addComponent = function(name) {
                this.components.push(new Component(name));
            }
        }
    }

    let systems = new Array();
    for (const item of input) {
        let [system, component, subcomponent] = item.split(' | ')
        let current = systems.find(x=>x.name === system);
        if (current) {
            let currentComponent = current.components.find(x=>x.name == component);
            if (currentComponent) {
                currentComponent.addSubComponent(subcomponent);
            }else
            {
                addComponent(current, component, subcomponent);
            }
        }else
        {
            systems.push(new System(system));
            let currentSystem = systems.find(x=>x.name === system);
            addComponent(currentSystem, component, subcomponent);
        }
    }


    systems.sort(compareSystem);
    for (const system of systems) {
        console.log(system.name);
        system.components.sort(compareComponent);
        for (const component of system.components) {
            console.log(`|||${component.name}`);
            for (const subcomponent of component.subComponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }

    function compareSystem(a,b)
    {
        let componentsA = a.components.length;
        let componentsB = b.components.length;
        if (componentsA > componentsB) {
            return -1;
        }else if(componentsA<componentsB)
        {
            return 1;
        }else
        {
            if (a.name > b.name) {
                return 1;
            }else if (a.name < b.name) {
                return -1
            }else
            {
                return 0;
            }
        }

    }
    function compareComponent(a,b)
    {
        let lengthA = a.subComponents.length;
        let lengthB = b.subComponents.length;
        if (lengthA > lengthB) {
            return -1;
        }else if(lengthA < lengthB){
            return 1
        }
        return 0;
    }

    function addComponent(system, componentName, subComponentName)
    {
        system.addComponent(componentName);
        let component = system.components.find(x=>x.name == componentName)
        component.addSubComponent(subComponentName);
    }
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)