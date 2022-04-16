interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private _head?: StackNode;
  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }

  push(value: string) {
    if (this._size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this._head };
    this._head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new StackImpl(5);
stack.push("KIM 1");
stack.push("KIM 2");
stack.push("KIM 3");
stack.push("KIM 4");
stack.push("KIM 5");
while (stack.size !== 0) {
  console.log(stack.pop());
}

// stack.pop();
