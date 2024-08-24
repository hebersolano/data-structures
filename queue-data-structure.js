//! Queue
class Queue {
  #collection = [];

  print() {
    console.log(this.#collection);
  }

  enqueue(element) {
    if (typeof element[1] !== "number")
      throw new Error("invalid input: priority must be an integer");
    this.#collection.push(element);
  }

  dequeue() {
    return this.#collection.shift();
  }

  front() {
    return this.#collection[0];
  }

  get size() {
    return this.#collection.length;
  }

  isEmpty() {
    return this.#collection.length === 0;
  }
}

class PriorityQueue {
  #collection;

  print() {
    console.log(this.#collection);
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.#collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.#collection.length; i++) {
        if (element[1] < this.#collection[i][1]) {
          //checking priorities
          this.#collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) this.#collection.push(element);
    }
  }
  dequeue() {
    let value = this.#collection.shift();
    return value[0];
  }
  front() {
    return this.#collection[0];
  }
  get size() {
    return this.#collection.length;
  }
  isEmpty() {
    return this.#collection.length === 0;
  }
}
