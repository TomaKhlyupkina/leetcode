let plusOne = function(digits) {
    let numStr = BigInt(digits.join(""))
    let sum = numStr + BigInt(1);
    let sumStr = sum.toString();
    return Array.from(sumStr);
};

let digits = [6]
console.log(plusOne(digits))