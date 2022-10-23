//create a node class for each item in linked lists
class Node {
  constructor(value) {
    // this.value sets the value for each node
    this.value = value;
    // this.next sets the next value to null given there is no next value unless added
    this.next = null;
  }
}

// create the link list class
class LinkedList {
  constructor(value) {
    // instantiate a new node and pass in the value
    const newNode = new Node(value);
    // set head to the newNode value
    this.head = newNode;
    // set tail to the same reference as the head
    this.tail = this.head;
    // increment the lenght of the list
    this.length = 1;
  }
  // create a push method
  push(value) {
    // instantiate a node
    const newNode = new Node(value);
    // check to see if head exists
    if (!this.head) {
      // when head doesnt exist set it to the newly created node
      this.head = newNode;
      // when only a head exist it is also the tail so set it to the newNode
      this.tail = newNode;
    } else {
      // when a head exists look for the tail and set the new nodes value to its next
      this.tail.next = newNode;
      // reset the tail to the new node
      this.tail = newNode;
    }
    // increment the length of the list
    this.length++;
    return this;
  }
  // create a pop method
  pop() {
    // if the head doesnt exist return undefined given there is nothing at the end of the list to remove
    if (!this.head) {
      return undefined;
    }
    // set a temp variable to the head we have to start at the beginning of the list to get to the end
    let temp = this.head;
    // set another variable to keep track of the previous value
    let pre = this.head;
    // loop thru checking to see if there is a next value
    while (temp.next) {
      // when the is a next value set the pre to this variable
      pre = temp;
      // then set the temp variable to the next in line
      temp = temp.next;
    }
    // after looping to get to the node at the end set the tail to the previous value
    this.tail = pre;
    // set the next to null effectively removing the last item in the list
    this.tail.next = null;
    // decrement the length of the list
    this.length--;
    // when or if the list is empty set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //return the temp variable
    return temp;
  }
  // create a variable to add to the beginning of linked list (head)
  unshift(value) {
    // create an instance of node and save it to a variable
    const newNode = new Node(value);
    // if the head doesnt exist set the head and tail to the new node variable
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // when a head does exist set the new nodes next to the head
      newNode.next = this.head;
      // reset head to the new node
      this.head = newNode;
    }
    // increment the lists length
    this.length++;
    // return the whole linked list
    return this;
  }
  shift(value) {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    // create a variable to loop thru list
    let temp = this.head;
    // switch head and tail to start reversing
    this.head = this.tail;
    // set tail to temp which is head
    this.tail = temp;
    // create a next variable
    let next = temp.next;
    // create a previous node variable
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev = next;
      prev = temp.prev;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(1);

// myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.reverse();

// console.log(myLinkedList);

class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node1(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    // instantiate a node
    const newNode = new Node1(value);
    // check to see if head exists
    if (!this.head) {
      // when head doesnt exist set it to the newly created node
      this.head = newNode;
      // when only a head exist it is also the tail so set it to the newNode
      this.tail = newNode;
    } else {
      // when a head exists look for the tail and set the new nodes value to its next
      this.tail.next = newNode;
      // connect the new nodes prev to the previous tail
      newNode.prev = this.tail;
      // reset the tail to the new node
      this.tail = newNode;
    }
    // increment the length of the list
    this.length++;
    return this;
  }
  // create a pop method
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new Node1(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node1(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);

console.log(myDoublyLinkedList.remove(1));

console.log(myDoublyLinkedList);
