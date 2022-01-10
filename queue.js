function createQueue() {
  const queue = [];

  return {
    //add item
    enqueue(item) {
      queue.unshift(item);
    },

    //remove item
    dequeue() {
      return queue.pop();
    },
    //next iten to be removed
    peek() {
      return queue[queue.length - 1];
    },
    //get length
    get length() {
      return queue.length;
    },
    //is empty
    isEmpty() {
      return queue.length === 0;
    },
    //return queue
    queueData() {
      return queue;
    },
  };
}

const q = createQueue();

q.enqueue("Make an egghead lesson");
q.enqueue("Help others learn");
q.enqueue("be happy");

console.log(q.peek());
