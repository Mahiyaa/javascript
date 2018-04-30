/*
Define a method that accepts two arguments, a string and an integer. 
The method should return a copy of the string with the nth letter removed.
*/

function remove_nth_letter(str,num){
    var arr = str.split(""), word=[];
    for (var i = 0; i<arr.length;i++){
        if(i !== num-1){
            word.push(arr[i]);
        }
    }

    return word.join('');

}