const filesystem = require('fs')

if(!filesystem.existsSync('database/')){
    filesystem.mkdirSync('database/')
}

if(!filesystem.existsSync('database/data.json')){
    filesystem.writeFileSync('database/data.json', '[]', 'utf-8')
}

const main = ()=> {
    const file =  filesystem.readFileSync('database/data.json', 'utf-8')
    const parse = JSON.parse(file)
    return parse;

}

const savejson = (data)=>{

    const load_data = main();
    load_data.push(data)
    filesystem.writeFileSync('database/data.json', JSON.stringify(load_data)) 

}

const ceckDuplikat = (nama)=>{
    const load = main()
    return load.find((data)=> data.nama === nama)
}

module.exports = {
    savejson,
    ceckDuplikat,
    main
}

