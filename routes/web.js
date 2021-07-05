const express = require('express')
const Routers = express.Router()

Routers.get('/', (req, res)=>{
    res.render('dashboard')
})

module.exports = Routers