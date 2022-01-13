document.write(typeof "Stuff"); //Assignment 26

function M() { 
    document.getElementById("M").innerHTML = 0/0; //Challenge 6 
}

function N() { 
    document.getElementById("N").innerHTML = isNaN("sale");
}

function O() { 
    document.getElementById("O").innerHTML = isNaN("555"); 

}

function inf() { // Assignment 27

    document.getElementById("Inf").innerHTML = 3E1085; 
   /* document.getElementById("Inf").innerHTML = -3E1085; */
}

/*document.write (10>2); //Assignment 28
document.write (10<2); 

console.log(5+6); // Assignment 29

document.write("10"+4); //Type Coercion 


document.write( console.log(5>7) && console.log(2>1)); //Challenge 7 in Console = false 

document.write( 15 == 5); // Assignment 31 false  */

/* var A = 5;  // Assignment 32
var B = 5; 
var C = "5"; 
var D = "five"; 
var E = 6; 
var F = "seven";

document.write(A === B); // true
document.write(A === F); // false 
document.write(A === C); // false 
document.write(A===E); // false 
*/

/*
document.write( 15 > 5 && 20 < 2); //false 
document.write( 15 > 5 || 20 > 2); //true 

*/ 

function Not() { 
    document.getElementById("Not").innerHTML = !(2>3); //true
    document.getElementById("Nott").innerHTML = !(5>3);  //false 
}

