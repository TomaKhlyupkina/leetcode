let removeDuplicates = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

let nums = [0, 0, 0, 1, 1, 1]

console.log(removeDuplicates(nums))