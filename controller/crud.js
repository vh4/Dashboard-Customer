const {savejson, main} = require('../data/index')
const { body, validationResult } = require('express-validator');

const create = async (req, res)=>{
    console.log(req.body)
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.render('dashboard',{
            layout:'layouts/dashboard',
            errors: errors.array(),
            msg:req.flash('msg'),
            data: main(),
        })
    }else{
        savejson(req.body)
        req.flash('msg','data berhasil ditambahkan')
        res.redirect('/')
    }


}

module.exports = {
    create
}