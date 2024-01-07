
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".




var longestCommonPrefix = function(strs) {
    for(let i=0;i<=strs.length;i++){
    // for(let j=strs;j<strs.length;j++){
        const strss=strs.toString()
        const value=strss[i].split("")
        console.log(value)
        
    // }
}  
    
};

const strs = ["flower","flow","flight"]
 longestCommonPrefix(strs)