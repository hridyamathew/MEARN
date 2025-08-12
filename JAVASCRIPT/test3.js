const prompt = require('prompt-sync')({sigint:true})

//1.  write a js code to print tha fibanocci series for a given number
// input : 8
// output:0  1   1    2  3  5   8   13



num = prompt("Enter the number: ")

a = 0
b = 1
console.log(a);
for(i=2;i<=num;i++){
    console.log(b);
    c = a + b
    a = b
    b = c
}


//2.  write a js code to print the number of digit in a number
// input: 2945
// output : no:of digit=4


num = prompt("Enter the number: ")
digits=0

while(num>0){
    num = Math.floor(num / 10)
    digits++
}
console.log(`no. of digit= ${digits}`);



//3. Grade system:

        // Input a score (0-100)

        // Print grade:

        // A: 90+

        // B: 80–89

        // C: 70–79

        // D: 60–69

        // F: below 60

// var score = prompt("Enter the score: ")
// if(score>=90 && score<=100) {
//     console.log("GRADE: A");
    
// }
// else if(score>=80 && score<90){
//     console.log("GRADE: B");
// }
// else if(score>=70 && score<80){
//     console.log("GRADE: C");
// }
// else if(score>=60 && score<70){
//     console.log("GRADE: D");
// }
// else if(score>=0 && score<60){
//     console.log("GRADE: F");
// }
// else{
//     console.log("Enter a valid score between 0 and 100!!!");
    
// }





//4. Find the sum of all even numbers between 1 and 100.



sum = 0
for(i=1;i<=100;i++){
    if(i%2 == 0){
        sum = sum + i
    }
}
console.log(`Sum of all even numbers between 1 and 100: ${sum}`);




//5. Write a program to find given number is armstrong or not
// input:153
// output:armstrong number
// input:221
// output:not an armstrong number
// input:1634
// output:armstrong number


num = prompt("Enter the number: ")
num1 = num
num2 = num
digits=0
sum=0

while(num>0){
    num = Math.floor(num / 10)
    digits++
}

while(num1>0){
    rem = num1 % 10
    num1 = Math.floor(num1/10)
    sum = sum + rem ** digits
}

if(num2 == sum){
    console.log("Armstrong number");
    
}
else{
    console.log("Not an armstrong number");
    
}
