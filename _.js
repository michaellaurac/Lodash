_ = {
  clamp: function(inputNumber, lowerBound, upperBound) {
    return lowerBound ? Math.min(Math.max(inputNumber, lowerBound), upperBound) : Math.min(inputNumber, upperBound);
  },
  inRange(inputNumber, startValue, endValue) {
    if (!endValue) {
      endValue = startValue;
      startValue = 0;
    }
    if (startValue > endValue ) {
      let tempValue = startValue;
      startValue = endValue;
      endValue = tempValue;
    }
    return startValue <= inputNumber && inputNumber < endValue
  },
  words(inputString) {
    return inputString.split(' ');
  },
};

// Do not write or modify code below this line.
module.exports = _;