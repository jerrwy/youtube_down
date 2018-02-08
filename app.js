const crawler = require('./util/youtube_crawler')
const youtube_dl = require('./util/youtube_dl')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/search', async (req, res) => {
  let data = await crawler(req.query.q || 'cat')
  res.send(data)
})

app.post('/down', async (req, res) => {
  if(!req.body.url) return
  let data = await youtube_dl.downVideo(req.body.url)
  res.send(data)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))