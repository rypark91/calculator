var canAddDec = true;
var isNewNumber = false;
var calculateLock = false;

var numberList = document.getElementsByClassName("num");
var screenBox = document.querySelector("#screen");

var addButton = document.querySelector("#add");
var subButton = document.querySelector("#sub");
var multButton = document.querySelector("#mult");
var diviButton = document.querySelector("#divi");
var equalButton = document.querySelector("#equal");

var decimalButton = document.querySelector("#dec");


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
    resetDecimal();
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
    resetDecimal();
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
    resetDecimal();
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
    resetDecimal();
});
equalButton.addEventListener("click",function(){
    if(operator !== ""){
        calculate(operator, Number.parseFloat(screenBox.textContent));
        prevNumber = null;
        operator = "";
        isNewNumber = true;
        resetDecimal();
    }
});
decimalButton.addEventListener("click",function(){
    if(canAddDec){
        if(isNewNumber){
            screenBox.textContent = "0.";
            isNewNumber = false;
        }
        else{
            screenBox.textContent += ".";
        }
        canAddDec = false;
    }
    
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