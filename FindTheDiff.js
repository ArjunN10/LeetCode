var findTheDifference = function(s, t) {
    const sVal = s.split("").reduce((acc, char) => acc ^ char.charCodeAt(0), 0);
    const tVal = t.split("").reduce((acc, char) => acc ^ char.charCodeAt(0), 0);
    return String.fromCharCode(sVal ^ tVal);
};

const s = "abcd";
const t = "abcde";
console.log(findTheDifference(s, t)); // Output: e
