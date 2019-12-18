// TOOD

class LinkedNode {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  static build(arr) {
    return this.build(arr);
  }
  static getValues(head) {
    return this.getValues(head);
  }
  constructor(arr) {
    this.head = this.build(arr);
  }
  build(arr = this.head) {
    let head = null,
      tail = null;
    let list = arr.concat();
    let first = list.shift();
    if (tail !== undefined) {
      head = new LinkedNode(first);
      tail = head;
    }
    while ((first = arr.shift()) !== undefined) {
      tail.next = new LinkedNode(first);
      tail = tail.next;
    }
    this.head = head;
    return head;
  }
  getValues(head = this.head) {
    let p = head,
      res = [];
    while (p && (p = p.next)) {
      res.push(p.value);
    }
    return res;
  }
}

function plusOne(head) {
  // ???
}
