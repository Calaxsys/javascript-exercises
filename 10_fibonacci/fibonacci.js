const fibonacci = function(countArg) {
    let count;
    if (typeof countArg !== "number") {
        count = parseInt(countArg);
    } else {
        count = countArg;
    }

    if (count < 0) return "OOPS"
    if (count == 0) return 0;

    let firstPrevious = 1;
    let secondPrevious = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = current;
    }

    return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
