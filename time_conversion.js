function time_conversion(minutes){
    var hours = Math.floor(minutes/60);
    var minutes = minutes%60;

    console.log(hours+":"+minutes);
}