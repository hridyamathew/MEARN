class Employee{
   //properties

   empId
   name
   designation
   salary

   constructor(empId, name, designation, salary){
      this.empId = empId;
      this.name = name;
      this.designation = designation;
      this.salary = salary;
   }
   //user defined method
   displayData(){
    console.log(`
    
      Employee ID: ${this.empId}
      Name: ${this.name}
      Designation: ${this.designation}
      Salary: ${this.salary}`);
   }
}
//object creation
const emp1 = new Employee('E01', "John Doe", "Software Engineer", 60000);
emp1.displayData()

//create a class for student with properties(id,name,division,and mark)and display 3 students details