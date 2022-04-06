/**
 * Node:
 * data - value
 * next node reference - next
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * push() - Adds a new Node to the end of Linked List
   */
  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * pop() - Removes the last Node from the Linked List
   */
  pop() {
    if (!this.head) return undefined; //Empty List
    var currentNode = this.head;
    var previousNode = currentNode;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  /**
   * shift() - Removes Node from the begining of the list.
   */
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  /**
   * unshift() - Adding a new node to the begining of the list
   */
  unshift(value) {
    var newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * get() - Retrieving a node by it's postion(index) in the Linked List.
   */
  get(index) {
    if (index < 0 || index > this.length || !this.head) return null;
    var counter = 0;
    var currentNode = this.head;
    while (counter !== index) {
      var currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  /**
   * set() - Changing the value of a node based on it's position(index) in the Linked List.
   */
  set(value, index) {
    var node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  /**
   * insert() - Adding a Node to the Linked List at a specific postion.
   */
  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) this.unshift(value);
    else if (index === this.length) this.push(value);
    else {
      var newNode = new Node(value);
      var previousNode = this.get(index - 1);
      var temp = previousNode.next;
      previousNode.next = newNode;
      newNode.next = temp;

      this.length++;
      return true;
    }
  }

  /**
   * remove() - Removing a node from the Linked List at a specific postion
   */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    else if (index === 0) this.shift();
    else if (index === this.length - 1) this.pop();
    else {
      var beforeNode = this.get(index - 1);
      var removedNode = beforeNode.next;
      beforeNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }

  /**
   * reverse() - Reversing the Linked List in Place
   */
  reverse() {
    //swap the head and tail
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var previous = null;
    var next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return true;
  }
}

var list = new SinglyLinkedList();
//Add Nodes
list.push(1); // 1
list.push(2); // 1 -> 2
list.push(3); // 1 -> 2 -> 3
list.push(4); // 1 -> 2 -> 3 -> 4
list.push(5); // 1 -> 2 -> 3 -> 4 -> 5

// //Remove Node from end
list.pop(); // 1 -> 2 -> 3 -> 4

// //Remove Node from the start
list.shift(); // 2 -> 3 -> 4

// //Adds a Node to the start of List
list.unshift(10); // 10 -> 2 -> 3 -> 4

list.get(2); // 3

// //Update a node
list.set(11, 2); // 10 -> 2 -> 11 -> 4

//Add a new Node
list.insert(25, 3); // 10 -> 2 -> 11 -> 25 -> 4

//Remove a node
list.remove(2); // 10 -> 2 -> 25 -> 4

//Reeverse the list
list.reverse(); // 4 -> 25 -> 2 -> 10

console.log(list);
