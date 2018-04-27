function is_palindrome(word){
    var mid = (word.length/2);
    for(var i =0, j = word.length-1; i <mid;i++,j--){
        if(word[i]!==word[j]){
            return false;
        }  
    }
    return true;
}

function longest_palindrome(str){
    var word=str, check,j;
    var mid = str.length/2

    for(var i =0; i<mid; i++){
        j = word.length-1
        while(j){
            if(word[i]===word[j]){
                word = word.slice(i,j);
                check=is_palindrome(word);
                if check{
                    return word;
                }
                else{
                    j--;
                }
            }
        }
        
}
return false;
}