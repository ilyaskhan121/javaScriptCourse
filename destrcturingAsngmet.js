//without destructing assignment
let car = {
  name: "honda",
  wheels: 4,
  model: 2024,
}
let nm = car.name
let w = car.wheels
let m = car.model
console.log(nm, w, m)
//with destructing assignment
let car2 = {
  name: "honda",
  wheels: 4,
  model: 2024,
}
const { nm: name, w: wheels, m: model } = car
console.log(nm, w, m)
