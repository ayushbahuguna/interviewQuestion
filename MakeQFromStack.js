let stack1 = [];
let stack2 = [];

function enQueue(element) {
  stack1.push(element);
  console.log(`Element enqueued ${element}`);
}

function deQueue() {
  if (stack2.length === 0) {
    if (stack1.length === 0) {
      console.log('Not Possible, Queue is empty');
    }

    while (stack1.length > 0) {
      let newItem = stack1.pop();
      stack2.push(newItem);
    }
  }

  console.log(`Element afer dequeue ${stack2.pop()}`);
}

// Add data to the stack
let data = [1, 2, 3, 4, 5];
// let data = [];

data.forEach((d) => {
  enQueue(d);
});

// Remove data from the stack to act as a Queue
for (let i = 0; i < data.length; i++) {
  deQueue();
}
