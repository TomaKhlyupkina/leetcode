let removeElement = function(nums, val) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};


let nums = [3,2,2,3]
let val = 3

console.log(removeElement(nums, val))