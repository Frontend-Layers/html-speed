import express from 'express'

const app = express()
const port = 3000

const apiKey = ''
const url = ''

import htmlSpeed from './html-speed.js'
htmlSpeed(url, apiKey)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (req, res) => {
  res.send('test')
})

app.listen(port, () => console.log(`Server: http://localhost:3000/`))