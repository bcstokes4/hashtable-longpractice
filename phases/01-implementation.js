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

    while(current && current.key !== key) {
          current = current.next
        }
        if (current) {
          current.value = value
        }
        else {
        newPair.next = this.data[i]
        this.data[i] = newPair
        this.count++
      }

    return this.count
  }


  read(key) {

    let i = this.hashMod(key)
    let currentPair = this.data[i]

    // if(currentPair.key !== key) return undefined

    while(currentPair) {
      if(currentPair.key === key) {
        return currentPair.value
      }
      currentPair = currentPair.next
    }
    if (!currentPair) {
      return undefined
    }
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
