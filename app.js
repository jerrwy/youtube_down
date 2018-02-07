// let process = require('child_process')


// process.exec('hello', (err, stdout, stderr) => {
//   if (err !== null) {
//     console.log('exec error: ' + err);
//   }
// })


const crawler = require('./util/youtube_crawler')


async function work() {
  let data = await crawler('cat')
  
  console.log(data)
}



work()