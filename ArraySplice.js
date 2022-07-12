    // Метод Splice (1 вариант)
// let arraySplice = function(arr, index) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (i !== index) {
//             newArr.unshift(arr[i]);
//         }
//     }
// };


    // Метод Splice (2 вариант)
let arraySplice = function(arr, index) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};


let arr = [3,2,2,3]
let index = 1

console.log(arraySplice(arr, index))