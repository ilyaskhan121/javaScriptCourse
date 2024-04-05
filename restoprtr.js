//without rest operator
const sum = (function () {
  return function sum(x, y, z, a, b, c, d) {
    const args = [x, y, z, a, b, c, d]
    return args.reduce((a, b) => a + b)
  }
})()
console.log(sum(4, 5, 6, 3, 4, 5, 6))
//with rest operator
const sum2 = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b)
  }
})()
console.log(sum2(4, 5, 6, 3, 4, 5, 6))
