class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }
  setEnd() {
    this.end == true;
  }
  get isEnd() {
    return this.end;
  }
}

class Trie {
  #root = new Node();

  add(input, node = this.#root) {
    if (typeof input !== "string") throw new Error("input must be a string");
    if (!(node instanceof Node)) throw new Error("node must be instance of Node class");

    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substring(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substring(1), node.keys.get(input[0]));
    }
  }

  isWord(word) {
    if (typeof word !== "string") throw new Error("input must be a string");
    let node = this.#root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substring(1);
      }
    }

    return node.keys.has(word) && node.keys.get(word).isEnd ? true : false;
  }

  print() {
    let words = new Array();
    function search(node, string) {
      if (node.keys.size !== 0) {
        for (const letter of node.keys.keys()) {
          search(node.keys.get(letter), stringconcat(letter));
        }
        if (node.isEnd) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    }

    search(this.#root, new String());
    return words.length > 0 ? words : null;
  }
}
