let process = require('child_process')

module.exports = {
  downVideo: async (url) => {
    return new Promise((resolve,reject) =>{
      process.exec(`cd /root/youtube & youtube-dl -f 22 ${url}`, (err, stdout, stderr) => {
        if (err !== null) reject(err)
        console.log(stdout)
        resolve()
      })
    })
  }
}