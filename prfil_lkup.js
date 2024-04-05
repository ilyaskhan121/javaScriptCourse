let friends = [
  {
    firstname: "fahad",
    age: 21,
    cell_number: "03139298044",
    likes: ["pizaa", "krahi", "kebab"],
  },
  {
    firstname: "abuzar",
    age: 23,
    cell_number: "031385955044",
    likes: ["pizaa", "krahiwhfi", "kebab"],
  },
  {
    firstname: "yousaf",
    age: 30,
    cell_number: "031392w439854",
    likes: ["pizaa", "krahi", "keiwufbab"],
  },
]
function profile_lookup(name, prop) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].firstname === name) {
      return friends[i][prop] || "no such property"
    }
  }
  return "no such friends"
}
console.log(profile_lookup("fahad", ""))
