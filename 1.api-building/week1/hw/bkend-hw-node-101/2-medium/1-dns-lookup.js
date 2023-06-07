const dns = require("dns");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('enter domain url ', url => {
    dns.resolve4(url, (err, addresses) => {
        if (err) {
            console.log(err)
        } else {
            console.log(addresses[0])
        }
    })
    readline.close();
  });