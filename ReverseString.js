// Solution №1
// let reverseString = function(s) {
//     let length = s.length
//     for (let i = s.length - 1; i >= 0; i--) {
//         s.push(s[i])
//     }
//     s.splice(0, length)
//     return s
// };

// Solution №2
// let reverseString = function(s) {
//     let element = null
//     for (let i = s.length - 1; i >= 0; i--) {
//         element = s[i]
//         s.splice(i, 1)
//         s.push(element)
//     }
//     return s
// };

// Solution №3
let reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    for( ; start < end; start++, end--) {
        [s[start], s[end]] = [s[end], s[start]]
    }
    return s
};

let s = ["h","e","l","l","o"]
console.log(reverseString(s))