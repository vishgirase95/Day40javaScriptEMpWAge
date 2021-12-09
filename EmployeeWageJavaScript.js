const Emp_PartTime = 0;
const Emp_FullTime = 1;
const Emp_Absent = 2;

const PartTime_Hours = 4;
const FullTime_hours = 8;
const Absent_hours = 0;
const Total_workingHours = 8;
const WagePerHr = 20;
const TotalWorkDays = 20;
let Emp_TodayWorkingHR = 0;
let DailyWage = 0;
let monthlywage = 0;
let TotalHrs = 0;
let DailyWAgesArray = [];

function Employe_DailyWage(Emp_AttenDance) {

    switch (Emp_AttenDance) {
        case Emp_PartTime:
            Emp_TodayWorkingHR = PartTime_Hours;

            break;
        case Emp_FullTime:
            Emp_TodayWorkingHR = FullTime_hours;
            break;
        case Emp_Absent:
            Emp_TodayWorkingHR = Absent_hours;
            break;
        default:
            console.log("there is an Error");
            break;
    }
    return Emp_TodayWorkingHR;

}

function calcDailyWage(Emp_TodayWorkingHR) {
    return Emp_TodayWorkingHR * WagePerHr;
}

let Monthdays = 0
while (Monthdays < TotalWorkDays && TotalHrs < 160) {
    Emp_AttenDance = Math.floor(Math.random() * 3);
    Emp_TodayWorkingHR = Employe_DailyWage(Emp_AttenDance);
    DailyWAgesArray.push(calcDailyWage(Emp_TodayWorkingHR));
    TotalHrs += Emp_TodayWorkingHR;


    Monthdays++;
}

let TotalEmpWage = calcDailyWage(TotalHrs);
console.log(DailyWAgesArray);
console.log("Total Days : " + TotalWorkDays + "\nTotal Hrs : " + TotalHrs + "\nEmpWage : " + TotalEmpWage);

let sum = DailyWAgesArray.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 0);
console.log("\n\nTotal wage using reduce  " + sum);
let total = 0;

function foreachadd(value) {
    return total += value;
}
DailyWAgesArray.forEach(foreachadd);
console.log("\n\nTotal wage using forEach : " + total);

let dailyconnt = 0;

function mapDayWithWage(dailywage) {
    dailyconnt++;
    return dailyconnt + " = " + dailywage;
}
let MapDayWithWage = DailyWAgesArray.map(mapDayWithWage)
console.log("wage using map");


console.log(MapDayWithWage);

console.log("daily full time wage");

function FullDayWage(daily) {
    return daily.includes("160");
}
let FilterArrya = MapDayWithWage.filter(FullDayWage);
console.log(FilterArrya);

console.log("\n First time full day wage earned");

function FindFullDaywage(value) {
    return value.includes("160");
}
let FirstFullDayEarned = MapDayWithWage.find(FindFullDaywage);
console.log(FirstFullDayEarned);

console.log("\n check if every day is fulltime");

function checkEveryDAywage(value) {
    return value.includes("160");
}

let Answer = FilterArrya.every(checkEveryDAywage);
console.log("\n Every wage is full time in Filter Arrya : " + Answer);


function checkIfSomePartTime(valuee) {
    return valuee == 80;
}
let AnswerSome = DailyWAgesArray.some(checkIfSomePartTime);
console.log("\n Check if there is any part time wage : " + AnswerSome);


let presentEmp = DailyWAgesArray.reduce((count, currentvalue) => {
    if (currentvalue > 0) {
        count++;
    }
    return count;
}, 0);
console.log("\n\nTotal present  :" + presentEmp);

let count1 = 0;
let wageTillNow = 0;

function DetailMap(value2) {
    wageTillNow += value2;
    count1++;
    return count1 + " : " + value2 + " : " + wageTillNow;
}
let DetailTabel = DailyWAgesArray.map(DetailMap);
console.log(DetailTabel);

console.log("UC9");


let TotalSalary=DailyWAgesArray.filter(n=>n>0).reduce((acummulater,currentvalue)=>{
return acummulater+currentvalue;
},0)
console.log("Total Salary : "+TotalSalary);

let EmpHrsMap=new Map();

for (let days = 0; days < TotalWorkDays; days++) {
Emp_AttenDance = Math.floor(Math.random() * 3);
Emp_TodayWorkingHR = Employe_DailyWage(Emp_AttenDance);   
EmpHrsMap.set(days,Emp_TodayWorkingHR);
    
}
console.log("\nDays and Hours");

console.log(EmpHrsMap);
let TotalHours=Array.from(EmpHrsMap.values()).reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;

},0);
console.log("Total Salary : "+TotalSalary+"\n Total Hours : "+TotalHours);

let PartTime=new Array();
let FullTimeWork=new Array();
let NoWork=new Array();


EmpHrsMap.forEach((value,key,map)=>{
if(value==0) NoWork.push(key);
else if(value==4)  PartTime.push(key);
else
FullTimeWork.push(key);
});

console.log("Part Time Work : "+ PartTime+"\nFull Time Work : "+FullTimeWork+"\nAbsent : "+NoWork); 