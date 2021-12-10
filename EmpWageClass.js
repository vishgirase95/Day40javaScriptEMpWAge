class Employee{


    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.date=params[4];
    }
 get name(){return this._name;}
 set name(name){
let NameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
if(NameRegex.test(name))
this._name=name;
else throw 'The name is incorrect';

 }
    string(){
        return "ID : "+this.id+"\nName : "+this.name+"\nSalary : "+ this.salary+"\nGender : "+this.gender+"\nDate : "+this.date
    }
}
obj=new Employee(1,"Vishal",200,20000,"20 dec");

console.log(obj.string());

// console.log(obj.name);
 

try {
  obj.name="Rajesh";
console.log(obj.string());  

} catch (e) {
    console.log(e);
}