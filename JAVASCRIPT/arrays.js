// [empId, empname, designation, location, salary, experience]
// employees = [
//   [1000, "Akhil", "Analyst", "kochi", 15000, 3],
//   [1001, "Niel", "developer", "kochi", 15000, 2],
//   [1002, "Max", "Tester", "kochi", 25000, 3],
//   [1003, "Maxwell", "QA", "kochi", 50000, 3],
//   [1004, "Vyona", "QA", "kochi", 45000, 3],
//   [1005, "Laisha", "developer", "kochi", 35000, 3],
//   [1006, "Ahan", "Tester", "kochi", 20000, 3],
//   [1007, "Nishan", "QA", "kochi", 50000, 3],
//   [1008, "Shyam", "developer", "kochi", 35000, 3],
// ]

// 1. Print all employee names

// for(i=0;i<employees.length;i++){
//     console.log(employees[i][1]);
    
// }

// 2. Print total number of employees
// console.log(`Total number of employees:${employees.length}`);

// 3. Print developer employee details
// console.log("------------Developer Details-----------------");

// for(i=0;i<employees.length;i++){
//     if(employees[i][2] == 'developer'){
//         console.log(employees[i]);
        
//     }
// }
// 4. Print employee name and salary whose salary > 30000
// console.log("-------------------Salary > 30000--------------------");

// for(let emp of employees){
//     if(emp[4]>30000){
//         console.log(emp[1], emp[4]);
        
//     }
// }
// 5. Print details of employee Laisha
// console.log("----------------Details of Laisha-----------------------");

// for(let emp of employees){
//     if(emp[1] == "Laisha"){
//         console.log(`${emp}`);
//         break
        
//     }
// }

// 6. Display employee name and salary based on their salary descending order
// employees.sort((a, b) => b[4] - a[4])
// for (let emp of employees) {
//   console.log(`Employee name: ${emp[1]} and salary=${emp[4]}`);
// }

// 7. Display employee name and experience based on their experience ascending order
// employees.sort((a, b) => a[4] - b[4])
// for (let emp of employees) {
//   console.log(`Employee name: ${emp[1]} and salary=${emp[4]}`);
// }


//==========================================================================================================

// numArray = [2, 13, 24, 11, 23]

// console.log(numArray.map(num=>num**2))


//----create a new array with values satisfying the following conditions----------
// 1. if num>15 increment the number
//    else , decrement the number

// console.log(numArray.map(num=>num>15?num+1:num-1));
//to find smallest in the array
// console.log(numArray.reduce((accumulator, value)=>accumulator<value?accumulator:value));
//to find largest in the array
// console.log(numArray.reduce((accumulator, value)=>accumulator>value?accumulator:value));
//to find sum
// console.log(numArray.reduce((accumulator, value)=>accumulator+value));


//====================================================================================================================================


// console.log("----------------Employee with highest salary------------------------");

// console.log(employees.reduceRight((largest, emp)=>largest[4]>emp[4]?largest:emp));

// console.log("----------------Employee with smallest salary------------------------");

// console.log(employees.reduceRight((smallest, emp)=>smallest[4]<emp[4]?smallest:emp));

// console.log("---------------Sum of employee's salary------------------------");

// console.log(employees.reduce((sum, emp)=>sum+emp[4],0));


//==========================================================================================================================================================

// covid_data=[
//no,district, +ve cases, death rate, cured rate, 1st dose vaccine, second dose vaccine
//     [1,"ernkulama",34000,2000,23000,20000,2000],
//     [2,"idukki",14000,3000,25000,30000,1000],
//     [3,"thrissur",24000,4000,33000,24000,2500],
//     [4,"pathanamthitta",20000,2000,45000,22000,1500],
//     [5,"Kozhikkode",44000,5000,12000,21000,500],
//     [6,"palakkad",12000,1000,20000,23000,3400],
//     [7,"kottayam",27000,1500,27000,14000,1000],
//     [8,"kollam",14000,2500,25000,18000,2700],
// ]

// console.log("------------------------------- District having highest positive cases -----------------------");
// console.log(covid_data.reduce((highest, data)=>highest[2]>data[2]?highest:data)[1]);

