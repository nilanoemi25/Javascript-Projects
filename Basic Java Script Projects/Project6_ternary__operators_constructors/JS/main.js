function Ridefunction(){  //Assignment 35
    var Height, Can_ride; 
    Height = document.getElementById("Height").value;
    Can_ride=(Height< 52)? "You are too short " : "You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + "to ride."; 
}
/*
function vote(){ //Challenge 8
    var Age, Can_vote; 
    Age=document.getElementById("Age").value; 
    Can_vote=(Age>18)? "You are old enough ": "You are too young ";
    document.getElementById("V").innerHTML= Can_vote + "to vote.";
} */ 

//Assignment 38

function Vehicle(Make, Model, Year, Colour){  //Object Constructor 
    this.Vehicle_Make= Make; 
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year; 
    this.Vehicle_Colour= Colour; 
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
document.getElementById("Keywords_and_Constructors").innerHTML =  "Erik drives a " + Erik.Vehicle_Colour + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;

}

function Foo(Colour){  // Constructor Funtction 
    this.Foo_Colour= Colour; 
}
var Rose= new Foo("red");
function Flower(){
document.getElementById("New_and_This").innerHTML= "The colour of the rose is " + Rose.Foo_Colour; 
}

//Nested Function 
function Counting(){
    document.getElementById("Nested_function").innerHTML = Count();
    function Count () {
        var R = 8; 
        function P () {R += 1;}
        P();
        return R; 
    }

}