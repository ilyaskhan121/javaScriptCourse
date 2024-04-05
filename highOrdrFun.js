const filterDecimalNumber = (arr) => {
  let numb = arr.filter((num) => Number.isInteger(num))
  return numb
}
console.log(filterDecimalNumber([4, 4.5, 6.7, 8, 9]))
//example 2
const mapFloat_to_DecimalNumber = (arr) => {
  let numb = arr.map(num => Math.floor(num))
  return numb
}
console.log(mapFloat_to_DecimalNumber([4, 4.5, 6.7, 8, 9]))
