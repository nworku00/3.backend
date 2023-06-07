var cowsay = require('cowsay')
const fs = require('fs') 
var colors = require('colors');
// console.log(cowsay.think({
//     text: `I'm a mooodule`,
//     f: 'charlie',
// }).yellow)
let content = cowsay.think({text: "I'm a mooodule",f: 'charizardvice',})
fs.writeFile('./cows.txt', content, err => {
    if (err) {
        console.log(err);
    }
})