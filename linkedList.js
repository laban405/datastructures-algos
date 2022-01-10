//linked list

function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);

      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length++;

      return node;
    },

    //pop
    pop() {
      //empty list
      if (this.isEmpty()) {
        return null;
      }

      //one node in list
      const node = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      //many nodes in list
      let current = this.head;
      let penultimate;
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        current = current.next;
      }

      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
    },

    //get node
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;

      while (i < index) {
        i++;
        current = current.next;
      }

      return current;
    },
    //delete
    delete() {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.next--;
        return deleted;
      }

      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      const deleted = current;
      previous.next = current.next;
      if (previous.next == null) {
        this.tail = previous;
      }

      this.length--;
      return deleted;
    },

    //is empty
    isEmpty() {
      return this.length === 0;
    },

    print() {
      const values = [];
      let current = this.head;

      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join("=>");
    },
  };
}

//execution

const list = createLinkedList();
const values = ["a", "b", "c", "d", "e"];

const nodes = values.map(val =>list.push(val))

console.log(list.push('f'))

console.log(list.print())
console.log(list.get(4))
