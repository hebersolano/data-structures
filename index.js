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

//! Sets
export class MySet {
  #collection = [];

  constructor(value, ...values) {
    if (value instanceof Array && value.length > 0) {
      value.forEach((e) => this.add(e));
    } else {
      this.add(value);
    }
    if (values.length > 0) {
      values.forEach((e) => this.add(e));
    }
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

  union(otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((element) => unionSet.add(element));
    secondSet.forEach((element) => unionSet.add(element));

    return unionSet;
  }

  intersection(otherSet) {
    let intersectionSet = new MySet();
    let firstSet = this.values;

    firstSet.forEach((element) => {
      if (otherSet.has(e)) intersectionSet.add(element);
    });

    return intersectionSet;
  }

  difference(otherSet) {
    let differenceSet = new MySet();
    let firstSet = this.values();

    firstSet.forEach((element) => {
      if (!otherSet.has(element)) differenceSet.add(element);
    });

    return differenceSet;
  }

  subset(otherSet) {
    let firstSet = this.values;

    return firstSet.every((value) => otherSet.has(value));
  }
}

//! Queue
class Queue {
  #collection = [];
}
