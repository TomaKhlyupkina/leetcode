let lengthOfLastWord = function(s) {
    let count = 0;
    s = s.trim();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            break;
        }
        count++;
    }
    return count;
};

let s = "a"
console.log(lengthOfLastWord(s))