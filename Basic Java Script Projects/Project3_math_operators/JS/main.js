
window.alert(Math.random());  // Math Random 


function myMath() {               // Addition
    var addition = 2+3; 
    document.getElementById("Math").innerHTML = addition; 
}

function subtraction_function(){   //Subtraction
    var Subtraction = 116-8;
    document.getElementById("Subtraction").innerHTML = "116-8 =" + Subtraction; 
}

function multiplication_function() {  //Multiplication
    var simple_math = 5*11;
    document.getElementById("Multi").innerHTML = "5*11=" + simple_math; 
}

function division_function() {  //Division
    var simple_math = 60/12;
    document.getElementById("Division").innerHTML= "60/12=" +simple_math; 
}

function MultipMaths() {   // Equation
var maths = (2+3) / 1 *2 +5;
document.getElementById("Mmaths").innerHTML= "two plus three, divided by one and multipled by two and addition of five =" + maths;
}


function Modulus_function() {  // Modulus 
    var modulus = 25%6;
    document.getElementById("Modulus").innerHTML= "When we divide 25 by 6 the left over is =" + modulus;

}


function Negation_function() {  //Negation
    var b = 10;
    document.getElementById("Negation").innerHTML = -b; 
}


function Ink_function() {   //Increment
    var c = 5;  
    c++;
    document.getElementById("Ink").innerHTML = c; 
}  

function Dec_function() {  //Decrement
    var d = 5; 
    d--; 
    document.getElementById("Dec").innerHTML = d; 
}

document.write(Math.log2(10)); // Math object method 
