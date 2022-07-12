let findPlace = function (sourceArr, sourceElement, m) {
    for (let i = 0; i < sourceArr.length; i++) {
        if (sourceElement <= sourceArr[i]) {
            return i;
        }
    }
    return m + 1;
}

let insertElement = function (targetArr, insertIndex, insertValue) {
    for (let i = targetArr.length - 1; i > insertIndex; i--) {
        targetArr[i] = targetArr[i - 1]
    }
    targetArr[insertIndex] = insertValue
}

let merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < nums2.length; i++) {
        let sourceIndex = findPlace(nums1, nums2[i], m);
        insertElement(nums1, sourceIndex, nums2[i]);
        m++;
    }
    return nums1;
}

let nums1 = [-1,0,0,3,3,3,0,0,0];
let m = 6;
let nums2 = [1,2,2];
let n = 3

console.log(merge(nums1, m, nums2, n))