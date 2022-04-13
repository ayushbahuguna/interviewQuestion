class Queue {
  constructor() {
    this.items = [];
  }

  deQueue() {
    if (this.isEmpty()) return 'Underflow Array';

    // Return the first element of the array
    return this.items.shift();
  }

  enQueue(element) {
    this.items.push(element);
  }

  front() {
    if (this.isEmpty()) return 'Empty Array';

    return this.items[0];
  }

  isEmpty() {
    // Return true if lenght is 0
    return this.items.length == 0;
  }

  printQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + '';
    }

    return str;
  }
}

var queue = new Queue();

let elements = [10, 20, 30, 40, 50];

elements.forEach((element) => {
  queue.enQueue(element);
});

console.log(queue.printQueue());
console.log(queue.deQueue());
console.log(queue.front());
console.log(queue.printQueue());

// function generatePrintBinary(n) {
//   var q = new Queue();

//   q.enQueue('1');

//   while (n-- > 0) {
//     var s1 = q.front();
//     q.deQueue();
//     console.log(s1);

//     var s2 = s1;

//     q.enQueue(s1 + '0');

//     q.enQueue(s2 + '1');
//   }
// }

// generatePrintBinary(5);

// Hoisting
a = 5;
console.log(`a+${a}`);
var a;
