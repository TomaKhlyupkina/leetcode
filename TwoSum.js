// let nums = [ 15, 6, 8 ];
//
// nums.sort( (a, b) => a - b );
//
// console.log(nums)

let nums = [2,7,11,15];
let target = 9;

// let twoSum = function(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     console.log(sum);
// };
//
// twoSum(nums);

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return ([i, j]);
            }
        }
    }
}

console.log(twoSum(nums, target))