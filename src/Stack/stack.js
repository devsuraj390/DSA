class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * push() - Add at begining (We will be adding new Node at begining and remove also from the begining)
   * 1 -> 2 -> 3
   */
  push(value) {
    var newNode = new StackNode(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      var currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }
    this.size++;
    return this;
  }

  /**
   * pop() - Removes Node from the begining
   * 1 -> 2 -> 3
   */

  pop() {
    if (this.size === 0) return undefined;
    else if (this.first === this.last) this.last = null;
    else {
      var temp = this.first;
      this.first = temp.next;
    }
    this.size--;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return temp;
  }
}

var stack = new Stack();

//Add nodes to begining
stack.push(1); // 1
stack.push(2); // 2 -> 1

//Remove from the begining
stack.pop(); // 1

console.log(stack);
