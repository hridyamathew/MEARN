
const prompt = require('prompt-sync')({sigint:true})

//-------------------------------w.a.p to print 1 to 10

// i = 1
// while(i<=10){
//     console.log(i);
//     i++
// }

//----------------------w.a.p to print even numbers from 1 to 50

// x = 1
// while(x<=50){
//     if(x%2 == 0) {
//         console.log(x);
//     }
//     x++
// }

//---------------------w.a.p to print numers from 5 to 1

// i = 5
// while(i>=1){
//     console.log(i);
//     i--
    
//  }

//-------------------w.a.p to print sum of all numbers from 1 to 10

// sum = 0
// i = 1
// while(i<=10){
//     sum+=i
//     i++
// }
// console.log(`Sum of numbers from 1 to 10: ${sum}`);

//-------------------- w.a.p to reverse a number----------------------------------


// num = prompt("Enter the number: ")
// rev = 0

// while(num>0){
//     rem = num % 10
//     rev = (rev * 10) + rem
//     num = Math.floor(num / 10)
// }

// console.log(`Reversed number: ${rev}`);


//-----------------Factorial-------------------------------

// const prompt = require('prompt-sync')({sigint:true})

// num = prompt("Enter the number: ")
// n = num
// fact = 1
// while(num>=1){
//     fact = fact * num
//     num--
// }

// console.log(`Factorial of ${n} is ${fact}`);

//----------------------Palindrome-----------------------

// num = prompt("Enter the number: ")
// n = num
// rev = 0

// while(num>0){
//     rem = num % 10
//     rev = (rev * 10) + rem
//     num = Math.floor(num / 10)
// }

// if(n == rev){
//     console.log(`${n} is a palindrome`);
    
// }
// else{
//     console.log(`${n} is not a palindrome`);
// }

//----------------- 3 digit number is armstrong number or not-------------------------

// num = prompt("Enter the number: ")
// sum = 0
// n = num
// while(num>0){
//     rem = num % 10
//     sum = sum + rem ** 3
//     num = Math.floor(num/10)
// }

// if(n == sum){
//     console.log(`${n} is an armstrong number `);
    
// }
// else {
//     console.log(`${n} is not an armstrong number `);
// }


//-----------------------pattern------------------------------------------
// input: 2     3       4       5
//output: 24   369     4936     ?

// n = prompt("Enter the number: ")
// i = 1
// num = 0
// while(i<=n){
//     num = num * 10 + i
//     i++
//     res = num * n
// }

// console.log(res);


//--------------------FOR LOOP---------------------------------------------------

// for(let i = 1; i<=10; i++) {
//     console.log(i);
    
// }


//----------print 10 to 5----------

// for(i = 10;i>=5; i--){
//     console.log(i);
    
// }

// console.log("-------------------------------------------------");


//----------factorial--------------

// num = prompt("Enter the number: ")
// fact = 1
// for(i=1;i<=num;i++){
//     fact = fact * i
// }
// console.log(`Factorial of ${num}: ${fact}`);


//-------------------------break/continue--------------------

// for(i=1;i<=10;i++) {
//     console.log(i);
//     if(i==4){
//         break
//     }
    
// }

// console.log("-----------------------------------------------");

// for(i=1;i<=10;i++) {
//     if(i==4){
//         continue
//     }
//     console.log(i);
    
// }


//-----------------------prime number or not-------------------------


// num = prompt("Enter the number: ")
// x = true

// for(i=2;i<=Math.ceil(num/2);i++){
//     if(num%i == 0){
//         x = false
//         break
//     }
// }

// if(x){
//     console.log(`${num} is a prime number`);
    
// }
// else{
//     console.log(`${num} is not a prime number`);
// }

//---------------HCF------------------------

// num1 = prompt("Enter the first number: ")
// num2 = prompt("Enter the second number: ")

// num1<num2?n = num1:n = num2

// for(i=1;i<=n;i++){
//     if(num1%i==0 && num2%i==0){
//         hcf = i
//     }
// }

// console.log(`HCF of ${num1} and ${num2}: ${hcf}`);

//---------print the following pattern-----------------
// # # # #
// # # # #
// # # # #
// # # # #


// for(i=1;i<=4;i++){
//     row = ''
//     for(j=1;j<=4;j++){
//         row+='# '
//     }
//     console.log(row);
    
// }

console.log("------NUMBER OF DIGITS--------------");

num = prompt("Enter the number: ")
digits = 0

while(num>0){
    num = num / 10
    digits++
}
console.log(num);

