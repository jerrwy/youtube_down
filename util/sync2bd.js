let process = require('child_process')

module.exports = {
  sync: async () => {
    return new Promise((resolve,reject) =>{
      process.exec(`cd /root/youtube ; bypy syncup`, (err, stdout, stderr) => {
        if (err !== null) reject(err)
        console.log(stdout)
        resolve()
      })
    })
  }
}