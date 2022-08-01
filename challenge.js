// Start with your code from last challenge.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(number) {
    if (!this.head) {
      this.head = new Node(number);
      this.size += 1;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(number);
    this.size += 1;
  }

  get(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (index === count) {
        return current.value;
      }
      else {
        current = current.next;
        count += 1;
      }
    }
    return null;
  }

  addAt(index, number) {
    let current = this.head;
    let count = 0;
    let previous;
    let newNode = new Node(number);
    if (index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(number, this.head);
      this.size += 1;
      return;
    }
    else{
      while (count < index) {
        previous = current;
        current = current.next;
        count += 1;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.size += 1;
  }

  remove(index) {
    let current = this.head;
    let previous;
    let count = 0;
    if (number > this.size) {
      return;
    }
    if (index === 0) {
      this.head = current.next;
    }
    else {
      while (count < index) {
        previous = current;
        current = current.next;
        count += 1;
      }
      previous.next = current.next;
    }
    this.size -= 1;
  }
}

const list = new LinkedList()

list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

console.log(list.get(2))
// => 11

console.log(list.get(3))
// => 5

module.exports = LinkedList
