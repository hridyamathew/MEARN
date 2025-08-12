numArray = [10, 2, 13, 33, 24, 19];
//-------Linear Searching-------------------------------------
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

//-------------------------Binary Searching------------------------------------
// numArray.sort((a, b) => a - b);
// search = 50;
// low = 0;
// up = numArray.length - 1;
// found = false;

// while (low <= up) {
//   mid = Math.floor((low + up) / 2);

//   if (numArray[mid] == search) {
//     found = true;
//     break;
//   } else if (numArray[mid] < search) {
//     low = mid + 1;
//   } else if (numArray[mid] > search) {
//     up = mid - 1;
//   }
// }

// console.log(found ? `${search} is present` : `${search} is not present`);
