/*function to print values of button on textbox*/
function val(x){
    calculatorform.screen.value += x.value;
}

/*function to clear textbox */
function Clear(){
    calculatorform.screen.value = null;
}

function calculate(){
    calculatorform.screen.value = eval(calculatorform.screen.value);
}