function dragon_func() { //Assingment 56 Switch Statement 
    var dragon_output; 
    var dragons = document.getElementById("dragon_input").value;
    var dragon_string = " is a great dragon!" ; 
    switch(dragons) { 
        case"Oriental Dragon": 
        dragon_output = "Oriental Dragon" + dragon_string; 
        break; 
        case" Wyvern":
        dragon_output = "Wyvern" + dragon_string; 
        break; 
        case"African Dragon": 
        dragon_output = "African Dragon" + dragon_string; 
        break; 
        case"Hydra": 
        dragon_output = "Hydra" + dragon_string; 
        break; 
        case"Wyrm": 
        dragon_output = "Wyrm" + dragon_string; 
        break; 
        default: 
        dragon_output = "Please write your choice of dragon exactly as written on list.";
    
    }

    document.getElementById("dragon_output1").innerHTML=dragon_output; 
}

function Clickfunction(){  //Assignment 57
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = " Voila"
}

//Challenge 16 
/*
function Canvas(){ 
    var c = document.getElementById("demo");
    var ctx = c.getContext("2d"); 
    var img = document.getElementById("image"); 
    ctx.drawImage(img, 8,10); 
} 
*/

//Challenge 17

function Canvas(){
 var c = document.getElementById("demo");
 var ctx = c.getContext("2d");

 var grd = ctx.createLinearGradient(0,0,125,5);
 grd.addColorStop(0, "blue");
 grd.addColorStop(1, "red");

 ctx.fillStyle = grd;
 ctx.fillRect(20,15,150,100); 

}
