class Employee {


    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.date = params[4];
        this.pincode=params[5];
    
    }

    get pincode(){return this._pincode;}
    set pincode(pincode){
        let PincodeRegex=RegExp('^[0-9]{6}$');
        if(PincodeRegex.test(pincode))
        this._pincode=pincode;
        else throw 'Please enter correct code';
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let NameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (NameRegex.test(name))
            this._name = name;
        else throw 'The name is incorrect';

    }
    string() {
        return "ID : " + this.id + "\nName : " + this.name + "\nSalary : " + this.salary + "\nGender : " + this.gender + "\nDate : " + this.date +"\nPincode : "+this.pincode
    }
}
obj = new Employee(1, "Vishal", 200, 20000, "20 dec",111111);

console.log(obj.string());

// console.log(obj.name);


try {
    obj.name = "Rajesh";
    console.log(obj.string());

} catch (e) {
    console.log(e);
}

try {
    obj.pincode=225555;
    console.log(obj.string());
} catch (e) {
    console.error(e);
}