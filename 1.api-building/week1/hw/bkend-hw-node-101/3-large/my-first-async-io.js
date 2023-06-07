const fs = require('fs');

let read = fs.readFile(process.argv[2],'utf-8', (err, data) => {
    return data.toString()
})
console.log(read.split('\n').length - 1)