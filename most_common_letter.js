function most_common_letter(str){
   var strobj ={}, count = 0, max =0, idx, arr=[];

   for(var i =0;i<str.length;i++){
       count = strobj[str[i]]||0;
       strobj[str[i]] = count+1;    
   }

   for(var key in strobj){
     if (strobj[key]>max){
         max = strobj[key]
         idx = key
     }
   }
   arr.push(idx);
   arr.push(max);
       
   return arr;
}