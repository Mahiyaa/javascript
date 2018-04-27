/*
Write a method that takes in a string and an array of indices in the
# string. Produce a new string, which contains letters from the input
# string in the order specified by the indices of the array of indices.
*/


function scramble_string(str,positions){
    var newstr='';
    positions.forEach(function(n){
        newstr+=str[n];
    })

    return newstr;

}

// test

var a ="markov";
var pos= [5, 3, 1, 4, 2, 0]

var b =scramble_string(a,pos);

console.log(b);