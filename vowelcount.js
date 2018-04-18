function vowelcount(str){
    var count = 0,
    vowels = 'aeiouAEIOU'.split('');

    for(var i = 0; i<str.length;i++){
        if(vowels.indexOf(str[i])!== -1){
            count++;
        }
    }
    return count;
}