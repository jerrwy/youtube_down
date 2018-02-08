// let process = require('child_process')


// process.exec('hello', (err, stdout, stderr) => {
//   if (err !== null) {
//     console.log('exec error: ' + err);
//   }
// })


const crawler = require('./util/youtube_crawler')


// async function work() {
//   let data = await crawler('cat')
  
//   console.log(data)
// }



// work()


const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/search', async (req, res) => {
  let data = await crawler(req.query.q || 'cat')
  res.send(data)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))