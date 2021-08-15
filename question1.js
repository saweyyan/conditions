// question 1 branch 


// A. replace ? with operator to output true 
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110!== 100 > 10 > 20); // true
console.log(-10 == "-10"); // true
console.log(! 20 == false); // true
            
            
            

let num1 = 10;
let num2 = 20;
// B. using operators and num1, num2 variables write code to return true
/*
  RULES:
  - EACH OPERATOR CAN BE USED ONCE
  - YOU CANN'T USE FIXED 'NUMBER' ( ONLY num1, num2 can be used in each solution ) 
  - YOU CAN'T USE THE SAME VARIABLE MORE THAN ONCE IN THE SAME SOULTION LIKE THIS ( num1 == num1 )
*/
// example
console.log(num1 < num2 ); // true
console.log(num1 <= num2 ); // true
console.log(num2 > num1 ); // true
console.log(num2 >= num1 ); // true
// minmmum 3 solution
console.log(num1 != num2); // true
console.log(! (num1 == num2)); // true
console.log(! (num1> num2)); // true
// you can add more solutions here 
// console.log(); // true


// C. replace ? with operator to get true
// rule 
// you can't use numbers or change variable values

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a == c) && !(a == c)); // true
