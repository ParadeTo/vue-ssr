/**
 * Created by ayou on 18/1/25.
 */
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

// 这个方法返回一个仅仅用来解析json格式的中间件。这个中间件能接受任何body中任何Unicode编码的字符。支持自动的解析gzip和 zlib。
server.use(bodyParser.json());
// 这个方法也返回一个中间件，这个中间件用来解析body中的urlencoded字符，只支持utf-8的编码的字符。同样也支持自动的解析gzip和 zlib。
server.use(bodyParser.urlencoded({ extended: false }));

// api
let items = { 1: {title: "item1", content: "item1 content"}}
let id = 2
server.get("/api/items/:id", (req, res, next) => {
  res.json(items[req.params.id] || {})
})

server.get("/api/items", (req, res, next) => {
  res.json(items)
})

server.post("/api/items", (req, res, next) => {
  items[id] = req.body
  res.json({ id, item: items[id++] })
})

server.listen(8081)
