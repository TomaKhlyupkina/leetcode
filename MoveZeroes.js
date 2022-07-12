let moveZeroes = function(nums) {
    // 1. Решение с уменьшением длины массива
    let arrLength = nums.length
    for (let i = 0; i < arrLength;) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.splice(nums.length, 0, 0)
            arrLength--
        } else {
            i++
        }
    }
    return nums

    // 2. Решение с циклом с конца массива
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1)
    //         nums.push(0)
    //     }
    // }
    // return nums
};

let nums = [0,0,1]
console.log(moveZeroes(nums))