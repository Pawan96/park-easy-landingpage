let Express = require('express')
let app = new Express()

// server static webpages
app.use(Express.static('public'))

app.get('/test',(req,res)=>{
    console.log('Test Endpoint')
    res.send('Test API working')
})

app.get('/bid',(req,res)=>{
    console.log('Test endpoint for bid')
    let name=req.query.name;
    let value=parseInt(req.query.value);
    let winner='The winner is' + ' ' + name + ' ' + 'with bid value' + ' ' + value;
    let data={
        result:winner
    }
    res.json(data)
})

app.listen(3000,()=>{
    console.log('Server started on port 3000')
})