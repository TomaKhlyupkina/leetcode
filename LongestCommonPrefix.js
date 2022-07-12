let longestCommonPrefix = function(strs) {
    let prefix = "";
    let minStrLength = strs.reduce((a, b) => a.length <= b.length ? a : b).length

    for (let i = 0; i < minStrLength; i++) {
        let flag = true
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                flag = false
            }
        }
        if (flag) {
            prefix += strs[0][i];
        } else {
            return prefix;
        }
    }
    return prefix;
};

let strs = ["career","ocar","car"]

console.log(longestCommonPrefix(strs))