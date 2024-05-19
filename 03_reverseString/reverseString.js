const reverseString = function(string) {
    let splitString = string.split("");
    let reversedStringArray = splitString.reverse();
    let reversedString = reversedStringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
