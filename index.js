const express = require('express')
const app = express()
const route = require('./routes/web')

app.set('view engine', 'ejs')
app.use('views', express.static(__dirname + '/views/'))
app.use(express.static(__dirname + '/public/'))

const port = process.env.PORT || 3000;

app.use(route)
app.listen(port, ()=>{
    console.log('listening to port ' + port)
})