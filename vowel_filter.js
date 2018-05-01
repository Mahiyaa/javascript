/*
Given a string, remove every vowel if its index is odd.

*/

function vowel_filter(str){

    var arr1 = str.split(''), arr2=[] , vowels='aeiou'.split('');
    
    for(var i = 0; i<arr1.length;i++){
      if(vowels.indexOf(arr1[i])=== -1){ // not a vowel
          arr2.push(arr1[i]);
      }
      else {
        if (i%2===0){
          arr2.push(arr1[i]);
        }
      }
    }

    return arr2.join('');

}

