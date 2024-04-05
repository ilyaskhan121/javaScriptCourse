let myArray = []
let n = 0
while (n < 5) {
  myArray.push(n)
  n++
}
console.log(myArray)
let myArray2 = []
for (let n = 1; n < 10; n += 2) {
  myArray2.push(n)
}
console.log(myArray2)
/* nested loops*/
function mul(arr) {
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    for (let l= 0; l< arr[i].length; l++) {
      product *= arr[i][l]
    }
  }
  return product
}
console.log(mul([[1,2],[3,4],[5,6,7]]))
/*do-while loop*/
