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
  push(value) {
    const newNode = new Node(value);
    if (this.height === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.height++;
    return this;
  }
  pop() {
    if (this.height === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.height--;
    return temp;
  }
}

let myStack = new Stack(7);
myStack.push(23);
myStack.push(3);
myStack.push(11);
console.log(myStack.pop());

console.log(myStack);
