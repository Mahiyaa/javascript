/*

Write a method that accepts two strings as arguments. 
If the second string can be spelled using letters from the first, return an array of the indices of the letters of the 
second string as they occur in the first (choose the earlier occurrence if a letter occurs more than once).
Otherwise, return false. The second string may reuse letters from the first.

*/

function wordplay(str1,str2){
    var result=[],index;
    var arr1 = str1.split(''), arr2 = str2.split('');
    if(arr1.length<arr2.length){
        return false;
    }
    for(var i = 0;i<arr2.length;i++){
        index = arr1.indexOf(arr2[i]);
        if(index!==-1){
            result.push(index);
        }
    }
    if (result.length>0){
        return result;
    }
    else{
        return false;
    }
}