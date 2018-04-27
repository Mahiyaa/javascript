function is_prime(n){
    var idx;
    if (n<=1){
        return false;
    }
   idx = 2;
   while (idx<n){
       if(n%idx===0){
           return false;
       }
       idx++;
   }

   return true;

}

function nth_prime(n){
  var count = 0,num;

  while(n>0){
      if(is_prime(count)){
          n--;
          num = count;
      }
      count++;
  }

  return num;
 
}