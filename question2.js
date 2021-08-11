
/*
  number less than 10 return => "00" + number
  number more than 10 and < 100 return => "0" + number
  number more than or equal 100 return =>  number
*/
function test(number){
  


    if(number < 10){return ("00"+number)}

    else if (number==10){return undefined}

    else if (10 < number < 100){return ("0"+number)}

    else if (number >= 100 ){return number}
        
    return 0;

}


// test cases ( don't change these 4 lines )
console.log(test(9)) // should return 9
console.log(test(20)) // should return "020" 
console.log(test(110))  // should return "110" 
console.log(test(10))  // undefined
// you can add more test cases if you want 
