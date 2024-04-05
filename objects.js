/* eslint-disable no-prototype-builtins */
const mycar = {
  // object
  "Name s": "Mustang gt500",
  Wheels: 4,
  seats: 2,
  Abilities: ["Drift", "Race", "Speed upto 400km/h"],
}
// const name = mycar["Name s"]
// console.log(name)
// console.log(mycar.seats)
// mycar["Name s"] = "sky line"
// console.log(mycar["Name s"])
// mycar.Sound = "ratatatatata"
// console.log(mycar.Sound)
// delete mycar.Abilities
// console.log(mycar)
// const myfunction = (val) => {
//   let result = ""
//   const my_Car = {
//     // object
//     Name: "Mustang gt500",
//     Wheels: 4,
//     seats: 2,
//     Abilities: ["Drift", "Race", "Speed upto 400km/h"],
//   }
//   result = my_Car[val]
//   return result
// }
// console.log(myfunction("Name"))
// const my_car1 = {
//   // object
//   Name: "Mustang gt500",
//   Wheels: 4,
//   seats: 2,
//   Abilities: ["Drift", "Race", "Speed upto 400km/h"],
// }
// const checkproperty = (check) => {
//   if (my_car1.hasOwnProperty(check)) {
//     return my_car1[check]
//   } else {
//     return "Not found "
//   }
// }
// console.log(checkproperty("Wheels"))
// const cars = {
//   Ilyas: {
//     name: "Mustang gt500",
//     seats: 2,
//     enginePower: "1300-HP ",
//   },
//   Fahad: {
//     name: "Mark_x",
//     seats: 4,
//     enginePower: "300-HP ",
//   },
// }
// console.log(cars.Fahad.name)
const myArray = [
  {
    Name: "Ilyaskhan",
    quaifications: ["SSC", "FSC", "BS"],
  },
  {
    Name: "Fahadkhan",
    quaifications: ["SSC", "FSC", "BS", "MS"],
  },
]
console.log(myArray[1].quaifications[2])
