const http = require('http');

const express = require('express');
const router = require('./rout');
const app = express()

const port = 3000
const hostname = '127.0.0.1';
const server = http.createServer(app);

app.use('/', router)
// const db = require('./db')

// app.get('/', (req, res) => {
//     res.json(db)
// })

// app.get('/cars', (req, res) => {
//     let htmlData = `<ul>`
//     for (let car of db) {
//         htmlData += `<li>${car.make}, ${car.model}, ${car.color}</li>`
//     }
//     htmlData += `</ul>`
//     res.send(htmlData)
// })

// app.get('/cars/:id',(req, res)=> {
//     const { id } = req.params

//     const car = db.find(c => c.id === Number(id));

//     if (car) {
//         let htmlData = ``;
//         htmlData += `<h1>${car.make}</h1>`;
//         htmlData += `<h1>${car.model}</h1>`;
//         htmlData += `<h1>${car.color}</h1>`;
//         res.send(htmlData);
//     } else {
//         res.status(404).send(`<h1>not found</h1>`)
//     }
// })

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});