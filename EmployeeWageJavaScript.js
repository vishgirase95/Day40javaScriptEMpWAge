const Emp_Absent=0;
const Emp_Present=1;
let Emp_AttenDance=Math.floor(Math.random()*2);
console.log(Emp_AttenDance);
if (Emp_AttenDance==Emp_Present) {
    
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
    
}