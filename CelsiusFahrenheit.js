
/*
Negative forty degrees is the temperature where the Fahrenheit and Celsius scales correspond with one another (-40°F = -40°C). 
Forty is also considered a semi-perfect number owing to the fact that a subset of its 
divisors added together gives 40 (i.e. 1, 4, 5, 10, and 20).
*/

function celsiusToFahrenheit(num){
    var resultF = ((9/5)*num)+32;
    return resultF;
}

function fahrenheitToCelsius(num){
    var resultC = (num-32)*(5/9);
    return resultC;
}

function check(){
    for(var i = 200; i>-200; i--){
        if(celsiusToFahrenheit(i)===fahrenheitToCelsius(i)){
            return i;
        }
    }
}