// console.log("Hello World")
// console.log(1)
// console.log("1.56")
// console.log(typeof 1)
// console.log(typeof "t")
// console.log(typeof "hello")

// var temp
// console.log(temp)
// console.log(typeof temp)
// temp = 1000

// const pi = 3.14
// console.log(pi)

// var num = 1
// console.log(num>=10 && num<=15)

//------------------- SWAPPING ----------------------------------

// a = 20
// b = 10
// console.log("Before Swapping a =", a , "and b =", b)

// temp = a
// a = b
// b = temp
// console.log("After Swapping a =", a , "and b =", b)

// a = a + b
// b = a - b
// a = a - b

// console.log("After Swapping a =", a , "and b =", b)

//------------- JOINING DATAS ------------------------------------

// const company = "XYZ PVT"
// const location ="calicut"
// const zipcode = 673580

// console.log("The",company,'located at', location, "and zipcode is", zipcode)

// console.log(`The ${company} located at ${location} and zipcode is  ${zipcode}`)

//------------------- CONDITIONAL STATEMENTS----------------------

// num = 18

// if(num>=18) {
//     console.log("Eligible for voting");
// }
// else{
//     console.log("Not eligible for voting");
// }

//---------- Program to check a number is +ve, -ve or 0 ---------------------
// num = 0
// if(num>0) {
//     console.log("+ve number");
// }
// else if(num<0){
//     console.log("-ve number");
// }
// else{
//     console.log("Zero");
// }

//--------------- Program to check largest among 2 numbers---------------------

// num1 = 3
// num2 = 3
// if(num1>num2) {
//     console.log(`${num1} is largest`);
// }
// else if(num1<num2) {
//     console.log(`${num2} is largest`);
// }
// else{
//     console.log(`Both are equal`);
// }

//--------------w.a.p to print "FIZZ" when a number is divisible by 3, print "BUZZ"  when a number is divisible by 5,
// and display "FIZZ BUZZ" when divisible by 15

// num = 75
// if(num%3 == 0){
//     console.log("FIZZ")
//     if(num%5 == 0 ) {
//         console.log("BUZZ")
//         console.log("FIZZ BUZZ");

//     }
// }
// else if(num%5 == 0){
//     console.log("BUZZ");
//     if(num%3 == 0 ) {
//         console.log("FIZZ")
//         console.log("FIZZ BUZZ");

//     }
// }
// else{
//     console.log(`${num} is not divisible by 3, 5, and 15`);
// }

//-------------------------------------------------------------------------
// second largest number among 3 and also display the 3 numbers in sorted order

// a = 23
// b = 11
// c = 32

// if(a > b) {
//     temp = a
//     a = b
//     b = temp
//     if(a > c) {
//         temp = a
//         a = c
//         c = temp
//         if(b > c) {
//             temp = b
//             b = c
//             c = temp
//         }
//     }
//     else if(b > c) {
//             temp = b
//             b = c
//             c = temp
//     }

// }

// else if(a > c) {
//         temp = a
//         a = c
//         c = temp
//         if(b > c) {
//             temp = b
//             b = c
//             c = temp
//         }
// }

// else if(b > c) {
//             temp = b
//             b = c
//             c = temp
// }

// if(a == b && a != c) {
//     console.log(`Second largest number: ${c}`);
//     console.log(`Sorted numbers: ${a}, ${b}, ${c}`);
// }
// else if(a == b && a == c){
//     console.log(`All numbers are equal: ${a}`);
// }
// else {
//     console.log(`Second largest number: ${b}`);
//     console.log(`Sorted numbers: ${a}, ${b}, ${c}`);
// }

//------TRUTHY-------------------------------------------------
// num = 2
// num<5 && console.log(`${num} is lesser than 5`);

//----------------TERNARY----------------------------------------

// age = 13
// console.log(age>=18?"Eligible for voting":"Not eligible for voting");

// ---------------------------WHILE LOOP---------------------------------------

// i = 1
// while(i<=5) {
//     console.log(i);
//     i++

// }

// var x;
// console.log(typeof x);
// x = 10;

// console.log("10" + 5);
// console.log("10" - "5");

// let a = 5;
// let b = 10;
// console.log(a + b++);
// console.log(a)
// console.log(b);

//--------------------------ARRAYS-------------------------------------------------------------------

// days = ['monday', 'tuesday', 'wednesday', 'Thursday', 'Friday', 10]
// console.log(days);
// console.log(typeof days);
// console.log(days[3]);
// console.log(days.length);
// console.log(days[days.length-1]);
//-----accessing array elements--------
// console.log("---------------using for loop---------------------");

// for(i=0;i<days.length;i++){
//     console.log(days[i]);

// }

// console.log("-----------using for of loop--------------");

// for(let day of days){
//     console.log(day);

// }

// console.log("-----------using for in loop--------------");

// for(let index in days){
//     console.log(days[index]);

// }

//-------------------------------------------------------------------------------------------------

// numArray = [10, 2, 13, 33, 24, 19];

//-----------largest number in the array----------------------------
// largest = numArray[0];
// for (let num of numArray) {
//   if (num > largest) {
//     largest = num;
//   }
// }
// console.log(`Largest number in the array: ${largest}`);

//-----------smallest number in the array----------------------------
// smallest = numArray[0];
// for (let num of numArray) {
//   if (num < smallest) {
//     smallest = num;
//   }
// }
// console.log(`Smallest number in the array: ${smallest}`);

//-------------total sum of all numbers in the array------------------
// sum = 0;
// for (let num of numArray) {
//   sum += num;
// }
// console.log(`Sum of all the numbers in the array: ${sum}`);

//------------check an element in the array-----------------

// number = 33
// found = false
// for(let num of numArray){
//     if(num == number){
//         found = true
//         break
//     }
// }

// if(found){
//     console.log(`${number} is present in the array`);
    
// }
// else{
//     console.log(`${number} is not present in the array`);
// }

//---------------array methods-------------------------------------
// days = ['monday', 'tuesday', 'wednesday', 'Thursday', 'Friday', 10]
// days.push("saturday")
// console.log(days);
// days.unshift("sunday")
// console.log(days);
// days.pop()
// console.log(days);
// days.shift()
// console.log(days);

//-----------------print the pattern------------------------
//      input = [4,5,6]
//      output = [11,10,9]
//      logic = 4+5+6 = 15. 15-4 = 11, 15-5=10, 15-6=9

// input = [4, 5, 6]
// sum = 0

// for(let num of input){
//     sum+=num
// }

// output = []
// for(let num of input){
//     output.push(sum-num)
// }
// console.log(output);

//-----------print all duplicate numbers--------------------------------------------

duplicateArray = [10, 29, 40, 20, 10, 11, 23]

for(let i=0;i<duplicateArray.length;i++){
    for(let j=i+1;j<duplicateArray.length;j++){
        if(duplicateArray[i] == duplicateArray[j]){
            console.log(duplicateArray[i]);
            break
            
        }
    }
}

//-----------print the numbers whose sum = 7---------------------------------------

pairSumArray = [2, 3, 4, 5]

for(let i=0;i<pairSumArray.length;i++){
    for(let j=i+1;j<pairSumArray.length;j++){
        if((pairSumArray[i]+pairSumArray[j]) == 7){
            console.log(`${pairSumArray[i]},${pairSumArray[j]}`);
            
        }
    }
}

//------------------print all common numbers--------------------------------------------

p =[10, 22, 12, 20, 30]
q = [11, 20, 21, 30, 31]

for(let num1 of p){
    for(let num2 of q){
        if(num1 == num2){
            console.log(num1);
            break
            
        }
    }
}

