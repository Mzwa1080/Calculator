let displayVal = document.getElementById('output');
let sum = '';


function displayValue(val) {
    displayVal.value = displayVal.value + val;
 }

// I must have the output function for the answer, displaying the values
 function evaluateSum() {
    let num1 = displayVal.value;
    let num2 = eval(num1);   //I can also use the +num 
    displayVal.value = num2;
 }

//  I must have a function that removes everything on the input(value)
 function erase() {
    console.log('Clear Reached!', displayVal.value)
    displayVal.value = sum;
    // console.log('Clear not reached!');
 }
// I must have a function to remove a single number
 function backSpace() {
    console.log('reached here')
    displayVal.value = displayVal.value.slice(0, -1);
 }


