// const emp = {
//     empId:1002,
//     empName:"max",
//     desig:"Tester",
//     location:"Kochi",
//     salary:25000,
//     exp:3
// }

// console.log(emp);
// console.log(emp["empName"]);
// console.log(emp.salary);

// console.log("empName" in emp?emp["empName"]:"Key not present");

// emp.hasOwnProperty("isVaccinated")?console.log(emp["isVaccinated"]):emp["isVaccinated"]='yes'
// console.log(emp);

// emp.salary+=5000
// console.log(emp);

// for(key in emp){
//     console.log(`${key}: ${emp[key]}`);
    
// }
//====================================================================================================
// var car ={
//     name:'Baleno',
//     model:'hatch-back',
//     manufacturer:'suzuki',
//     price: '13 L'
// }

//------display car name and its manufacturer-----------------
// console.log(`name: ${car["name"]}, manufacturer: ${car["manufacturer"]}`);

// //--------check model key is present, then display its value-----------
// console.log("model" in car?`model: ${car["model"]}`:"model not present");

// //--------------- add variant as automatic, manual-------------------
// car["variant"] = ['automatic', 'manual']
// console.log(car);

// //-------------add colors as red, white, blue, ash, black-------------
// car["color"] = ['red', 'white', 'blue', 'ash', 'black'] 
// console.log(car);

// //-------------add hybrid variant-------------------------------------
// car.variant.push("hybrid")
// console.log(car);

// console.log(Object.values(car));
// console.log(Object.keys(car));

// Object.assign(car, {engine:'yes'})
// console.log(car);
//==================================================================================================

//------------print each word count------------------

// sentence = "hai all hello hai welcome to js"
// count = {}
// // arr = sentence.split(" ")
// // for(word of arr){
// //     word in count?count[word]+=1:count[word]=1
// // }
// // console.log(count);
// sentence.split(" ").forEach(word=>word in count?count[word]+=1:count[word]=1)
// console.log(count);
//=====================================================================================================

//-------find the first recursive character from the given pattern-----------------
// pattern ='ABCEACC'
// result = {}
// for(let ch of pattern) {
//         if(result.hasOwnProperty(ch)){
//             console.log(`First recursive character: ${ch}`);
//             break
//         }
//         else{
//         result[ch] = null
//         }
// }
// //-------DISPLAY number count------------------------------------------------------
// array = [10, 12, 32, 10, 11, 12, 22, 10, 44, 2]
// count={}
// array.forEach(num=>count.hasOwnProperty(num)?count[num]+=1:count[num]=1)
// console.log(count);
//------------------------------------------------------------------------------------------------
// weatherData=[
//     {district:'Thrissur',temp:32},
//     {district:'Kottayam',temp:29},
//     {district:'Palakkad',temp:34},
//     {district:'Eranakulam',temp:33},
//     {district:'Thrissur',temp:29},
//     {district:'Kottayam',temp:30},
//     {district:'Palakkad',temp:32},
//     {district:'Eranakulam',temp:31}



// ]
// // print districts with its highest temperature
// // output{'Thrissur:32,Kottayam:30,Palakkad:34,Eranakulam:33}
// result = {}
// weatherData.forEach(data=>{
//     const district = data['district']
//     const currentTemp = data['temp']
//     if(result.hasOwnProperty(district)){
//         const prevTemp = result[district]
//         if(currentTemp > prevTemp){
//             result[district] = currentTemp
//         }
//     }
//     else{
//         result[district] = currentTemp
//     }
    
// }
// )

// console.log(result);

//================================================================================================================

// products=[
//     {pid:100,pName:'Apple',band:'5g',price:120000,display:'led'},
//     {pid:101,pName:'Samsung',band:'5g',price:45000,display:'led'},
//     {pid:102,pName:'Blueberry',band:'4g',price:50000,display:'led'},
//     {pid:103,pName:'Nokia',band:'3g',price:1200,display:'lcd'},
//     {pid:104,pName:'Motorola',band:'4g',price:10000,display:'lcd'},


