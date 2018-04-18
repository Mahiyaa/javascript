function longest_word(sentence){
    var arr = sentence.split('');
    var long = '';
    for(var i =0; i <arr.length; i++){
        if (arr[i].length > long){
            long = arr[i];
        } 
    }
    return long;
}