var canAddDec = true;
var isNewNumber = false;
var calculateLock = false;
var operator = "";
var prevNumber = null;

var numberList = document.getElementsByClassName("num");
var screenBox = document.querySelector("#screen");

var addButton = document.querySelector("#add");
var subButton = document.querySelector("#sub");
var multButton = document.querySelector("#mult");
var diviButton = document.querySelector("#divi");
var equalButton = document.querySelector("#equal");
var posnegButton = document.querySelector("#posneg");
var zeroButton = document.querySelector("#zero");

var decimalButton = document.querySelector("#dec");
var inverseButton = document.querySelector("#inverse");
var squareButton = document.querySelector("#square");
var rootButton = document.querySelector("#root");
var percentageButton = document.querySelector("#percentage");
var clearEntryButton = document.querySelector("#clearEntry");
var clearButton = document.querySelector("#clear");
var deleteButton = document.querySelector("#delete");






for(var i = 0; i < numberList.length; i++){
    
        numberList[i].addEventListener("click", function(){
            //allows the user to put in a new number
            if(screenBox.textContent == "0" || isNewNumber){
                screenBox.textContent = this.textContent;
                isNewNumber = false;
            }
            //prevents from going over the character limit
            else if(String(screenBox.textContent).length < 19){
                screenBox.textContent += this.textContent;
            }
            calculateLock = false;
            //adds comma(s)
            if(String(screenBox.textContent).length > 3){
                addCommas();
            }
        
    });
}
zeroButton.addEventListener("click", function(){
    if(screenBox.textContent != "0" && String(screenBox.textContent).length < 19){
        screenBox.textContent += "0";
    }
    if(String(screenBox.textContent).length > 3){
        addCommas();
    }
});

addButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number(String(screenBox.textContent).replace(/,/g,'')));
    }
    else{
        prevNumber = Number(String(screenBox.textContent).replace(/,/g,''));
    }
    operator = "+";
    isNewNumber = true;
    calculateLock = true;
    resetDecimal();
    if(String(screenBox.textContent).length > 19){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
});
subButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number(String(screenBox.textContent).replace(/,/g,'')));
        screenBox.textContent = prevNumber;
    }
    else{
        prevNumber = Number(String(screenBox.textContent).replace(/,/g,''));
    }
    operator = "-";
    isNewNumber = true;
    calculateLock = true;
    resetDecimal();
    if(String(screenBox.textContent).length > 19){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
});
multButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number(String(screenBox.textContent).replace(/,/g,'')));
    }
    else{
        prevNumber = Number(String(screenBox.textContent).replace(/,/g,''));
    }
    operator = "*";
    isNewNumber = true;
    calculateLock = true;
    resetDecimal();
    if(String(screenBox.textContent).length > 19){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
});
diviButton.addEventListener("click", function(){
    if(prevNumber !== null && calculateLock === false){
        calculate(operator, Number(String(screenBox.textContent).replace(/,/g,'')));
    }
    else{
        prevNumber = Number(String(screenBox.textContent).replace(/,/g,''));
    }
    operator = "/";
    isNewNumber = true;
    calculateLock = true;
    resetDecimal();
    if(String(screenBox.textContent).length > 19){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
});
equalButton.addEventListener("click",function(){
    if(operator !== ""){
        calculate(operator, Number(String(screenBox.textContent).replace(/,/g,'')));
        prevNumber = null;
        operator = "";
        isNewNumber = true;
        resetDecimal();
        addCommas();
        if(String(screenBox.textContent).length > 19){
            screenBox.textContent = "0";
            alert("Character limit exceeded, reseting calculator.");
            init();
        }
    }
});
decimalButton.addEventListener("click",function(){
    if(canAddDec){
        if(isNewNumber){
            screenBox.textContent = "0.";
            isNewNumber = false;
        }
        else{
            if(String(screenBox.textContent).length < 18){
                screenBox.textContent += ".";
            }
            
        }
        canAddDec = false;
    }
    
});
posnegButton.addEventListener("click", function(){
    if(String(screenBox.textContent).length < 19){
        screenBox.textContent = Number(String(screenBox.textContent).replace(/,/g,'')) * -1;
        if(String(screenBox.textContent).length > 3){
            addCommas();
        }
    }
    
});
inverseButton.addEventListener("click", function(){

    screenBox.textContent = 1 / Number(String(screenBox.textContent).replace(/,/g,''));
    if(String(screenBox.textContent).length > 3){
        addCommas();
    }
    if(String(screenBox.textContent).length > 19){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
    
});
squareButton.addEventListener("click", function(){
    var squareNumber = Number(String(screenBox.textContent).replace(/,/g,''));
    screenBox.textContent = squareNumber * squareNumber;
    if(String(screenBox.textContent).length > 3){
        addCommas();
    }
    if(String(screenBox.textContent).length > 20){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
});
rootButton.addEventListener("click", function(){
    screenBox.textContent = Math.sqrt(Number(String(screenBox.textContent).replace(/,/g,'')));
    if(String(screenBox.textContent).length > 3){
        addCommas();
    }
    if(String(screenBox.textContent).length > 20){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
});
percentageButton.addEventListener("click", function(){
    screenBox.textContent = Number(String(screenBox.textContent).replace(/,/g,'')) / 100;
    if(String(screenBox.textContent).length > 3){
        addCommas();
    }
    if(String(screenBox.textContent).length > 20){
        screenBox.textContent = "0";
        alert("Character limit exceeded, reseting calculator.");
        init();
    }
});
clearEntryButton.addEventListener("click", function(){
    screenBox.textContent = "0";
});
clearButton.addEventListener("click", function(){
    screenBox.textContent = "0";
    prevNumber = null;
    canAddDec = true;
    isNewNumber = false;
    calculateLock = false;
    operator = "";
});
deleteButton.addEventListener("click", function(){
    
    var s = String(screenBox.textContent);
    if(s.length == 1 || s == "0."){
        screenBox.textContent = "0";
        canAddDec = true;
    }
    else if(screenBox.textContent != "0" && !isNewNumber){
        if(s.endsWith(".")){
            canAddDec = true;
        }
        screenBox.textContent = s.slice(0, -1);
    }
    if(s.length > 3){
        addCommas();
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
function addCommas(){
    var s = String(screenBox.textContent);
    s = s.replace(/,/g,'');
    //takes decimals to consideration
    if(s.includes('.')){
        var p = s.indexOf('.');
        var start = s.slice(0,p);
        var end = s.slice(p);
        var length = start.length;
        //only adds the commas to the numbers that don't have the decimal point
        for(var i = length - 3; i > 0; i -= 3){
            start = start.slice(0, i) + ',' + start.slice(i);
        }
        s = start + end;
    }
    else{
        var length = s.length;
        for(var i = length - 3; i > 0; i -= 3){
            s = s.slice(0, i) + ',' + s.slice(i);
        }
    }
    screenBox.textContent = s;
    
}
function init(){
    //resets values
    screenBox.textContent = "0";
    prevNumber = null;
    canAddDec = true;
    isNewNumber = false;
    calculateLock = false;
    operator = "";
}
init();
