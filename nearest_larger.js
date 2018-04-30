/*
Write a method, nearest_larger(arr, i) which takes an array and an index.
 The method should return another index, j: this should satisfy:
(a) arr[i] < arr[j], AND (b) there is no j2 closer to i than j where arr[i] < arr[j2].
In case of ties (see example below), choose the earliest (left-most) of the two indices. 
If no number in arr is larger than arr[i], return nil.
[1,2,5,3,4]
*/

function nearest_larger(arr, i){ // not working
    var prev,next;
   // var mid = Math.floor(arr.length/2);
   if(i=0){
    for(var j = i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            return j;
        }
    }
   }
   else if(i===arr.length-1){
    for(var j = i-1;j>=0;j--){
        if(arr[i]<arr[j]){
            return j;
        }
    }
   }

   else{ 
       prev = i-1;
       next = i+1;
       for(var j = i;j<arr.length;j++){
           if(prev>=0){
               if (arr[prev]>arr[i]){
                   return prev;
               }
            }
            else if(next<arr.length){
                if (arr[next]>arr[i]){
                    return next;
                }
            }
            prev --;
            next ++;

        
           }
           
       }

       return "nil";
   }

  


