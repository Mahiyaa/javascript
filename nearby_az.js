function nearby_az(str){
    var num, yes = false;
    for(var i =0; i<str.length;i++){
        num =1;
        if(str[i]==='a'){
            while(num<4){
                if(str[i+num]==='z'){
                    yes = true;
                }
                num++;
            }
            
        }
    }
    return yes;
}