var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  //   console.log('new node', new_node.next);
  head = new_node;
  //   console.log(head);
}

function detectLoop(h) {
  var s = new Set();

  while (h != null) {
    if (s.has(h)) return true;

    s.add(h);
    console.log(s);
    h = h.next;
  }

  return false;
}

push(20);
push(10);
push(15);

head.next.next.next = head;

if (detectLoop(head)) console.log('Loop found');
else console.log('No Loop');
