const fs = require('fs')

//1

// fs.writeFile('./file1.txt', 'hey im file 1', err => {
//     if (err) {
//         console.log(err);
//     }
// })

//2

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question('enter filename ', answer => {
//     fs.readFile(`${answer}.txt`, 'utf8', (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data)
//         }
//     })
//     readline.close();
//   });

//3

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter filename ', answer => {
    fs.readFile(`${answer}.txt`, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            rl.question('enter new filename ', answer => {
                fs.writeFile(`./${answer}.txt`, data, err => {
                    console.log(err)
                })
                rl.close();
            })
        }
    })
  });