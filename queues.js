// a queue is like getting in a line
// enque is getting in the line
// deque is getting out of the line
// FIFO = first in first out
// best data structure to use is a linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
}

let myQueue = new Queue(4);
console.log(myQueue);