// ]

// // 1.print product name only
// console.log("------------Product Names----------------");
// products.forEach(data=>console.log(data['pName']))

// // 2.print all mobile details whose display is lcd
// console.log("-------------------------products with display lcd-----------------");
// products.filter(data=>data['display'] == 'lcd').forEach(value=>console.log(value['pName']))

// // 3.print 5g mobile phone name
// console.log("-------------------- 5g Phones--------------------");
// products.filter(data=>data['band'] == '5g').forEach(value=>console.log(value['pName']))


// // 4.dispaly mobiles based on price
// console.log("--------------mobiles based on price-------------------------------");
// products.sort((a,b)=>b['price'] - a['price']).forEach(value=>console.log(value['pName'], value['price']))

// // 5.print costly mobile
// console.log("--------------------Costly mobile -------------------------");
// console.log(products.reduce((costly, value)=>costly['price']>value['price']?costly:value)['pName']);

// // 6.print low cost mobile
// console.log("--------------------Low cost mobile -------------------------");
// console.log(products.reduce((lowcost, value)=>lowcost['price']<value['price']?lowcost:value)['pName']);
//==================================================================================================================================

accounts=[
    {
       acno:1000,ac_type:'savings',balance:45000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1001,ac_type:'current',balance:30000,transaction:[
           {
               to:1000,amount:1000,msg:'grossary',mode:'gpay'
           },
           {
               to:1002,amount:7000,msg:'gift',mode:'phonePay'
           },
           {
               to:1003,amount:10000,msg:'emi',mode:'neft'
           },
       ]
   
    },
    {
       acno:1002,ac_type:'fixed',balance:100000,transaction:[
           {
               to:1000,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1001,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1003,ac_type:'savings',balance:30000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'n ef'
           },
           {
               to:1000,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    
   ]

// 1.print total number of accounts
console.log('--------------------------Total no. of accounts--------------------------');
console.log(accounts.length);


// 2.print acount number whose account type is savings
console.log("--------------- account number of savings acoount-------------------");
accounts.filter(account=>account.ac_type == 'savings').forEach(account => console.log(account.acno))

// 3.print balance of account number 1000
console.log("---------------- Balance of account number 1000----------------");
console.log(accounts.find(account=>account.acno == 1000).balance);


// 4.print all gpay transactions
console.log("---------------------- All gpay transactions -----------------------");
console.log(accounts.map(account=>account.transaction).flat(Infinity).filter(t=>t.mode == 'gpay'));


// 5.print all transactions whose amount>5000
console.log("----------------- amount > 5000 -------------");
console.log(accounts.map(account=>account.transaction).flat(Infinity).filter(t=>t.amount > 5000));

// 6.print credit transaction of account 1002
console.log("----------------- print credit transaction of account 1002 ---------------------------");
credit = accounts.map(account=>account.transaction).flat(Infinity).filter(t=>t.to == 1002);
console.log(credit);

// 7.print total credit amount to the account 1002
console.log("----------------------- total credit amount to the account 1002 -------------------------");
console.log(credit.reduce((a,b)=>a+b.amount, 0));

// 8.print debit transaction of account 1002
console.log("-------------------- debit transactions of account 1002 -------------------------------");
debit = accounts.find(account=>account.acno == 1002).transaction
console.log(debit);


// 9.print total debit amount from the account 1002
console.log("------------------------- total debit amount from the account 1002 ----------------------------");
console.log(debit.reduce((a,b)=>a+b.amount, 0));

//10. print transaction history of 1002
transhistory=[...debit,...credit] // combine the debt and crt into single array
console.log(transhistory);

//11.current balance of 1002
console.log("----------------------- current balance of 1002 --------------------------");
console.log(accounts.find(account=>account.acno == 1002).balance);

//12. print highest  balance account details
console.log("------------------------- highest  balance account details --------------------------------");
console.log(accounts.reduce((account, acc)=>account.balance>acc.balance?account:acc));


