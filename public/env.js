console.log('ENV LOADED')

$(document).ready(function () {
    let bidderArray = []
    
        $('#btnBid').click(function () {
        let name = $('#bidder_name').val()
        let value = $('#bidder_value').val()
        console.log(name)
        console.log(value)
        
        let data2 = {
            name:name, value:value
        }
        console.log(data2)
        bidderArray.push(data2)
        console.log(bidderArray)
        Value=Math.max.apply(Math, bidderArray.map(function(o) { return o.value; }))
        console.log(Value)
        let data= bidderArray.find(({value})=> parseInt(value)===Value)
        console.log(data)
        setTimeout(()=>{
            $.get('/bid', data, function (result) {
            console.log(result)
            
                $('#result').val(result.result)
            
        })
    },120000)
    })




})