// Trees
// a full tree = a tree that has all pointers connecting to a node or no nodes at all.
// a perfect tree = every line is filled all the way across (all node's pointers point to a node)
// a complete tree =
// each node has a parent child relationship.. each node has at most one parent but can have multiple children.. the root no is only a parent
// a node that doesnt have any children is called a leaf node
// Binary Search Tree = every item to the left of each node has a lesser value than its parent and every item to the right has a greater value than its parent.
// BST Big O -
// lookup, insert, remove = O(log n) unless all items are greater than or less than the last which would make searching O(n)
// lookup is better on a BST because O(log n) is faster than the O(n) for linked list
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
console.log(myTree.contains(27));
console.log(myTree.contains(17));

// console.log(myTree);
