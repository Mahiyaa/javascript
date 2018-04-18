/*
Write a method that takes in a number and returns a string, placing
# a single dash before and after each odd digit. There is one
# exception: don't start or end the string with a dash.
#
# You may wish to use the `%` modulo operation; you can see if a number
# is even if it has zero remainder when divided by two.
*/

function dasherize(num){
    var arr =[],numstr='',n,x;
    
    while(num){
        arr.push(num%10);
        num = Math.floor(num/10);
    }

    for(var i =arr.length-1;i>=0;i--){
     x = arr[i];
     if(x%2!==0){
       if( numstr[numstr.length-1]!=='-'){
         numstr +='-';
       }
       numstr+=x;
       if( numstr[numstr.length-1]!=='-'){
         numstr +='-';
       }
     }
    else{
      numstr+=x;
    }
    }
   
    return numstr.slice(1,numstr.length-1);
    
}



var num = 578831;
var x = dasherize(num);

console.log(x);


  




