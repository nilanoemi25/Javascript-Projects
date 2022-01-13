function hungry() {  // First KVP created 
var Food = { 
    Name: "Pasta",
    Taste: "Good",
    Flavour: "Spicy",
    Slices: 8,
    Recommendation: " Ten out of ten"
}; 
 document.getElementById("Di").innerHTML = Food.Name; 
}

function thirsty(){ //Challenege 5 Observation - Nothing happens 
var Drink = { 
    Base: "water",
    Flavours : " Berry or Orange or Kiwi",
    Glass: "Large or Medium",
    /*Glass: "Small or Kids- size" */ 
};

delete Drink.Glass;  // Word Operator 
document.getElementById("Tea").innerHTML = Drink.Glass; 

}

