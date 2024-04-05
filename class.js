class student {
  constructor(message) {
    this.message = message
  }
}
let o1 = new student("Student is created")
console.log(o1.message)
//Example getter and setter
class book {
    constructor(author){
        this._author=author
    }
    get writer(){
        return this._author
    }
    set writer(updatedAuthor){
        this._author=updatedAuthor
    }
}
let a1 = new book();
a1.writer = "ilyas"
console.log(a1.writer) 