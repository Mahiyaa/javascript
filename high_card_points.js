/*
In the card game bridge, four cards are given point values: Jack: 1, Queen: 2, King: 3, Ace: 4.
 Given an array of strings corresponding to a hand of cards 
 (the cards are represented like so: ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]), 
 return the total number of high card points for that hand.
 */

 function high_card_points(hand){
     var points ={
         "2":2,
         "3":3,
         "4":4,
         "5":5,
         "6":6,
         "7":7,
         "8":8,
         "9":9,
         "10":10,
         "J":1,
         "Q":2,
         "K":3,
         "A":4
     }, total = 0;

     hand.forEach(function(key){
        total+=points[key];
     });

    return total;
 }