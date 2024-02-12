var missingInteger = function(nums) {
    const value=Math.max(...nums)
    for(let i=0;i<=value;i++){
   if(nums[i]< nums[i-1]){
    console.log(nums[i])
   }
    }
};


missingInteger([1,2,3,2,5])