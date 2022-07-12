let searchInsertImpl = function (nums, target, leftBorder, rightBorder) {
    console.log("Индекс левой границы: ", leftBorder);
    console.log("Индекс правой границы: ", rightBorder);

    if (leftBorder === rightBorder) {
        return leftBorder;
    }

    let middleIndex = Math.floor((leftBorder + rightBorder) / 2);
    let middleValue = nums[middleIndex];
    console.log("Индекс среднего элемента: ", middleIndex)
    console.log("Значение среднего элемента: ",middleValue)

    if (target === middleValue) {
        return middleIndex;
    } else if (target > middleValue) {
        leftBorder = middleIndex + 1;
    } else if (target < middleValue) {
        rightBorder = middleIndex;
    }
    return searchInsertImpl(nums, target, leftBorder, rightBorder)
}

let searchInsert = function (nums, target) {
    console.log("Входной массив: ", nums);
    console.log("Искомое число: ", target);

    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    if (target < nums[0]) {
        return 0;
    }

    return searchInsertImpl(nums, target, 0, nums.length - 1)
}

let nums = [1]
let target = 0

console.log("Нашли нужный индекс: ", searchInsert(nums, target))


// let searchInsert = function(nums, target) {
//     console.log("Состояние массива на текущем шаге: ", nums)
//     if (nums.length === 0) {
//         return 0
//     }
//
//     let middleIndex = Math.floor((nums.length - 1) / 2)
//     console.log("Индекс среднего элемента: ", middleIndex)
//     let middleValue = nums[middleIndex]
//     console.log("Значение среднего элемента: ", middleValue)
//     if (target > middleValue) {
//         let newArr = [...nums]
//         newArr.splice(0, middleIndex + 1)
//         console.log("Отбросили элементы с индекса 0 до ", middleIndex)
//         searchInsert(newArr, target)
//     } else if (target === middleValue) {
//         console.log("Нашли нужный индекс: ", middleIndex)
//         return middleIndex;
//     } else {
//         let newArr = [...nums]
//         newArr.splice(middleIndex, middleIndex + 2)
//         console.log("Отбросили элементы с индекса ", middleIndex, " до ", nums.length - 1)
//         searchInsert(newArr, target)
//     }
// };


