let mySqrt = function(x) {
    let lhs = 0;
    let rhs = x;

    while (rhs - lhs >= 0) {
        let mid = Math.floor((lhs + rhs) / 2);

        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return mid;
        } else if (mid * mid > x) {
            rhs = mid - 1;
        } else {
            lhs = mid + 1;
        }
    }
};

let x = 16;
console.log(mySqrt(x))