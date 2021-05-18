// Your code here
const mapToNegativize = sourceArray =>{
  let newArray = []
  sourceArray.forEach(element => newArray.push(-1 * element))
  return newArray
}

const mapToNoChange = sourceArray =>{
  return sourceArray
}

const mapToDouble = sourceArray =>{
  let newArray = []
  sourceArray.forEach(element => newArray.push(element * 2))
  return newArray
}

const mapToSquare = sourceArray =>{
  let newArray = []
  sourceArray.forEach(element => newArray.push(element * element))
  return newArray
}

const reduceToTotal = (sourceArray, startingPoint = 0) =>{
  let total = startingPoint
  sourceArray.forEach(element => total += element)
  return total
}

const reduceToAllTrue = sourceArray =>{
  let returnValue = true
  sourceArray.forEach(value => {
    if (value === false){
    returnValue = false
    }
  })
  return returnValue
}

const reduceToAnyTrue = sourceArray =>{
    let returnValue = false
    sourceArray.forEach(value => {
      if (value === true){
        returnValue = true
      }
    })
    return returnValue
  }