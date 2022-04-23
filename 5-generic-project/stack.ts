{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private _head?: StackNode<T>;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: T) {
      if (this._size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node: StackNode<T> = { value, next: this._head };
      this._head = node;
      this._size++;
    }
    pop(): T {
      // null == undefined, null !== undefined
      if (this._head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this._head;
      this._head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(5);
  stack.push("KIM 1");
  stack.push("KIM 2");
  stack.push("KIM 3");
  stack.push("KIM 4");
  stack.push("KIM 5");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(5);
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  stack2.push(4);
  stack2.push(5);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }

  // stack.pop();
}
