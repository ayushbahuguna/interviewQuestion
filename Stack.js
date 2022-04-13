class Stack {
  constructor(maxSize) {
    if (isNaN(maxSize)) {
      maxSize = 10;
    }

    this.maxSize = maxSize;
    this.container = [];
  }

  push(element) {
    this.container.push(element);
  }

  pop() {
    if (this.container.length == 0) return 'UnderFlow';

    return this.container.pop();
  }

  // return the top most element of the stack, but dosen't delete it
  peek() {
    return this.container[this.container.length - 1];
  }

  printStack() {
    var str = '';
    for (var i = 0; i < this.container.length; i++)
      str += this.container[i] + ' ';
    return str;
  }

  isEmpty() {
    return this.container.length === 0;
  }

  isFull() {
    return this.container.length >= this.maxSize;
  }

  emptyStack() {
    this.container = [];
  }
}

var stack = new Stack();

let addStackItems = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

addStackItems.forEach((element) => {
  stack.push(element);
});

if (!stack.isFull()) {
  console.log(stack.printStack());
} else {
  console.log('Stack Overflow');
}

console.log(stack.pop());
console.log(stack.peek());

// stack.emptyStack();
