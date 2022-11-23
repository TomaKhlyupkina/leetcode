function sumNum (num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    return sum
}

let countBits = function(n) {
    let binaryNums = []
    for (let i = 0; i <= n; i++) {
        binaryNums.push(i.toString(2))
    }
    let sumBits = binaryNums.map(binaryNum => sumNum(binaryNum))
    return sumBits
};

n = 100000
console.log(countBits(n))
