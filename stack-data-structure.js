//! Stacks
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
export default class Stack {
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
