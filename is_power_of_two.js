function is_power_of_two(num){
    var power = 0;
    if(num===1){
        return true
    }
    while(num>0){
        if (num%2===0){
            num = num/2;
            power++;
            if(num===1){
                return true;
            }

        }
        else {
            return false;
        }

    }
}

// Driver program to test

function testit(num){
    var arr=[];
    for(var i =0; i<=num;i++){
      arr.push(i);
    }
    return arr;
  }
  
  var testarr = testit(48);
  
  
  
  var display = testarr.forEach(function(num){
    console.log(num +"--->"+ is_power_of_two(num) );
  });