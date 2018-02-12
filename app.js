const crawler = require('./util/youtube_crawler')
const youtube_dl = require('./util/youtube_dl')
const dir = require('./util/dir')
const sync2bd = require('./util/sync2bd')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req,res,next) => {
  if(req.path !== '/favicon.ico'){
    console.log(`req: method:${req.method} path:${req.path} params:${JSON.stringify(Object.assign({},req.query,req.body))}`)
  }
  next()
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/search', async (req, res) => {
  let data = await crawler(req.query.q || 'trending')
  res.send(data)
})

app.get('/list', async (req, res) => {
  let data = await dir.ls('/root/youtube')
  res.send(data)
})

app.get('/sync', async (req, res) => {
  let data = await sync2bd.sync()
  res.send(data)
})

app.post('/down', async (req, res) => {
  if(!req.body.url) return
  let data = await youtube_dl.downVideo(req.body.url)
  res.send(data)
})

app.listen(3000, () => console.log('app listening on port 3000!'))