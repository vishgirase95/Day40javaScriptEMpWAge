class Employee{
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.date=params[4];
    }

    string(){
        return "ID : "+this.id+"\nName : "+this.name+"\nSalary : "+ this.salary+"\nGender : "+this.gender+"\nDate : "+this.date
    }
}

obj=new Employee(1,"vishal",200,"male","2/06/21");

console.log(obj.string());
obj.name="raj";
console.log(obj.string());
