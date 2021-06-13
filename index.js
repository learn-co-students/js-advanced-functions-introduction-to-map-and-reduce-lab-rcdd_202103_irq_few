// Your code here
function mapToNegativize(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = - sourceArray[i];
  }
  return sourceArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = 2 * sourceArray[i];
  }
  return sourceArray;
}

function mapToSquare(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = sourceArray[i] ** 2;
  }
  return sourceArray;
}


function reduceToTotal(sourceArray, startingPoint = 0) {
  for (let i = 0; i < sourceArray.length; i++) {
    startingPoint += sourceArray[i];
  }
  return startingPoint;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      return true;
    }
  }
  return false;
}