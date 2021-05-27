/** Express Setup */
const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'))

// Change the port to 3000 if running locally
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server started, listening on', port))

app.get('/test', (req, res) => {
    console.log('Test Endpoint')
    res.send('Test API working')
})