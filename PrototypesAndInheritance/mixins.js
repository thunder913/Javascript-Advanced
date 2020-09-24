function solve(){
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    
    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    
    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    
    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if (new.target === Computer) {
                throw new Error;
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    
    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.weight =weight;
            this.color = color;
            this.battery = battery;
            
        }
         set battery(x){
            if (x instanceof Battery) {
                this._battery = x;
            }else{
                throw new TypeError;
            }
         }
         get battery(){
             return this._battery;
         }
    
    }
    
    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.monitor = monitor;
            this.keyboard = keyboard;
        }
    set monitor(x){
        if (x instanceof Monitor) {
            this._monitor = x;
        }else{
            throw new TypeError;
        }
     }
     set keyboard(x){
        if (x instanceof Keyboard) {
            this._keyboard = x;
        }else{
            throw new TypeError;
        }
     }
    
     get keyboard(){
        return this._keyboard;
    }
    get monitor(){
        return this._monitor;
    }
    }
    function computerQualityMixin(classToExtend){
        classToExtend.prototype.getQuality = function(){
           return (this.processorSpeed + this.ram + this.hardDiskSpace)/3
        }
        classToExtend.prototype.isFast = function(){
            return this.processorSpeed > this.ram/4;
        }
        classToExtend.prototype.isRoomy = function(){
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function(){
            return (this.keyboard.manufacturer === this.monitor.manufacturer 
                    && this.monitor.manufacturer === this.manufacturer);
        } 

        classToExtend.prototype.isClassy = function(){
            return (this.battery.expectedLife >= 3
                && (this.color === 'Black' || this.color === 'Silver')
                    &&  this.weight < 3);
        }
    }
    return {Battery, Keyboard, Monitor, Computer, Laptop, Desktop, computerQualityMixin, styleMixin}
}