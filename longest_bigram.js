/*
A bigram is a pair of consecutive words. Given a string, return the longest bigram in that string.
Include the space between the words. Assume there will be no punctuation.
In the case of a tie, return the earlier bigram.
*/

function longest_bigram(sentence){
    var arr = sentence.split(' '),max = 0,bg_length,bi_gram, result=[];

    arr.forEach(function(word){
        result.push(word.length);
    });

    for(var i = 0; i<result.length;i++){
       bg_length = result[i]+result[i+1];
       if(bg_length>max){
          max = bg_length;
          bi_gram = arr[i]+" "+arr[i+1];
       }
    }

    return bi_gram;
 
}