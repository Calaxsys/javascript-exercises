const removeFromArray = function(array, ...num) {
   return array.filter(value => !num.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
