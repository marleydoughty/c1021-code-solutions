/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const firstVal = queue.dequeue();
    if (queue.peek() === undefined) {
      return firstVal;
    }
    if (firstVal < queue.peek()) {
      return firstVal;
    }
    queue.enqueue(firstVal);
  }
}
