function palindrome(word){
    var mid = (word.length/2);
    for(var i =0, j = word.length-1; i <mid;i++,j--){
        if(word[i]!==word[j]){
            return false;
        }  
    }
    return true;
}