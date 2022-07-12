    // Поиск подстроки в строке (1 вариант) - Регулярное выражение
// let strStr = function(haystack, needle) {
//     let myPattern = new RegExp(needle)
//     return haystack.search(myPattern)
// };

    // Поиск подстроки в строке (2 вариант) - Алгоритм КМП
    let needle = "cabcd"
    let haystack = "abcabaabcabcd"

let patternArray = function (needle) {
    let patternArr = [0];
    let suffixIndex = 1;
    let prefixIndex = 0;

    while (suffixIndex < needle.length) {
        if (needle[prefixIndex] === needle[suffixIndex]) {
            patternArr[suffixIndex] = prefixIndex + 1;
            suffixIndex++;
            prefixIndex++;
        } else if (prefixIndex === 0){
                patternArr[suffixIndex] = 0;
                suffixIndex++;
        } else {
                prefixIndex = patternArr[prefixIndex - 1]
        }
    }
    return patternArr;
}


let strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    
    let haystackIndex = 0;
    let needleIndex = 0;

    let patternArr = patternArray(needle)

    while (haystackIndex < haystack.length) {
        if (haystack[haystackIndex] === needle[needleIndex]) {
            haystackIndex++;
            needleIndex++;
            if (needleIndex === needle.length) {
                return (haystack.indexOf(needle))
            }
        } else if (needleIndex === 0) {
                haystackIndex++;
        } else {
                needleIndex = patternArr[needleIndex - 1]
        }
    }
    return -1;
}

console.log(strStr(haystack, needle))