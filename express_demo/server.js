const express = require('express')
const app = express()
const port = 8880
// 自定义中间件
let Logger = function (req, res, next) {
  console.log('打印 loger')
  next() // 如果不执行next,下一个中间件请求将被挂起
}
app.use(Logger)

// 路由匹配
app.get(
  '/home',
  (req, res, next) => {
    return res.send('Hello World!') // 调用next(),会执行下一个回调函数(调用下一个中间件函数)
  },
  (req, res) => {
    // 第二个回调函数
  }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// 内置中间件 express.static()，可写多个 ，此外还有很多第三方中间件
app.use(express.static('public'))
// 可查看public目录下的文件，public不出现在路由中，localhost:8880/img/1.png
app.use(express.static('files'))

// 添加路由前缀 localhost:8880/static/img/1.png
// app.use('/static', express.static('public'))

// 若以上代码未命中路由，执行
// 理论上应用收到请求都会执行，但/home 匹配到第一个路由之后，没执行next(),所以此中间件不会执行
app.use(function (req, res, next) {
  res.status(404).send('NOT FOUND')
})
