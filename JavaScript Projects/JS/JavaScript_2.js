function validate(){  //Challenge 18
    let x = document.forms["myForm"]["fname"].value; 
    if ( x == ""){ 
        alert("Name must be filled out");
        return false; 
    }
    
}