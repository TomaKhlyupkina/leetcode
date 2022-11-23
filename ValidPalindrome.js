//Solution №1
// let isPalindrome = function(s) {
//     if (s.length === 1) {
//         return true
//     }
//     let result = s.match(/\p{L}|\p{N}/gu)
//     if (result === null) {
//         return true
//     }
//     let resultStr = result.join("").toLowerCase()
//     for (let left = 0, right = resultStr.length - 1; left < right; left++, right--) {
//         if (resultStr[left] !== resultStr[right]) {
//             return false
//         }
//     }
//     return true
// };

//Solution №2
let isPalindrome = function(s) {
    let resultStr = s.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    for (let left = 0, right = resultStr.length - 1; left < right; left++, right--) {
        if (resultStr[left] !== resultStr[right]) {
        return false
        }
    }
    return true
};

let s = ".,ad"
console.log(isPalindrome(s))