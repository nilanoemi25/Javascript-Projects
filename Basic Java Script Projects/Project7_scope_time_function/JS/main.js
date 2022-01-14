//Global Variable 
var x = 10; 

function Eu(){
    var y = 15; 
    document.getElementById("test").innerHTML = x + y; 
}

var a = x+y; 
document.write(a); // Error as y is not defined on global 

function myfunction(){  // Assignemnt 40
    if(new Date().getHours()<18){
        document.getElementById("gamma").innerHTML = "How are  you today?"; 
    }

}

function musk(){ //Assignment 41
    if(5>2){
        document.getElementById("musk").innerHTML = " Five is greater than two."
    }
}

function translator(){  //Assignment 42
    number = document.getElementById("number").value; 
    if (number >= 2) { 
       job=  "You can become a translator." ;
    }
    else { 
        job= "You cannot become a translator." ; 
    }

    document.getElementById("lang").innerHTML = job ; 
}

//Assignment 43

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if ( Time < 12 == Time > 0){
        Reply = "It is morning time."; 
    }

    else if (Time > 12 == Time < 18){
        Reply = "It is the afternoon.";
    
    }
    
    else {
        Reply = " It is evening time."; 
    } 

    document.getElementById("Time_of_day").innerHTML = Reply; 
}