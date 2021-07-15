var lengthOfLastWord = function(s) {
    const str=s.split('')
    console.log(str)
    for(let i=str.length-1;i>=0;i--){
        if(str[i]===' '){
            return str.length-i-1 
        }   
    }
    return str.length
};
const a=lengthOfLastWord("a")
console.log(a)