const express = require('express');
const router = express.Router()
const db = require('./db')
router.get('/', (req, res) => {
    res.json(db)
})

router.get('/cars', (req, res) => {
    let htmlData = `<ul>`
    for (let car of db) {
        htmlData += `<li>${car.make}, ${car.model}, ${car.color}</li>`
    }
    htmlData += `</ul>`
    res.send(htmlData)
})

router.get('/cars/:id',(req, res)=> {
    const { id } = req.params

    const car = db.find(c => c.id == id);

    if (car) {
        let htmlData = ``;
        htmlData += `<h1>${car.make}</h1>`;
        htmlData += `<h1>${car.model}</h1>`;
        htmlData += `<h1>${car.color}</h1>`;
        res.send(htmlData);
    } else {
        res.status(404).send(`<h1>not found</h1>`)
    }
})
module.exports = router