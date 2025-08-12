const prompt = require('prompt-sync')({sigint:true})


// const weekDay =prompt("Enter a week day: ")

// switch(weekDay) {
//     case 'monday':console.log("Its a week day");
//                     break
//     case 'tuesday':console.log("Its a week day");
//                     break
//     case 'wednesday':console.log("Its a week day");
//                     break
//     case 'thursday': console.log("Its a week day");
//                     break
//     case 'friday':console.log("Its a week day");
//                     break
//     case 'saturday': console.log("Its a holiday");
//                     break
//     case 'sunday':console.log("Its a holiday");
//                     break
//     default:
//         console.log("Enter a valid weekday");
// }



const weight =prompt("Enter the weight: ")

switch(true){
    case weight>=80:
        console.log("Over weight");
        break
    case weight>=50:
        console.log("Normal weight");
        break
    case weight>=30:
        console.log("Under weight");    
}
