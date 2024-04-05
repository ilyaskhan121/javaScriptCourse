//Without ternary operator
const checkEqual = (a, b) => {
  if (a == b) {
    return true
  } else {
    return false
  }
}
console.log(checkEqual(5, 5))
//using ternary operator 
//condition ? statements-if-true : statements-if-false;
const checkEqual2 = (a, b) => {
  return a == b ? true : false
}
console.log(checkEqual2(4,5))