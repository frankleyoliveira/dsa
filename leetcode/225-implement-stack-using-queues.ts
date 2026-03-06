// 225. Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/description/

class MyStack {
  private queue: number[] = []

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number {
    const auxQueue: number[] = []
    while (this.queue.length > 1) {
      auxQueue.push(this.queue.shift()!)
    }
    const n = this.queue.shift()!
    this.queue = [...auxQueue]

    return n
  }

  top(): number {
    const n = this.pop()
    this.push(n)
    return n
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}

// [1, 2, 3]

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()) // 2
console.log(myStack.pop()) // 2
console.log(myStack.empty()) // false

export { }
