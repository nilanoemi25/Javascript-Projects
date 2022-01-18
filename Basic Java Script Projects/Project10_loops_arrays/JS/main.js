function Call_loop(){ //Assignment 
    var B = ""; 
    var Cookies = 1; 
    let A = "Happy";

    while (Cookies < 10 ) {
        B += "<br>" + Cookies; 
        Cookies++; 
    }
    document.getElementById("loop").innerHTML = B; 
    document.getElementById("H").innerHTML = A.length; 
} 


   var Clothes = ["Jacket, Coat, T-shirt, Jumper, Cardigan"]; // Assignment 
   var Content = ""; 
   var X; 
   function L() { 
   for (X=0; X < Clothes.length; X++) { 
       Content += Clothes[X] + "<br>"
   }
   document.getElementById("for_Loop").innerHTML = Content; 
}
 
function array() {  // Assignment 52
    var Library =[]; 
    Library[0] = " Othello, "; 
    Library[1]= "Romeo and Juliet,"; 
    Library[2]= "Hamlet,"; 
    document.getElementById("Array").innerHTML = "The works of W.Shakespeare include but are not limited to " + Library[2] + " " +  Library[1] + "." ; 
}

function Con(){ 
    const Y = {type:"Youtube ", color:"Red", time:"long ", size:"small" };
    Y.color="Blue";
    Y.size="large";
    Y.cost="Expensive"; 
    document.getElementById("Const").innerHTML = Y.size + " " + Y.cost + " " + Y.color; 
}

var r = R(2,4); 
document.getElementById("R").innerHTML = r; 

function R(a,b){ 
    return a*b; 
}

let bottle = {  //Assignment 55
    made:2020, 
    material: "plastic", 
    storage: "water",
    description: function() { 
        return "The bottle is " + this.made + this.material + this.storage;
     }

}; 
document.getElementById("bottle").innerHTML = bottle.description(); 

// The break statement jumps out of a loop 
//Challenge 15

 let text = ""; 
    for( let i = 0; i<10; i++) {
    if (i===4) {break;}
    text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text; 

// The continue statment skips an iteration 

let text1 = ""; 
for( let i = 0; i<10; i++) {
if (i===4) { continue; }
text1 += "The number is " + i + "<br>";

}

document.getElementById("demo1").innerHTML = text1; 