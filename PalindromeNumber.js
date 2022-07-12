let x = 121;

let isPalindrome = function(x) {
    let numString = x.toString();
    let reverseNumString = numString.split("").reverse().join("")
    return reverseNumString === numString;
};


console.log(isPalindrome(x));