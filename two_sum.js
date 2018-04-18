function two_sum(nums){
    var position = [];
    for(var i = 0;i<nums.length;i++){
        for(var j = 0; j<nums.length; j++){
            if(nums[i]+nums[j]===0){
                position.push(i);
                position.push(j);
                return position;
            }
        }
    }
    return "nil";
}