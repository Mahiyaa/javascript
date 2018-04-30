/*
Anagrams are two words with exactly the same letters. Order does not matter. 
Define a method that, given two strings, returns a boolean indicating whether or not they are anagrams.
*/

function areAnagrams(str1,str2){
    var arr1 = str1.split(''), arr2 = str2.split('');


    if(arr1.length !== arr2.length){
        return false;
    }

    for(var i=0;i< arr1.length;i++){
        if(arr2.indexOf(arr1[i])=== -1){
            return false;
        }
    }

    return true;
}