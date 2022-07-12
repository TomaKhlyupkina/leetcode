    // Алгоритм Кадана
let maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums [i]);
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
};

let nums = [5, -1]
console.log(maxSubArray(nums))