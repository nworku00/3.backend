const http = require('http');

const express = require('express')
const app = express()

const port = 3030
const hostname = '127.0.0.1';
const server = http.createServer(app);

const db = require('./db')

app.get('/', (req, res) => {
    res.send('Lunch Server')
})

app.get('/lunch', (req, res) => {
    console.log(req.url)
    res.send(`
    <ul>
    <li>fries</li>
    </ul>
    `)
})
app.get('/friends', (req, res) => {
    let htmlData = `<ul>`
    for (let friend of db) {
        htmlData += `<li>${friend.name}</li>`
    }
    htmlData += `</ul>`
    res.send(
    htmlData
    )
})

app.get('/friends/:handle', (req, res) => {
    const { handle } = req.params
    // res.send(`<h1>${handle}</h1>`)
    const friend = db.find(f => f.handle === handle);
    
    if (friend) {
        let htmlData = ``;
        htmlData += `<h1>${friend.name}</h1>`;
        htmlData += `<h3>${friend.handle}</h1>`;
        htmlData += `<h3>${friend.skill}</h1>`;
        res.send(htmlData);
    } else {
        res.status(404).send(`not found`)
    }
})

app.post('/lunch', (req, res) => {
    res.send(`
    <h1>Not Allowed</h1>
    `)
})

app.get('*', (req, res) => {
    res.status(404).send('Hold The L')
})

// app.listen(port, () => {
//     console.log(`the server is running at localhost:${port}`);
// })
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});