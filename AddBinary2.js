let addBinary = function (a, b) {
    if (a.length > b.length) {
        while (a.length !== b.length) {
            b = 0 + b;
        }
    } else {
        while (a.length !== b.length) {
            a = 0 + a;
        }
    }

    let sum = "";
    let shift = false;
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        if (a[i] === "0" && b[j] === "0") {
            if (shift) {
                sum += "1";
            } else {
                sum += "0";
            }
            shift = false;
        } else if (a[i] === "1" && b[j] === "1") {
            if (shift) {
                sum += "1";
            } else {
                sum += "0";
            }
            shift = true;
        } else {
            if (shift) {
                sum += "0";
                shift = true;
            } else {
                sum += "1";
                shift = false;
            }
        }
    }
    if (shift) {
        sum += "1";
    }
    return sum.split("").reverse().join("")
};

let a = "1010"
let b = "1010"
console.log(addBinary(a, b))
