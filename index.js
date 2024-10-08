import BST from "./binary-search-tree.js";
import { HashTable, hash } from "./has-table.js";
import { LinkList } from "./link-list.js";
import { PriorityQueue } from "./queue-data-structure.js";
import MySet from "./set-data-structure.js";

// SET
// let mySet = new MySet([1, 2, 3], 4, 5, 6);
// console.log(mySet.values());

//  QUEUE
// const pq = new PriorityQueue();
// pq.enqueue(["Beau Carnes", 2]);
// pq.enqueue(["Quincy Larson", 3]);
// pq.enqueue(["Emma Stone", 1]);
// pq.enqueue(["Emily Dickinson", 2]);
// pq.enqueue(["Ana Solano", 2]);
// pq.enqueue(["Heber Solano", 4]);
// pq.print();

//BINARY SEARCH TREE
// const myBST = new BST(9, 4, 17, 3, 6, 22, 5, 7, 20, 10);
// console.log(myBST.inOrder());
// console.log(myBST.preOrder());
// console.log(myBST.postOrder());
// console.log(myBST.levelOrder());
// console.log(myBST.findMin());
// console.log(myBST.findMax());
// console.log(myBST.isPresent(54));
// console.log(myBST.findMinHeight(), myBST.findMaxHeight(), myBST.isBalance());
// const BST2 = new BST(8, 6, 1, 2, 4, 0);
// console.log(BST2.findMinHeight(), BST2.findMaxHeight(), BST2.isBalance());
// console.log(hash("string", 1));
// console.log(pq);

// HASH TABLE
// let ht = new HashTable();
// ht.add("beau", "person");
// ht.add("fido", "dog");
// ht.add("rex", "dinosaur");
// ht.add("tux", "penguin");
// console.log(ht);
// console.log(ht.lookup("tux"));
// ht.print();

//LINK LIST
const ll = new LinkList();
ll.add("kitten");
ll.add("puppy");
ll.add("dog");
ll.add("cat");
ll.add("fish");
console.log(ll.size());
// console.log(ll.remove("cat"));
console.log(ll.size());
console.log(ll);
console.log(ll.removeAt(3));
