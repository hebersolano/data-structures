class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkList {
  #length = 0;
  #head = null;

  constructor() {}

  size() {
    return this.#length;
  }
  head() {
    return this.#head;
  }

  add(element) {
    let node = new Node(element);
    if (this.#head === null) {
      this.#head = node;
    } else {
      currentNode = this.#head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.#length++;
  }

  remove() {
    let currentNode = this.#head;
    let previousNode;
    if (currentNode.element === element) {
      this.#head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    this.#length--;
  }

  isEmpty() {
    return this.#length === 0;
  }

  indexOf(element) {
    let currentNode = this.#head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  elementAt(index) {
    let currentNode = this.#head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  addAt(index, element) {
    let node = new Node(element);

    let currentNode = this.#head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.#length) return false;

    if (index === 0) {
      node.next = currentNode;
      this.#head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.#length++;
  }
}
