/* Stacks */
// functions: push, pop, peek, length
let letters = [];
let word = "racecar";
let rword;

letters = Array.from(word);

letters.reverse();

rword = letters.join("");

console.log(word, rword);
if (rword === word) console.log(word + " is a palindrome");

// Stack class
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

/* Sets */
class MySet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  get size() {
    return this.collection.length;
  }

  // this method will return the union of two sets
  union() {}
}
