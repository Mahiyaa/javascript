function num_consecutive_elements(arr){
    var total=0;
    for(var i = 0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            total++;
        }   
    }
    return total;
}