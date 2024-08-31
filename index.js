import BST from "./binary-search-tree.js";
import { PriorityQueue } from "./queue-data-structure.js";
import MySet from "./set-data-structure.js";

// SET
let mySet = new MySet([1, 2, 3], 4, 5, 6);
// console.log(mySet.values());

//  QUEUE
const pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Emma Stone", 1]);
pq.enqueue(["Emily Dickinson", 2]);
pq.enqueue(["Ana Solano", 2]);
pq.enqueue(["Heber Solano", 4]);
// pq.print();

//BINARY SEARCH TREE
const myBST = new BST(8, 6, 1, 0, 2, 4, 32, 54, 44, 122, 54, 1, 2);
console.log(myBST.findMin());
console.log(myBST.findMax());
console.log(myBST.isPresent(54));
