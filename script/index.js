let displayVal = document.getElementById('display')


function displayValue(val) {
    displayVal.value = displayVal.value + val;
 }

 function output() {
    let num1 = displayVal.value;
    let num2 = eval(num1);   //I can also use the +num 
    displayVal.value = num2;
 }

 function erase() {
    console.log('Clear Reached!', displayVal.value)
    displayVal.value = ' ';
    // console.log('Clear not reached!');
 }

 function backSpace() {
    console.log('reached here')
    display.value = display.value.slice(0, -1);
 }


