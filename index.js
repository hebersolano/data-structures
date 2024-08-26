import { PriorityQueue } from "./queue-data-structure.js";
import MySet from "./set-data-structure.js";

// set test
let mySet = new MySet([1, 2, 3], 4, 5, 6);
console.log(mySet.values());

// queue test
const pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Emma Stone", 1]);
pq.enqueue(["Emily Dickinson", 2]);
pq.enqueue(["Ana Solano", 2]);
pq.enqueue(["Heber Solano", 4]);
// pq.sort();
pq.print();
