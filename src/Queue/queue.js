class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * enqueue() - Adding node at the end
   *  1 -> 2 -> 3 -> 4
   */
  enqueue(value) {
    var newNode = new QueueNode(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  /**
   * dequeue() - Remove from the begining
   *  1 -> 2 -> 3 -> 4
   */
  dequeue() {
    // if there is no element in queue
    if (this.size === 0) return null;
    var removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removedNode;
  }
}

//Create a new Queue
let queue = new Queue();

//Add nodes to Queue end
queue.enqueue(1); // 1
queue.enqueue(2); // 1 -> 2
queue.enqueue(3); // 1 -> 2 -> 3
queue.enqueue(4); // 1 -> 2 -> 3 -> 4

//Removes nodes to From begining of the Queue (LIFO - Last In First Out)
queue.dequeue(); // 2 -> 3 -> 4
queue.dequeue(); // 3 -> 4

//Print Queue in console
console.log(queue);
