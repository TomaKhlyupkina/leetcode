let romanToInt = function(s) {
    let map = new Map;
    map.set("I", 1)
    map.set("V", 5)
    map.set("X", 10)
    map.set("L", 50)
    map.set("C", 100)
    map.set("D", 500)
    map.set("M", 1000)

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if ((s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
            (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
            (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))) {

            sum += map.get(s[i+1]) - map.get(s[i]);
            ++i;
            continue;
        }
        sum += map.get(s[i]);
    }
    return sum;
};

s = "MCMXCIV";

console.log(romanToInt(s));