function capitalize(sentence){
    var arr = sentence.split(' '),warr =[],newstr='';
    arr.forEach(function(x){
        warr = x.split('');
        warr[0] = warr[0].toUpperCase();
        newstr+=warr.join('');
        newstr+=' ';
        
    })
    return newstr;
}