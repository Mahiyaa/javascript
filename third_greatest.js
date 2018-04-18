function third_greatest(arr){
    var firstn =0,secondn=0, thirdn=0, i =0;

    while(i<arr.length){
        if (first === 0 || arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        }
        else if (second === 0 || arr[i] > second){
            third = second;
            second = arr[i];
        }
        else if(third ===0 || arr[i]> third){
            third = arr[i]
        }
        i++;
    }

    return third;
    
}



  