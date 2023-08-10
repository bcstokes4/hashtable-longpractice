class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let i = this.hashMod(key)
    let newPair = new KeyValuePair(key, value)
    let current = this.data[i]
    if(!current) {
      current = newPair
      this.count++
      return
    } else if(!current.next && current.key === key){
      current.value = value
    } else {
      while(current) {
        if(current.key === key) current.value = value
        current = current.next
      }
      newPair.next = this.data[i]
      this.data[i] = newPair
      this.count++
    }
    return this.count
  }


  read(key) {
    // Your code here
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;