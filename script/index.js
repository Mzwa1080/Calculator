let displayVal = document.getElementById('display')


function displayValue(val) {
    displayVal.value += val;
 }

 function output() {
    let num1 = displayVal.value;
    let num2 = eval(num1);   //I can also use the +num 
    displayVal.value = num2;
 }

 function clear() {
    displayVal    
    displayVal.value = '';
 }

 function backSpace() {
    display.value = display.value.slice(0, - 1);
 }


