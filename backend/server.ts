const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const pathDist = path.join(__dirname, '../dist')

app.use(express.static(pathDist))

app.get('*', (req, res) => {
	res.sendFile('index.html', {root: pathDist})
})

app.listen(3000, function () {
	console.log(`Listening on port ${port}...`)
})
