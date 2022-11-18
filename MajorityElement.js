// Solution №1
// let majorityElement = function(nums) {
//     let maxCount = 0
//     let maxElement = 0
//     for (let i = 0; i < nums.length; i++) {
//         let counter = 1
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 counter++
//             }
//         }
//         if (counter > maxCount) {
//             maxCount = counter
//             maxElement = nums[i]
//         }
//     }
//     return maxElement
// };

// Solution №2
let majorityElement = function(nums) {
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    let maxCounter = 0
    let maxElement = 0
    for (let [key, value] of map) {
        if (value > maxCounter) {
            maxCounter = value
            maxElement = key
        }
    }
    return maxElement
}

let nums = [2,2,1,1,1,2,2,1,1,3,3,3,3,3,4,4,3]
console.log(majorityElement(nums))