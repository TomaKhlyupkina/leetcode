let singleNumber = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result
};

let nums = [4, 2, 199, 2, 4, 5, 5, 2, 2, 7, 7]
console.log(singleNumber(nums))