(function stringExtension()
{
    String.prototype.ensureStart = function(string){

        if (!this.toString().startsWith(string)) {
            return string + this.toString();
        }
        return this.toString();
    }
    
    String.prototype.ensureEnd = function(string)
    {
        if (!this.toString().endsWith(string)) {
            return this.toString() + string;
        } 
        return this.toString();
    }

    String.prototype.isEmpty = function()
    {
        if (this.toString() === '') {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function(n)
    {
        if (this.toString().length <= n) {
            return this.toString();
        } else if(n<4){
            return '.'.repeat(n);
        }else
        {
            let splittedString = this.toString().split(' ');
            if (splittedString.length === 1) {
                return this.toString().slice(0, n-3) + '...';
            } else {
                let result = [];
                for (let i = 0; i < splittedString.length; i++) {
                    result.push(splittedString[i]);
                    if (result.join(' ').length + 3 > n) {
                        result.pop();
                        return result.join(' ') + '...';
                    }
                }
            }
        }
    }

    String.format = (string, ...params) =>
    {
        for (let i = 0; i < params.length; i++){
            string = string.replace(`{${i}}`, [params[i]]);
        }
        return string;
    }

})();

let str = 'the quick brown fox jumps over the lazy dog';

console.log(str.truncate(43));