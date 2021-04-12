const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(e) {
    const nodeList = new ListNode(e);
    if (!this.head) {
      this.head = nodeList;
      this.tail = nodeList;
    } else {
      this.tail.next = nodeList;
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    const headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }
}

module.exports = Queue;
