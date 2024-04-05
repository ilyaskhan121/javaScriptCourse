(function(){
    console.log("hello world")
})();
//example
let myDate = function () {
  return Date()
}
console.log(myDate())
// arrow function
let sum = (num1, num2) => {
  return num1 + num2
}
console.log(sum(4, 5))
//example
let Myconcat = (arr1, arr2) => {
  return arr1.concat(arr2)
}
console.log(Myconcat([1, 23, 4], [7, 8, 9]))
