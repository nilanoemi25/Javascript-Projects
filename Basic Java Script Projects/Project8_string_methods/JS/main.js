function concatfunc(){ //Assignment 44
    var one = "There are"; 
    var two = " many";
    var three = " cats infront of";
    var four =  " the Parliment.";
    var whole = one.concat(two,three,four);
    document.getElementById("concat").innerHTML = whole; 
}

function pizza(){ 
    var whole = "We ordered 5 types of pizza!";
    var quantity = whole.slice(10,18);
    document.getElementById("crust").innerHTML = quantity; 
}


function sentence(){ 
    var literatur = "Shakespeare";
    var capitalize = literatur.toUpperCase();
    document.getElementById("cap").innerHTML = capitalize; 
}

function sea(){
var z = " There are a lot of bears in the park."; 
var k = z.search("bears"); 
document.getElementById("A").innerHTML = k; 
} 

function string(){ //Assignment 46 
    var o = 108; 
    document.getElementById("string").innerHTML = o.toString(); 
}

function precision(){ // Assignment 47
    var t = 0.10585665565656454551; 
    document.getElementById("P").innerHTML= t.toPrecision(8);
}

function fi(){  //Challenge 11
    var h = 0.5556565; 
    document.getElementById("h").innerHTML = h.toFixed(3);
}

function internal(){ 
    var l = "This is a test.";
    var k = l.valueOf(l); 
    document.getElementById("test").innerHTML = k; 
}