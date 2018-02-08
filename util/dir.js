const fs = require('fs');

module.exports = {
  ls: async (dir) => {
    return new Promise((resolve,reject) =>{
      fs.readdir(dir || './', (err, files) => {
        if(err) reject(err)
        resolve(files)
      })
    })
  }
}