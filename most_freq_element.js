function most_freq_element(arr){ // wrong
    var elements = {},count,max=0,freq;

    arr.forEach(function(key){
        count = elements[key] || 0
        elements[key] = count+1;
    })

   for(var key in elements){
       if (elements[key]>= max){
           max = elements[key];
           freq = key;
       }
   }
   return freq;
}