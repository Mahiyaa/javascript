function bubblesort(arr){
    var i, j= arr.length,temp;

    while(j>=0){
        i=0;
        while(i<arr.length){
            if(arr[i]>arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            i++;
        }
        j--;

    }
    return arr;
    
}