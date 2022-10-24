// hash tables
// hash table in objects have a key value pair
// the key has to be a string which has to be unique and is put in a hash generator which calculates the address in memory
// hash is a one way operation which means you cant take the memory address and find the key or value
// hashes are deterministic meaning the hash will always produce the same number for the memory address
// collisions happen when separate keys are hashed and mapped to the same memory address
// how to handle collisions (two most common ways are linear probing and separate chaining)
// separate chaining - adding each item mapped to a single memory address to an array or to a linked list
// linear probing - if multiple key value pairs are mapped to the same memory address it checks for the next available slot and maps it to that location (open addressing)
// it is more optimal to have a more randomized distribution of items you add to the hash table if you have a prime number of items

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

let myHashTable = new HashTable();
// myHashTable.set('lumber', 70);
myHashTable.set('washers', 50);
myHashTable.set('bolts', 1400);
console.log(myHashTable.keys());
// console.log(myHashTable.get('bolts'));
// console.log(myHashTable.get('washers'));
// console.log(myHashTable.get('lumber'));

// console.log(myHashTable);
