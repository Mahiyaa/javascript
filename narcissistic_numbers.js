/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.
For example, take 153 (3 digits):

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

Your code must return true or false depending upon whether the given number is a Narcissistic number.

*/

function isNarcissistic(num){
    var x = num,sum=0,digits=0, arr =[];

    while(x){
    
       arr.push(x%10); 
       x=Math.floor(x/10);
    }
    
    for (i=0;i<arr.length;i++){
        sum+=Math.pow(arr[i],arr.length);
    }

    return num === sum;
}