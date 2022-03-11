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
  pad(inputString, targetLength) {
    const stringLength = inputString.length;
    if (stringLength >= targetLength) return inputString;
    else {
      const halfSpaces = ' '.repeat(Math.floor((targetLength - stringLength) / 2));
      const extraSpaces = ' '.repeat(targetLength - (halfSpaces.length + stringLength));
      return `${halfSpaces}${inputString}${extraSpaces}`;
    }
  },
  has(inputObject, key) {
    return !(typeof inputObject[key] === 'undefined');
  },
  invert(inputObject) {
    let invertedObject = {};
    for (const key in inputObject) {
      invertedObject[inputObject[key]] = key;
    };
    return invertedObject;
  },
  findKey(inputObject, predicateFunction) {
    for (const key in inputObject) {
      if (predicateFunction(inputObject[key])) return key;
    }
  }
};

// Do not write or modify code below this line.
module.exports = _;