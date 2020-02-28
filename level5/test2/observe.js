// 1、当你利用索引直接设置一个项时，vm.items[indexOfItem] = newValue
// 2、当你修改数组的长度时，例如： vm.items.length = newLength
// 以上两种情况vue检测不到改变
function defineReactive (data, key, val) {
  observe(val) // 如果是对象数组，继续监测下级对象
  var dep = new Dep()
  // 通过object.defineProperty劫持数据
  // 数据监听Observe,发布者Dep,订阅者watcher
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target) // 在这里添加一个订阅者
      }
      return val
    },
    set: function (newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
      console.log(`${key}已监听，值为${newVal}`)
      dep.notify()
    }
  })
}
Dep.target = null
function observe (data) {
  if (!data || typeof data !== 'object') {
    return
  }
  // Object.keys(data)获取data里的属性名数组['title']
  Object.keys(data).forEach(i => {
    defineReactive(data, i, data[i])
  })
}
function Dep () {
  this.subs = []
}
//  发布者
Dep.prototype = {
  addSub: function (sub) {
    console.log('sub', sub)
    this.subs.push(sub)
  },
  notify: function () {
    // 更新订阅者watcher
    this.subs.forEach(i => {
      i.update()
    })
  }
}
