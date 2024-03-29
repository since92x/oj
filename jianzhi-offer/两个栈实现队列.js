/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */

const [pushStack, popStack] = [[], []];

function push(node) {
  while (popStack.length) {
    pushStack.push(popStack.pop());
  }
  pushStack.push(node);
}

function pop() {
  while (pushStack.length) {
    popStack.push(pushStack.pop());
  }
  return popStack.pop();
}
