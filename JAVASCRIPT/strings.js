str = "java script"
// console.log(str.substring(5,11));
// console.log(str.startsWith("java"));
// console.log(str.endsWith("java"));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// str2 = "   oreo   "
// console.log(str2.trim());

//--remove " " and convert it into array
// console.log(str.split(" "));
//it removes p and splits from p
// console.log(str.split('p'));
//it splits all the characters
// console.log(str.split(""));
//===============================================================================

//-------------- check an email is valid or not ----------
// email = "xyz@gmailcom";
// console.log(email.endsWith("@gmail.com") ? "Valid Email" : "Not a Valid Email");

//-------------chech given word starts with "Ma" ----------
// word = "Malayalam";
// console.log(
//   word.startsWith("Ma")
//     ? `${word} starts with "Ma`
//     : `${word} does not starts with "Ma"`
// );

//------ display word counts of the given para --------------------------
// para = "JavaScript is a programming language and core technology of the World Wide Web, alongside HTML and CSS.";
// console.log(`Count of words: ${para.split(" ").length}`);

//--------- display all vowels from the given data ---------------------------
// data = "hello hai"
// vowels = ['a', 'e', 'i', 'o', 'u']

// console.log(data.split("").filter(char=>vowels.includes(char)));

//===================================================================================================
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

// search = "z"
// filterArray = products.filter(p=>p[1].includes(search))
// if(filterArray.length>0){
//     console.log(filterArray.map(p=>p[1]));
    
// }
// else{
//     console.log("No products are available");
    
// }
//===================================================================================================
//-------------------SLICE--------------------------
console.log(str.slice(-6, -4));
console.log(str.slice(0, 5));
