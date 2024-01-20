//Calculator Functionality

const display = document.getElementById('display');

//Buttons
function appendToDisplay(input){
    display.value += input;
}

//Clear Display (C)
function clearDisplay(){
    display.value = "";
}

//Calculate (=) 
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

//Delete (DEL)
function clearDisplayOne(){
    display.value = display.value.toString().slice(0, -1);
}

//Thank You - Donate
function myFunction() {
    alert(" Please Donate to support us. Thank You!");
  }