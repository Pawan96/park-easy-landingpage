let Express = require('express')
let app = new Express()

// server static webpages
app.use(Express.static('public'))

app.get('/test',(req,res)=>{
    console.log('Test Endpoint')
    res.send('Test API working')
})

app.listen(3000,()=>{
    console.log('Server started on port 3000')
})