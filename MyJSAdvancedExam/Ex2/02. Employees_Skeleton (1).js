function solveClasses() {
    class Developer{
        constructor ( firstName, lastName ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask ( id, taskName, priority ) {
            let task = {id, taskName, priority};
            if (priority === 'high') {
                this.tasks.unshift(task);
            } else {
                this.tasks.push(task);
            }

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask(){
            if (this.tasks.length) {
                this.tasks.shift();
            }else{
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            }
        }

        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks(){
            let toReturn = [];
            toReturn.push(`Tasks, that need to be completed:`);
            for (const task of this.tasks) {
                toReturn.push(`${task.id}: ${task.taskName} - ${task.priority}`);
            }

            return toReturn.join('\n');
        }
    }

    class Junior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName,lastName);
            this.baseSalary += bonus;
            this.experience = experience;
        }

        learn( years ){
            this.experience += years;
        }
    }

    class Senior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience += experience + 5;
        }

        changeTaskPriority(taskId) {
            let index = this.tasks.findIndex(x=>x.id === taskId);
            let task = this.tasks[index];
            this.tasks.splice(index, 1);
            if (task.priority === 'low') {
                task.priority = 'high';
                this.tasks.unshift(task);
            }else{
                task.priority = 'low';
                this.tasks.push(task);
            }

            return task;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
console.log('----------------------------------------------------------------------------');
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
console.log('----------------------------------------------------------------------------');
const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
