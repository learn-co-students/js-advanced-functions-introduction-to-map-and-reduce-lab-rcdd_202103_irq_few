// Your code here

const mapToNegativize=(src) =>{
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i])
  }
  return r
}

const mapToNoChange=(src)=> {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i])
  }
  return r
}

const mapToDouble=(src) =>{
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(2 * src[i])
  }
  return r
}

const mapToSquare=(src)=> {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i])
  }
  return r
}

const reduceToTotal=(src, startingPoint=0)=> {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}

const reduceToAllTrue=(src)=> {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

const reduceToAnyTrue=(src)=> {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}