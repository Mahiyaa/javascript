

function fibonacci_i(n){
    var total=1;

    if (n===0){
        return total;
    }

    while (n>0){
        total*=n;
        n--;
    }
    return total;
}