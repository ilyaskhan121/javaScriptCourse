let collection = {
  64: {
    name: "ilyas",
    age: 20,
    qualifications: ["FSc", "Bs"],
  },
  65: {
    name: "fahad",
    age: 19,
    qualifications: ["FSc", "Bs"],
  },
  66: {
    name: "abuzar",
    age: 21,
    qualifications: ["FSc", "MBBS"],
  },
}
let collectionCopy = JSON.parse(JSON.stringify(collection))
function update_collection(id, prop, value) {
  if (value === "") {
    delete collection[id][prop]
  } else if (prop === "qualifications") {
    collection[id][prop] = collection[id][prop] || []
    collection[id][prop].push(value)
  } else {
    collection[id][prop] = value
  }
  return collection
}
console.log(update_collection(65,"ase besa","akhadekhwa"))