// console.log("------------------------------- District having highest 1st dose vaccine --------------------");
// console.log(covid_data.reduce((highest, data)=>highest[5]>data[5]?highest:data)[1]);

// console.log("------------------------------- District having lowest death rate-----------------------------");
// console.log(covid_data.reduce((lowest, data)=>lowest[3]<data[3]?lowest:data)[1]);

// console.log("------------------------------- District with positive cases in descending order ---------------");
// covid_data.sort((a,b)=> b[2] - a[2]).forEach(data=>console.log(data[1],data[2]))

// console.log("-------------------------------- is district with +ve cases > 15,000 -------------------------------");
// console.log(covid_data.some(data=>data[2]>15000)?"Yes":"No");

// console.log("----------------------------district with 1st dose vaccine in ascending order---------------------");
// covid_data.sort((a,b)=>a[5]-b[5]).forEach(data=>console.log(data[1],data[5]))

// console.log("------------------------- Thrissur details -----------------------");
// console.log(covid_data.find(data=>data[1]=="thrissur"))

// console.log("------------------------ Total number of +ve cases ---------------------------------");
// console.log(covid_data.reduce((total, data)=>total+data[2],0));

// console.log("------------------------ Total number of cured cases ---------------------------------");
// console.log(covid_data.reduce((total, data)=>total+data[4],0));

// console.log("------------------------ Cured cases of idukki ---------------------------------------");
// console.log(covid_data.find(data=>data[1]=="idukki")[4]);



//===================================================================================================================================



// id name price stock
// products =[
//     [1, 'hide and seek', 50, 20],
//     [2, 'lays', 20, 80],
//     [3, 'oreo', 40, 100],
//     [4, 'parleG', 25,0],
//     [5, 'tiger', 20, 30],
//     [6, 'UNIBIC', 60, 20],
//     [7, 'good day',70, 20]
// ]

// console.log("---------------- All Product name ------------------------");
// products.forEach(value=>console.log(value[1]))

// console.log("---------------- Products whose price less < 50 -------------------");
// products.filter(value=>value[2]<50).forEach(value=>console.log(value[1]))

// console.log("---------------- Print price of Oreo ---------------------");
// console.log(products.find(value=>value[1]=="oreo")[2]);

// console.log("---------------- Costly product ------------------------");
// console.log(products.reduce((costly, value)=>costly[2]>value[2]?costly:value)[1]);

// console.log("---------------- Out of stock product -----------------");
// console.log(products.find(value=>value[3]==0)[1]);

// console.log("---------------- product with stock descending order ------------");
// products.sort((a,b)=>b[3] - a[3]).forEach(value=>console.log(value[1], value[3]))

// console.log("---------------- Product having maximum available stock ---------");
// console.log(products.reduce((maximum, value)=>maximum[3]>value[3]?maximum:value)[1]);

// console.log("--------------- Is there any product with Rs.10 ------------------");
// console.log(products.some(value=>value[2]<=10)?"YES":"NO");

// console.log("--------------- is there any product with price in the range of 20 - 30 -----");
// console.log(products.some(value=>value[2]>=20 && value[2]<=30)?"YES":"NO");

// console.log("--------------- all products in the range of 35 - 55 ----------------");
// products.filter(value=>value[2]>=35 && value[2]<=55).forEach(value=>console.log(value[1], value[2]))

//===============================================================================================

// numArray = [[1,10], [11,22], [5], [22,12]]

//------find the sum of all numbers ------------
// sum = 0
// numArray.forEach(value=>value.forEach(num=>sum =sum+num))
// console.log(sum);
//-------------using FLAT method ----------------------

// console.log(numArray.flat().reduce((sum, num)=> sum+num));

//=============================================================================================

// nameArray = ["manu", "meenu", "manju", "mohan"]

// console.log(nameArray.includes("manu"));

// console.log(nameArray.indexOf("meenu"));

// console.log(nameArray.filter(name=>name!="manju"));
//-------------SPLICE---------------------------
// nameArray.splice(2,1,"mini")
// console.log(nameArray);
//-------------SEPERATOR------------------------
// console.log(nameArray.join(', '));


