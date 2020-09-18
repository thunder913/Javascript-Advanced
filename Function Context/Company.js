class Company
{
   constructor()
   {
      this.departments = [];
   }

   addEmployee(username, salary, position, department)
   {
      if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
         throw new Error('Invalid input!');
      } else {
         const newEmployee = 
         {
            name: username,
            salary: salary,
            position: position,
            department: department
         };
         let currentDepartment = this.departments.find(d=>d.name === department);
         if (currentDepartment === undefined) {
            currentDepartment = 
            {
               name: department,
               users: [newEmployee],
               totalSalary: salary,
               averageSalary(){return this.totalSalary/ this.users.length;}
            }
            this.departments.push(currentDepartment);
         }else
         {
            currentDepartment.users.push(newEmployee);
            currentDepartment.totalSalary += salary;
         }
      }

      return `New employee is hired. Name: ${username}. Position: ${position}`
   }

   bestDepartment()
   {
      this.departments.sort((a,b)=>a.averageSalary - b.averageSalary);
      let department = this.departments[0];
      department.users.sort((a,b)=> 
      {
         if (a.salary > b.salary) {
            return -1;
         } else if(a.salary < b.salary){
            return 1;
         }
         if (a.name> b.name) {
            return 1;
         }else if(a.name < b.name)
         {
            return -1;
         }
         return 0;
      });
      let result = `Best Department is: ${department.name}\nAverage salary: ${Number(department.averageSalary()).toFixed(2)}\n`;
      for (const emp of department.users) {
         result += `${emp.name} ${emp.salary} ${emp.position}\n`
      }
      return result.trim();
   }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());