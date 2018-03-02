/**
 * Created by ayou on 18/1/25.
 */
const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const createRenderer = require('vue-server-renderer').createRenderer()
// const createApp = require('/path/to/built-server-bundle.js')


// const renderer = createRenderer({
//   template: fs.readFileSync('./index.template.html', 'utf-8')
// })
//
//
// server.get('*', (req, res) => {
//   const context = { url: req.url }
//   createApp(context).then(app => {
//     renderer.renderToString(app, (err, html) => {
//       if (err) {
//         if (err.code === 404) {
//           res.status(404).end('Page not found')
//         } else {
//           res.status(500).end('Internal Server Error')
//         }
//       } else {
//         res.end(html)
//       }
//     })
//   })
// })

// 下面是 fetchItem api
server.get("/api/item/:id", (req, res, next) => {
  res.json({
    title: "Item",
    content: "I am item"
  })
})



server.listen(8081)
