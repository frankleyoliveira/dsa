// 225. Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/description/

class MyStack {
  private queue: number[] = []

  push(x: number): void {
    let length = this.queue.length
    this.queue.push(x)
    while (length > 0) {
      this.queue.push(this.pop())
      length--
    }
  }

  pop(): number {
    return this.queue.shift()!
  }

  top(): number {
    return this.queue[0]
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()) // 2
console.log(myStack.pop()) // 2
console.log(myStack.empty()) // false

export { }
