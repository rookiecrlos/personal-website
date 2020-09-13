const express = require('express')
const { readFile } = require('fs').promises

const app = express()

app.get('/', async (request, response) => {
    response.send( await readFile('./index.html', 'utf-8'))
})

app.listen(process.env.PORT || 5000, () => console.log(`App available on https://localhost:5000`))