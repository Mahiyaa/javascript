/*
# Write a method that takes in an integer (greater than one) and
# returns true if it is prime; otherwise return false.
#
# You may want to use the `%` modulo operation. `5 % 2` returns the
# remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
# of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
# More generally, if `m` and `n` are integers, `m % n == 0` if and only
# if `n` divides `m` evenly.
#
# You would not be expected to already know about modulo for the
# challenge.
#
# Difficulty: medium.
*/

function is_prime(n){
    var prime = true, divisors = [2,3,5,7];

    if (n===1) {
        prime = false;
        return prime
    }
    
    if (divisors.indexOf(n)!==-1) {
        prime = true;
        return prime
    }

    divisors.forEach(function(div){
        if(n%div===0){
            prime = false;
            return prime;
        }
    });
    return prime;
}
// test - 25 primes between 1 and 100 & one is neither prime nor composite
var a = [8,10,12,24,33,1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,97];


var b = a.map(is_prime);

console.log(b);