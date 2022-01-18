var canAddDec = true;
var isNewNumber = false;
var calculateLock = false;

var numberList = document.getElementsByClassName("num");
var screenBox = document.querySelector("#screen");

var addButton = document.querySelector("#add");
var subButton = document.querySelector("#sub");
var multButton = document.querySelector("#mult");
var diviButton = document.querySelector("#divi");


var operator = "";
var prevNumber = null;



for(var i = 0; i < numberList.length; i++){
    
        numberList[i].addEventListener("click", function(){
        if(screenBox.textContent == "0" || isNewNumber){
            screenBox.textContent = this.textContent;
            isNewNumber = false;
        }
        else{
            screenBox.textContent += this.textContent;
        }
        calculateLock = false;
    });
}

addButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number.parseFloat(screenBox.textContent));
    }
    else{
        prevNumber = Number.parseFloat(screenBox.textContent);
    }
    operator = "+";
    isNewNumber = true;
    calculateLock = true;
});
subButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number.parseFloat(screenBox.textContent));
        screenBox.textContent = prevNumber;
    }
    else{
        prevNumber = Number.parseFloat(screenBox.textContent);
    }
    operator = "-";
    isNewNumber = true;
    calculateLock = true;
});
multButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number.parseFloat(screenBox.textContent));
    }
    else{
        prevNumber = Number.parseFloat(screenBox.textContent);
    }
    operator = "*";
    isNewNumber = true;
    calculateLock = true;
});
diviButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number.parseFloat(screenBox.textContent));
    }
    else{
        prevNumber = Number.parseFloat(screenBox.textContent);
    }
    operator = "/";
    isNewNumber = true;
    calculateLock = true;
});
    
    

function calculate(op, number){
    if(op === "+"){
        prevNumber += number;
        screenBox.textContent = prevNumber;
    }
    else if(op === "-"){
        prevNumber -= number;
        screenBox.textContent = prevNumber;
    }
    else if(op === "*"){
        prevNumber *= number;
        screenBox.textContent = prevNumber;
    }
    else if(op === "/"){
        prevNumber /= number;
        screenBox.textContent = prevNumber;
    }
}

function resetDecimal(){
    canAddDec = true;
}
function init(){
    screenBox.textContent = "0";
    currentValue = 0;
}
init();