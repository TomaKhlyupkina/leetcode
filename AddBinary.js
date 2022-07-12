let conversionToDec = function (bin){
    bin = bin.split("").reverse().join("")
    let dec = 0;
    for (let i = bin.length - 1; i >= 0; i--) {
        dec += Math.pow(2, i) * bin[i];
    }
    return dec;
}

let conversionToBin = function (dec){
    let bin = "";
    if (dec === 0) {
        return "0";
    }
    for (; dec; dec = Math.trunc(dec / 2)) {
        bin += dec % 2
    }
    return bin.split("").reverse().join("");
}

let sumBin = function(a, b) {
    let sum = conversionToDec(a) + conversionToDec(b)
    return conversionToBin(sum);
};

let a = "1010"
let b = "0"

console.log(conversionToDec(a))
console.log(conversionToBin(0))
console.log(sumBin(a, b))