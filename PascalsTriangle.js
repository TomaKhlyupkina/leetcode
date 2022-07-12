let generate = function (numRows) {
    let sumArr = []
    for (let i = 0; i < numRows; i++) {
        sumArr.push([1])
        if (i > 0) {
            sumArr[0].push(0)
        }
    }

    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numRows; col++) {
            sumArr[row][col] = sumArr[row - 1][col - 1] + sumArr[row - 1][col]
        }
    }

    for (let i = 0; i < sumArr.length; i++) {
        sumArr[i] = sumArr[i].filter(element => element !== 0)
    }
    //
    // sumArr.forEach((innerArr) => {
    //     this.innerArr = innerArr.filter(element => element !== 0)
    // }, this)

    return sumArr
}



console.log(generate(5))
