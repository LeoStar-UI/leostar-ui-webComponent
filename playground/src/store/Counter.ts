// store/Counter.ts
import { action, makeObservable, observable } from 'Mobx'
class Counter {
  constructor() {
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      reset: action,
    })
  }

  count = 0
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

  reset() {
    this.count = 0
  }
}
const counter = new Counter()
export default counter
