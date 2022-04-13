class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addElement(element) {
    var node = new Node(element);
    var current;

    if (this.head == null) {
      this.head = node;
      console.log(this.head);
    } else {
      current = this.head;
      console.log('current');
      console.log(current);

      while (current.next) {
        console.log(current.next);
        current = current.next;
      }

      current.next = node;
      console.log(current.next);
    }
    this.size++;
  }

  printList() {
    var curr = this.head;
    var str = '';
    while (curr) {
      console.log(curr);
      str += curr.element + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}

var ll = new LinkedList();

let data = [10, 20, 30, 40];
data.forEach((d) => {
  ll.addElement(d);
});

ll.printList();
