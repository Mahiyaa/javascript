function prime_factors(n){

    var factor_arr = factors(n);
    console.log(factor_arr);
  
  }
  
  function is_prime(num){
    var count = num;
    while(count>2){
      if((num)%(count-1) ===0){
         return false;
      }
      count--;
    }
    return true;
  }
  
  function factors(n){
    var arr =[], i = n;
    while (i>0){
      if(n%i===0){
        if (is_prime(i)){
             arr.push(i);
      }
      }
      i--;
    }
    return arr;
  
  }
  