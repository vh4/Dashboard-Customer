const express = require('express')
const app = express()
const route = require('./routes/web')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts');
const path = require('path')

//layouting
app.use(expressLayouts)

//set view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/views/'))
app.use(express.static(__dirname + '/public/'))

//mongodb dabatabases
const database  = "mongodb+srv://vh4:tony201m@cluster0.wra0o.mongodb.net/WPU_COBA?retryWrites=true&w=majority";
mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}).then(function(){
    console.log('database terhubung...........')
}).catch(()=>{
    console.log("database tidak terhubung")
})
db = mongoose.connection
db.on('error',()=>{
    console.log('database tdak terhubung')
})


//running program
const port = process.env.PORT || 3000;
app.use(route)
app.listen(port, ()=>{
    console.log('listening to port ' + port)
})