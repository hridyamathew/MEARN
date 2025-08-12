// function addNum(a,b){
//     result = a + b
//     return result

// }

// console.log(`Sum = ${addNum(10,2)}`);

//-------------using arrow function--------------

// const addNum=(a,b)=> a+b

// console.log(`Sum = ${addNum(10,2)}`);

//---------------------function to find cube of a number---------------------------------------------

// function cube(a) {
//   result = a ** 3;
//   return result;
// }

// console.log(`Cube of 2 = ${cube(2)}`);

//--------------------- using arrow function--------------

// const cube=(a)=> a**3

// console.log(`Cube of 2 = ${cube(2)}`);

// -------------function to check a number is odd/even--------------------------------------

// function oddEven(a) {
//   if (a % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(`3 is an ${oddEven(3)} number`);

//-----------using arrow function-----------------

// const oddEven=(a)=> a%2==0?"even":"odd"

// console.log(`3 is an ${oddEven(3)} number`);

//------------CALL BACK FUNCTION----------------------------------------------------------------

// setTimeout(()=>console.log("Hello"),5000)

//----------------NESTED FUNCTION----------------------------------------------------------------

// globalData = "GlobalData!!!";

// function parent() {
//   parentData = "parentData!!";
//   console.log("Inside Parent function");
//   console.log(
//     `Inside parent function globalData = ${globalData} and parentData = ${parentData}`
//   );

//   return function child() {
//     childData = "childData!";
//     console.log("Inside child function");
//     console.log(
//       `Inside child function globalData = ${globalData}, parentData = ${parentData} and childData = ${childData}`
//     );
//   };
// }

// child = parent()
// child()

//--------RECURSIVE FUNCTION--------------------------------------------------------------------------

// function countDown(num){
//     console.log(num);
//     if(num>1){
//         countDown(num-1)
        
//     }
    
// }

// countDown(10)





