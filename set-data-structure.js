//! Sets
export default class MySet {
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
    return this.#collection.indexOf(element) !== -1;
  }

  values() {
    return this.#collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.#collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.#collection.indexOf(element);
      this.#collection.splice(index, 1);
      return true;
    }
    return false;
  }

  get size() {
    return this.#collection.length;
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
