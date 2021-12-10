class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    string(){
        return "ID : "+this.id+"\nName : "+this.name+"\nSalary : "+ this.salary
    }
}

obj=new Employee(1,"vishal",200);

console.log(obj.string());
obj.name="raj";
console.log(obj.string());
