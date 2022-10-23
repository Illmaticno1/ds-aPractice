// stacks
//LIFO = last in first out
// when using a linked list as a stack you work from the left to remove and add the last item to have a O(1) operation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.height = 1;
  }
}

let myStack = new Stack(1);

console.log(myStack);
