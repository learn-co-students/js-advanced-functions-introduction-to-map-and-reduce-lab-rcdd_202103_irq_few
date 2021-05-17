// Your code here
  
// Your code here
function mapToNegativize(sourceArray){
  let new_array = []
  for (let element of sourceArray){
    let e = element * -1
    new_array.push(e)
  }
  return new_array
}

function mapToNoChange(sourceArray){
  return sourceArray
}

function mapToDouble(sourceArray){
  let new_array = []
  for (let element of sourceArray){
    new_array.push(element * 2)}
    return new_array
}

function mapToSquare(sourceArray){
  let new_array = []
  for (let element of sourceArray){
  new_array.push(element * element)}
  return new_array
}

function reduceToTotal(sourceArray, startingPoint = 0){
  let total = startingPoint
  for (let element of sourceArray){
    total += element
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}