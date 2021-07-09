const express = require('express')
const Routers = express.Router()
const controller = require('../controller/crud')
const { body, validationResult, check } = require('express-validator');
const {ceckDuplikat, main} = require('../data/index')

Routers.get('/',(req, res)=>{
    console.log()
    res.render(
        'dashboard',
    {
        layout:'layouts/dashboard',
        msg:req.flash('msg'),
        data: main(),
    },
    )
})

Routers.post('/', 
[
    body('nama').custom((value)=>{
        const duplikat = ceckDuplikat(value)
        if(duplikat){
            throw new Error('Nama sudah ada di database!')
        }
        return true
    }),
    check('email', 'Email tidak valid | harus pakai @gmail.com!').isEmail().notEmpty(), 
    check('kodepos', 'kodepos harus berupa angka | harus di isi | min:5!').isLength({min:4}).notEmpty(), 
    check('alamat', 'alamat tidak boleh kosong!').notEmpty(),
    check('negara', 'harus di isi nama negara | tidak boleh kosong!').isString().notEmpty()

],

controller.create);

module.exports = Routers