export function hash(string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  console.log(hash);
  return hash % max;
}

class HashTable {
  #storage = [];
  #storageLimit = 4;

  #hash(string, max) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    console.log(hash);
    return hash % max;
  }
  #getIndex(key) {
    return this.#hash(key, this.#storageLimit);
  }

  print() {
    console.log(this.#storage);
  }

  add(key, value) {
    let index = this.#getIndex(key);
    if (this.#storage[index] === undefined) {
      this.#storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.#storage[index].length; i++) {
        if (this.#storage[index][i][0] === key) {
          this.#storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.#storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    let index = this.#getIndex(key);
  }
}
